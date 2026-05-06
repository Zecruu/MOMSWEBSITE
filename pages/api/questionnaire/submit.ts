import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import { validateAnswers } from '@/lib/questionnaire/validation'
import { checkRate } from '@/lib/questionnaire/rate-limit'
import { renderEmail } from '@/lib/questionnaire/email'
import type { Answers, Locale } from '@/lib/questionnaire/types'

type SubmitResponse = { ok: true } | { ok: false; error: string }

function clientIp(req: NextApiRequest): string {
  const fwd = req.headers['x-forwarded-for']
  if (typeof fwd === 'string' && fwd.length > 0) {
    return fwd.split(',')[0].trim()
  }
  if (Array.isArray(fwd) && fwd.length > 0) {
    return fwd[0].split(',')[0].trim()
  }
  return req.socket.remoteAddress ?? 'unknown'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<SubmitResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const ip = clientIp(req)
  const rate = checkRate(ip)
  if (!rate.ok) {
    if (rate.retryAfterSeconds) res.setHeader('Retry-After', String(rate.retryAfterSeconds))
    return res.status(429).json({ ok: false, error: 'Too many submissions. Try again later.' })
  }

  const body = req.body as { answers?: Answers; lang?: string } | undefined
  if (!body || typeof body !== 'object' || !body.answers || typeof body.answers !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid request body' })
  }

  const answers = body.answers as Answers
  const lang: Locale = body.lang === 'es' ? 'es' : 'en'

  const v = validateAnswers(answers)
  if (!v.ok) return res.status(400).json(v)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[questionnaire] RESEND_API_KEY is not set')
    return res.status(500).json({ ok: false, error: 'Email service not configured' })
  }

  const from = process.env.FORM_FROM_EMAIL ?? 'forms@prdecompressioncenters.com'
  const to = 'nomnk5138@gmail.com'

  const meta = {
    ip,
    referrer: (req.headers.referer as string | undefined) ?? '',
    userAgent: (req.headers['user-agent'] as string | undefined) ?? '',
    language: lang,
    timestamp: new Date().toISOString(),
  }

  const email = renderEmail(answers, meta)
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: typeof answers.email === 'string' ? answers.email : undefined,
    })
    if (error) {
      console.error('[questionnaire] Resend error:', error)
      return res.status(502).json({ ok: false, error: 'Failed to send email' })
    }
  } catch (e) {
    console.error('[questionnaire] Send exception:', e)
    return res.status(502).json({ ok: false, error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}
