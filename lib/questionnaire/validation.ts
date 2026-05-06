import { questions, contactFields } from './config';
import type { Answers } from './types';

export type ValidationResult = { ok: true } | { ok: false; error: string };

export function validateAnswers(answers: Answers): ValidationResult {
  for (const q of questions) {
    if (q.showWhen && !q.showWhen(answers)) continue;
    const a = answers[q.id];
    if (q.required !== false && !a) {
      return { ok: false, error: `Missing answer: ${q.id}` };
    }
    if (a && !q.options.some((o) => o.value === a)) {
      return { ok: false, error: `Invalid option for ${q.id}` };
    }
  }
  for (const f of contactFields) {
    const raw = answers[f.id];
    const a = typeof raw === 'string' ? raw.trim() : '';
    if (f.required !== false && !a) {
      return { ok: false, error: `Missing field: ${f.id}` };
    }
    if (!a) continue;
    if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)) {
      return { ok: false, error: 'Invalid email address' };
    }
    if (f.type === 'phone' && a.replace(/\D/g, '').length < 10) {
      return { ok: false, error: 'Phone number must contain at least 10 digits' };
    }
  }
  return { ok: true };
}
