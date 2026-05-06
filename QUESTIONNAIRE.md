# Lead-capture questionnaire

A multi-step "best answer" questionnaire that collects lead info one question at a time and emails completed submissions to `nomnk5138@gmail.com` via Resend.

## Where things live

| Purpose | File |
| --- | --- |
| Question text & options (edit here) | `lib/questionnaire/config.ts` |
| Shared types | `lib/questionnaire/types.ts` |
| Server-side validation | `lib/questionnaire/validation.ts` |
| In-memory rate limiter (5 / 10 min per IP) | `lib/questionnaire/rate-limit.ts` |
| Email HTML rendering | `lib/questionnaire/email.ts` |
| UI component | `components/Questionnaire.tsx` |
| API route | `pages/api/questionnaire/submit.ts` |

## Embedding the form

The component is a section that wraps itself in `<section id="questionnaire">`. Drop it into any page:

```tsx
import Questionnaire from '@/components/Questionnaire'

export default function MyPage() {
  return (
    <main>
      {/* …other content… */}
      <Questionnaire />
    </main>
  )
}
```

Link to it from a CTA with `<a href="#questionnaire">…</a>` or `<Link href="/#questionnaire">…</Link>`.

## Editing questions

Open `lib/questionnaire/config.ts`. Two arrays:

- `questions` — the choice steps. Each entry has `id`, `text` (en/es), and an `options` array. Add/remove/reorder freely; the UI re-flows automatically.
- `contactFields` — the final step's three inputs (name / email / phone). The shape is fixed; don't add more fields here without updating `Answers` and the email renderer.

Every text label is bilingual (`{ en, es }`); the component picks the right one from `LanguageContext`.

## Required env vars

| Variable | Required? | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | **Yes** | Starts with `re_`. Create at https://resend.com/api-keys. |
| `FORM_FROM_EMAIL` | No | Defaults to `forms@prdecompressioncenters.com`. Whatever you use, the domain must be verified in Resend. |

Add these in Vercel: **Project → Settings → Environment Variables** for Production, Preview, and Development. Then redeploy.

## One-time Resend setup

1. Create a Resend account at https://resend.com.
2. **Verify the sending domain** at https://resend.com/domains. Add the DNS records Resend gives you (SPF, DKIM, optional DMARC) at your DNS provider. Without verification, all sends bounce.
3. Generate an API key and set `RESEND_API_KEY` in Vercel.

## Rate limiting

The API route limits each IP to 5 submissions per 10 minutes. The limiter is in-memory per serverless instance — fine at this site's scale. If you ever need durable rate limiting (e.g., to defeat retries across instances), swap `lib/questionnaire/rate-limit.ts` for Vercel KV or Upstash Redis.

## Persistence

There's no database wired up. Resend retains a copy of every sent email for 30 days, so submissions are recoverable from the Resend dashboard. If you later want a queryable history, add a `form_submissions` table and insert from the API route after the email send succeeds.

## Verification checklist

- [ ] `RESEND_API_KEY` set in Vercel
- [ ] Sending domain verified in Resend
- [ ] `<Questionnaire />` embedded on at least one page
- [ ] Submit a test entry from `/` and confirm the email arrives at `nomnk5138@gmail.com`
- [ ] Submit with an invalid email — server returns 400, UI shows error
- [ ] Submit 6 times rapidly from the same IP — 6th returns 429
