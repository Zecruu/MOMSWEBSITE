import { questions, contactFields } from './config';
import type { Answers, Locale } from './types';

type Meta = {
  ip: string;
  referrer: string;
  userAgent: string;
  language: Locale;
  timestamp: string;
};

function escapeHtml(s: string): string {
  if (!s) return '';
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return c;
    }
  });
}

function answerLabel(questionId: string, value: string): string {
  const q = questions.find((q) => q.id === questionId);
  if (!q) return value;
  const opt = q.options.find((o) => o.value === value);
  return opt?.label.en ?? value;
}

export function renderEmail(answers: Answers, meta: Meta) {
  const name = answers.name?.trim() || 'Unknown';
  const topQ = questions[0];
  const topA = answerLabel(topQ.id, answers[topQ.id] ?? '');
  const subject = `New lead: ${name} — ${topA}`;

  const rows = questions.map((q) => ({
    question: q.text.en,
    answer: answerLabel(q.id, answers[q.id] ?? ''),
  }));

  const contactRows = contactFields.map((f) => ({
    label: f.label.en,
    value: answers[f.id] ?? '',
  }));

  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#222;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <h2 style="color:#009fff;margin:0 0 16px;font-size:22px;">New lead — PR Decompression Centers</h2>
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px;">
      ${contactRows.map((r) => `<div style="margin:6px 0;"><strong style="color:#444;">${escapeHtml(r.label)}:</strong> ${escapeHtml(r.value)}</div>`).join('')}
    </div>
    <h3 style="color:#222;margin:0 0 12px;font-size:16px;text-transform:uppercase;letter-spacing:0.05em;">Questionnaire</h3>
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      ${rows.map((r, i) => `<tr style="border-bottom:${i === rows.length - 1 ? 'none' : '1px solid #e5e7eb'};">
        <td style="padding:12px 16px;font-weight:600;color:#444;width:50%;vertical-align:top;">${escapeHtml(r.question)}</td>
        <td style="padding:12px 16px;color:#222;vertical-align:top;">${escapeHtml(r.answer)}</td>
      </tr>`).join('')}
    </table>
    <div style="margin-top:24px;padding:16px;background:#fafafa;border:1px solid #e5e7eb;border-radius:8px;font-size:12px;color:#666;line-height:1.6;">
      <div><strong>Submitted:</strong> ${escapeHtml(meta.timestamp)}</div>
      <div><strong>Language:</strong> ${escapeHtml(meta.language)}</div>
      <div><strong>IP:</strong> ${escapeHtml(meta.ip)}</div>
      <div><strong>Referrer:</strong> ${escapeHtml(meta.referrer || '(direct)')}</div>
      <div><strong>User agent:</strong> ${escapeHtml(meta.userAgent)}</div>
    </div>
  </div>
</body></html>`;

  const text = [
    'New lead — PR Decompression Centers',
    '',
    ...contactRows.map((r) => `${r.label}: ${r.value}`),
    '',
    'Questionnaire:',
    ...rows.map((r) => `- ${r.question}\n  ${r.answer}`),
    '',
    '--',
    `Submitted: ${meta.timestamp}`,
    `Language: ${meta.language}`,
    `IP: ${meta.ip}`,
    `Referrer: ${meta.referrer || '(direct)'}`,
    `User agent: ${meta.userAgent}`,
  ].join('\n');

  return { subject, html, text };
}
