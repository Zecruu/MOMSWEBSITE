import type { ChoiceQuestion, ContactField } from './types';

export const questions: ChoiceQuestion[] = [
  {
    id: 'concern',
    type: 'choice',
    text: {
      en: 'What brings you here today?',
      es: '¿Qué te trae aquí hoy?',
    },
    options: [
      { id: 'lower-back', value: 'lower-back', label: { en: 'Lower back pain', es: 'Dolor lumbar' } },
      { id: 'neck', value: 'neck', label: { en: 'Neck pain', es: 'Dolor de cuello' } },
      { id: 'herniated-disc', value: 'herniated-disc', label: { en: 'Herniated disc', es: 'Disco herniado' } },
      { id: 'sciatica', value: 'sciatica', label: { en: 'Sciatica / leg pain', es: 'Ciática / dolor de pierna' } },
      { id: 'numbness', value: 'numbness', label: { en: 'Numbness or tingling', es: 'Entumecimiento u hormigueo' } },
      { id: 'multiple', value: 'multiple', label: { en: 'Multiple issues / not sure', es: 'Múltiples problemas / no estoy seguro' } },
    ],
  },
  {
    id: 'mri',
    type: 'choice',
    text: {
      en: 'Do you have an MRI of your spine?',
      es: '¿Tienes un MRI de tu columna?',
    },
    showWhen: (answers) => answers.concern === 'herniated-disc',
    options: [
      { id: 'recent', value: 'recent', label: { en: 'Yes — within the last year', es: 'Sí — del último año' } },
      { id: 'older', value: 'older', label: { en: 'Yes — but older than a year', es: 'Sí — pero de hace más de un año' } },
      { id: 'no', value: 'no', label: { en: "No, I don't have one", es: 'No, no tengo uno' } },
      { id: 'unsure', value: 'unsure', label: { en: 'Not sure', es: 'No estoy seguro' } },
    ],
  },
  {
    id: 'duration',
    type: 'choice',
    text: {
      en: 'How long have you been experiencing this?',
      es: '¿Cuánto tiempo llevas con esto?',
    },
    options: [
      { id: 'lt-1m', value: 'lt-1m', label: { en: 'Less than a month', es: 'Menos de un mes' } },
      { id: '1-6m', value: '1-6m', label: { en: '1 to 6 months', es: '1 a 6 meses' } },
      { id: '6m-1y', value: '6m-1y', label: { en: '6 months to 1 year', es: '6 meses a 1 año' } },
      { id: 'gt-1y', value: 'gt-1y', label: { en: 'More than a year', es: 'Más de un año' } },
    ],
  },
  {
    id: 'severity',
    type: 'choice',
    text: {
      en: 'How severe is your pain on most days?',
      es: '¿Qué tan intenso es tu dolor en la mayoría de los días?',
    },
    options: [
      { id: 'mild', value: 'mild', label: { en: 'Mild (1–3)', es: 'Leve (1–3)' } },
      { id: 'moderate', value: 'moderate', label: { en: 'Moderate (4–6)', es: 'Moderado (4–6)' } },
      { id: 'severe', value: 'severe', label: { en: 'Severe (7–8)', es: 'Severo (7–8)' } },
      { id: 'debilitating', value: 'debilitating', label: { en: 'Debilitating (9–10)', es: 'Debilitante (9–10)' } },
    ],
  },
  {
    id: 'prior-treatment',
    type: 'choice',
    text: {
      en: 'Have you tried other treatments?',
      es: '¿Has probado otros tratamientos?',
    },
    options: [
      { id: 'pt', value: 'pt', label: { en: 'Yes — physical therapy', es: 'Sí — terapia física' } },
      { id: 'chiro', value: 'chiro', label: { en: 'Yes — chiropractic', es: 'Sí — quiropráctica' } },
      { id: 'meds', value: 'meds', label: { en: 'Yes — pain medication', es: 'Sí — medicamentos para el dolor' } },
      { id: 'surgery', value: 'surgery', label: { en: 'Yes — surgery considered or done', es: 'Sí — cirugía considerada o realizada' } },
      { id: 'none', value: 'none', label: { en: 'No, this would be my first', es: 'No, esta sería la primera vez' } },
    ],
  },
  {
    id: 'timeline',
    type: 'choice',
    text: {
      en: 'When are you looking to start treatment?',
      es: '¿Cuándo quisieras comenzar el tratamiento?',
    },
    options: [
      { id: 'asap', value: 'asap', label: { en: 'As soon as possible', es: 'Lo antes posible' } },
      { id: '2-weeks', value: '2-weeks', label: { en: 'Within 2 weeks', es: 'En 2 semanas' } },
      { id: 'this-month', value: 'this-month', label: { en: 'This month', es: 'Este mes' } },
      { id: 'exploring', value: 'exploring', label: { en: 'Just exploring options', es: 'Solo explorando opciones' } },
    ],
  },
];

export const contactFields: ContactField[] = [
  {
    id: 'name',
    type: 'text',
    label: { en: 'Your full name', es: 'Tu nombre completo' },
    placeholder: { en: 'Maria Rodriguez', es: 'María Rodríguez' },
    required: true,
  },
  {
    id: 'email',
    type: 'email',
    label: { en: 'Your email', es: 'Tu correo electrónico' },
    placeholder: { en: 'you@example.com', es: 'tu@ejemplo.com' },
    required: true,
  },
  {
    id: 'phone',
    type: 'phone',
    label: { en: 'Your phone number', es: 'Tu número de teléfono' },
    placeholder: { en: '787-555-1234', es: '787-555-1234' },
    required: true,
  },
];
