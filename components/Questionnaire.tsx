"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { questions, contactFields } from '@/lib/questionnaire/config'
import type { Answers, Locale } from '@/lib/questionnaire/types'

const COPY = {
  back: { en: 'Back', es: 'Atrás' },
  next: { en: 'Next', es: 'Siguiente' },
  submit: { en: 'Send my info', es: 'Enviar mi información' },
  sending: { en: 'Sending…', es: 'Enviando…' },
  contactHeading: { en: 'How can we reach you?', es: '¿Cómo podemos contactarte?' },
  contactSub: {
    en: 'We respond within 24 hours, Monday through Friday.',
    es: 'Respondemos dentro de 24 horas, de lunes a viernes.',
  },
  successTitle: { en: 'Thanks — we got your info', es: 'Gracias — recibimos tu información' },
  successBody: {
    en: "A team member will reach out within 24 hours. If you'd like to talk sooner, call 787-261-8258.",
    es: 'Un miembro del equipo te contactará en 24 horas. Si prefieres hablar antes, llama al 787-261-8258.',
  },
  errorGeneric: {
    en: 'Something went wrong. Please try again.',
    es: 'Algo salió mal. Por favor intenta de nuevo.',
  },
  rateLimited: {
    en: 'Too many submissions. Please try again in a few minutes.',
    es: 'Demasiados envíos. Intenta de nuevo en unos minutos.',
  },
  required: { en: 'Required', es: 'Requerido' },
  step: { en: 'Step', es: 'Paso' },
  of: { en: 'of', es: 'de' },
}

function pick(text: { en: string; es: string }, lang: Locale): string {
  return text[lang] ?? text.en
}

