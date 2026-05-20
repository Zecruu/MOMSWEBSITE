import React from 'react';
import DecompressionSubpage from '../components/DecompressionSubpage';
import { useLanguage } from '../context/LanguageContext';

const LumbarDecompressionPage = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const faqs = isEn
    ? [
        {
          q: 'How is lumbar decompression different from regular traction?',
          a: 'Old-school traction just pulls. The Accu-SPINA targets a specific lumbar disc (like L5-S1) at a precise angle, and adds an oscillating pumping motion that lets your back muscles relax instead of fighting the pull. That is why intradiscal pressure actually drops and the disc rehydrates.',
        },
        {
          q: 'Will I feel pain during the treatment?',
          a: 'No. Most patients describe it as a gentle stretch in the lower back. Many fall asleep on the table.',
        },
        {
          q: 'Can I do this if I already had back surgery?',
          a: 'Often yes. We treat patients with failed back surgery syndrome, but we will review your MRI and surgical history during your initial consultation to make sure you are a safe candidate.',
        },
        {
          q: 'How quickly will I feel relief?',
          a: 'Most lumbar patients feel meaningful relief between sessions 6 and 10. The full protocol of 20–30 sessions is what produces lasting structural change in the disc.',
        },
      ]
    : [
        {
          q: '¿En qué se diferencia la descompresión lumbar de la tracción tradicional?',
          a: 'La tracción tradicional solo estira. El Accu-SPINA dirige la fuerza a un disco lumbar específico (como L5-S1) en un ángulo preciso, e incluye un movimiento de bombeo oscilante que permite que los músculos de la espalda se relajen en vez de resistirse. Por eso la presión intradiscal realmente baja y el disco se rehidrata.',
        },
        {
          q: '¿Sentiré dolor durante el tratamiento?',
          a: 'No. La mayoría de los pacientes lo describe como un estiramiento suave en la espalda baja. Muchos se quedan dormidos en la mesa.',
        },
        {
          q: '¿Puedo hacerlo si ya tuve cirugía de espalda?',
          a: 'Muchas veces sí. Tratamos pacientes con síndrome de cirugía fallida, pero revisaremos tu MRI e historial quirúrgico en tu consulta inicial para asegurarnos de que eres un candidato seguro.',
        },
        {
          q: '¿Qué tan rápido voy a sentir alivio?',
          a: 'La mayoría de los pacientes lumbares siente alivio significativo entre las sesiones 6 y 10. El protocolo completo de 20–30 sesiones es lo que produce el cambio estructural duradero en el disco.',
        },
      ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: isEn ? 'Lumbar Decompression in Puerto Rico' : 'Descompresión Lumbar en Puerto Rico',
    url: 'https://prdecompressioncenters.com/lumbar-decompression',
    inLanguage: isEn ? 'en-US' : 'es-PR',
    about: {
      '@type': 'MedicalTherapy',
      name: 'Lumbar Spinal Decompression Therapy (Accu-SPINA IDD)',
    },
  };

  return (
    <DecompressionSubpage
      region="lumbar"
      heroImage="/images/hero-lumbar-decompression.png"
      anatomyImage="/images/lumbar-anatomy.png"
      accuSpinaImage="/images/accu-spina-studio.png"
      seo={{
        title: isEn
          ? 'Lumbar Decompression Therapy Puerto Rico | Herniated Disc & Sciatica | PR Decompression Centers'
          : 'Descompresión Lumbar Puerto Rico | Hernia Discal y Ciática | PR Decompression Centers',
        description: isEn
          ? 'Non-surgical lumbar decompression in Levittown & Toa Baja PR. Accu-SPINA IDD Therapy for L4-L5 / L5-S1 herniated discs, sciatica, and chronic lower back pain.'
          : 'Descompresión lumbar no quirúrgica en Levittown y Toa Baja PR. Terapia IDD Accu-SPINA para hernias L4-L5 / L5-S1, ciática y dolor lumbar crónico.',
        canonical: 'https://prdecompressioncenters.com/lumbar-decompression',
        schema,
      }}
      faqs={faqs}
    />
  );
};

export default LumbarDecompressionPage;