const Questionnaire: React.FC = () => {
  const { language } = useLanguage()
  const lang = (language as Locale) ?? 'en'

  const totalSteps = questions.length + 1
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const liveRef = useRef<HTMLDivElement | null>(null)

  const isContactStep = stepIndex === questions.length
  const currentQuestion = !isContactStep ? questions[stepIndex] : null

  useEffect(() => {
    optionRefs.current = []
    if (currentQuestion && liveRef.current) {
      liveRef.current.textContent = pick(currentQuestion.text, lang)
    }
  }, [stepIndex, lang, currentQuestion])

  const progress = useMemo(() => {
    return Math.min(100, ((stepIndex + (done ? 1 : 0)) / totalSteps) * 100)
  }, [stepIndex, totalSteps, done])

  const goBack = () => {
    setError(null)
    if (stepIndex > 0) setStepIndex((s) => s - 1)
  }

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((a) => ({ ...a, [questionId]: value }))
    setError(null)
    setStepIndex((s) => s + 1)
  }

  const handleOptionKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number, total: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (idx + 1) % total
      optionRefs.current[next]?.focus()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (idx - 1 + total) % total
      optionRefs.current[prev]?.focus()
    }
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return
    setError(null)

    for (const f of contactFields) {
      const v = (answers[f.id] ?? '').trim()
      if (f.required !== false && !v) {
        setError(pick({ en: `${pick(f.label, 'en')} is required`, es: `${pick(f.label, 'es')} es requerido` }, lang))
        return
      }
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        setError(pick({ en: 'Please enter a valid email', es: 'Por favor ingresa un correo válido' }, lang))
        return
      }
      if (f.type === 'phone' && v.replace(/\D/g, '').length < 10) {
        setError(pick({ en: 'Phone must have at least 10 digits', es: 'El teléfono debe tener al menos 10 dígitos' }, lang))
        return
      }
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/questionnaire/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, lang }),
      })
      if (res.status === 429) {
        setError(pick(COPY.rateLimited, lang))
        return
      }
      const data = await res.json().catch(() => ({ ok: false }))
      if (!res.ok || !data.ok) {
        setError(pick(COPY.errorGeneric, lang))
        return
      }
      setDone(true)
    } catch {
      setError(pick(COPY.errorGeneric, lang))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="questionnaire"
      className="w-full max-w-2xl mx-auto px-4 py-12 md:py-16 text-white"
      aria-label={pick({ en: 'Lead questionnaire', es: 'Cuestionario' }, lang)}
    >
      <div className="rounded-3xl bg-black/70 backdrop-blur-md border border-[#00d9ff33] shadow-[0_0_30px_rgba(0,217,255,0.15)] p-6 md:p-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-white/60 mb-2 uppercase tracking-wider">
            <span>
              {pick(COPY.step, lang)} {Math.min(stepIndex + 1, totalSteps)} {pick(COPY.of, lang)} {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe]"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div ref={liveRef} role="status" aria-live="polite" className="sr-only" />

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mb-4">
                <Check className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{pick(COPY.successTitle, lang)}</h3>
              <p className="text-white/80 max-w-md mx-auto">{pick(COPY.successBody, lang)}</p>
            </motion.div>
          ) : isContactStep ? (
            <motion.form
              key="contact"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleContactSubmit}
              className="space-y-5"
              noValidate
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{pick(COPY.contactHeading, lang)}</h3>
                <p className="text-white/70 text-sm">{pick(COPY.contactSub, lang)}</p>
              </div>

              {contactFields.map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label htmlFor={`q-${f.id}`} className="text-sm font-medium text-white/90">
                    {pick(f.label, lang)}
                    {f.required !== false && <span className="text-[#00d9ff]"> *</span>}
                  </label>
                  <Input
                    id={`q-${f.id}`}
                    type={f.type === 'phone' ? 'tel' : f.type}
                    inputMode={f.type === 'phone' ? 'tel' : f.type === 'email' ? 'email' : 'text'}
                    autoComplete={
                      f.id === 'name' ? 'name' : f.id === 'email' ? 'email' : 'tel'
                    }
                    placeholder={f.placeholder ? pick(f.placeholder, lang) : undefined}
                    required={f.required !== false}
                    value={answers[f.id] ?? ''}
                    onChange={(e) => setAnswers((a) => ({ ...a, [f.id]: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-[#00d9ff]"
                  />
                </div>
              ))}

              {error && (
                <div role="alert" className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between pt-2 gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={goBack}
                  disabled={submitting}
                  className="text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {pick(COPY.back, lang)}
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:from-[#4facfe] hover:to-[#00f2fe] text-black font-semibold rounded-full px-6 py-5 shadow-lg disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {pick(COPY.sending, lang)}
                    </>
                  ) : (
                    <>
                      {pick(COPY.submit, lang)}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          ) : currentQuestion ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                {pick(currentQuestion.text, lang)}
              </h3>

              <div role="radiogroup" aria-label={pick(currentQuestion.text, lang)} className="grid gap-3">
                {currentQuestion.options.map((opt, idx) => {
                  const selected = answers[currentQuestion.id] === opt.value
                  return (
                    <button
                      key={opt.id}
                      ref={(el) => {
                        optionRefs.current[idx] = el
                      }}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => handleSelect(currentQuestion.id, opt.value)}
                      onKeyDown={(e) => handleOptionKey(e, idx, currentQuestion.options.length)}
                      className={cn(
                        'group flex items-center justify-between gap-3 w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200',
                        'bg-white/5 border-white/15 hover:border-[#00d9ff] hover:bg-white/10',
                        'focus-visible:outline-none focus-visible:border-[#00d9ff] focus-visible:ring-2 focus-visible:ring-[#00d9ff]/50',
                        selected && 'border-[#00d9ff] bg-[#00d9ff]/10'
                      )}
                    >
                      <span className="text-base md:text-lg font-medium text-white">
                        {pick(opt.label, lang)}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#00d9ff] group-hover:translate-x-1 transition-all" />
                    </button>
                  )
                })}
              </div>

              {stepIndex > 0 && (
                <div className="mt-6">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={goBack}
                    className="text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {pick(COPY.back, lang)}
                  </Button>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Questionnaire
