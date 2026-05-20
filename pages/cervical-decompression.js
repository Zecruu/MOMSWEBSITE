import React from 'react';
import DecompressionSubpage from '../components/DecompressionSubpage';
import { useLanguage } from '../context/LanguageContext';

const CervicalDecompressionPage = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const faqs = isEn
    ? [
        {
          q: 'Is cervical decompression safe? The neck feels fragile.',
          a: 'It is. Cervical decompression uses far less force than lumbar — typically 10 to 20 pounds — and the head is fully cradled. The Accu-SPINA is FDA-cleared and the cervical protocol is one of the most studied applications of the device.',
        },
        {
          q: 'Will I be able to drive home after my session?',
          a: 'Yes. There is no medication, no sedation, and no recovery period. Patients drive themselves to and from every session.',
        },
        {
          q: 'My MRI shows a small herniation but the arm pain is severe. Is decompression worth trying?',
          a: 'Arm pain and finger tingling are classic signs of cervical nerve compression, which is exactly what decompression is designed to address. Even small herniations can produce severe radicular pain — and small herniations often respond very well.',
        },
        {
          q: 'I get headaches too. Can decompression help with those?',
          a: 'If your headaches start at the base of the skull (cervicogenic headaches), they are often driven by upper-cervical nerve irritation. Many cervical decompression patients see significant headache improvement alongside neck and arm relief.',
        },
      ]
    : [
        {
          q: '¿La descompresión cervical es segura? El cuello se siente frágil.',
          a: 'Sí lo es. La descompresión cervical usa mucha menos fuerza que la lumbar — típicamente entre 10 y 20 libras — y la cabeza queda totalmente apoyada. El Accu-SPINA está aprobado por la FDA y el protocolo cervical es una de las aplicaciones más estudiadas del equipo.',
        },
        {
          q: '¿Podré manejar a casa después de la sesión?',
          a: 'Sí. No hay medicamentos, ni sedación, ni período de recuperación. Los pacientes manejan ellos mismos a cada sesión.',
        },
        {
          q: 'Mi MRI muestra una hernia pequeña pero el dolor del brazo es severo. ¿Vale la pena intentar descompresión?',
          a: 'El dolor en el brazo y el hormigueo en los dedos son señales clásicas de compresión nerviosa cervical, que es exactamente lo que la descompresión está diseñada para tratar. Incluso hernias pequeñas pueden producir dolor radicular severo — y las hernias pequeñas suelen responder muy bien.',
        },
        {
          q: 'También tengo dolores de cabeza. ¿La descompresión puede ayudar con eso?',
          a: 'Si tus dolores de cabeza empiezan en la base del cráneo (cefaleas cervicogénicas), generalmente están causados por irritación nerviosa cervical alta. Muchos pacientes de descompresión cervical ven mejoras significativas en sus dolores de cabeza junto con el alivio del cuello y el brazo.',
        },
      ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: isEn ? 'Cervical Decompression in Puerto Rico' : 'Descompresión Cervical en Puerto Rico',
    url: 'https://prdecompressioncenters.com/cervical-decompression',
    inLanguage: isEn ? 'en-US' : 'es-PR',
    about: {
      '@type': 'MedicalTherapy',
      name: 'Cervical Spinal Decompression Therapy (Accu-SPINA IDD)',
    },
  };

  return (
    <DecompressionSubpage
      region="cervical"
      heroImage="/images/decompression-therapy-hero-bg.png"
      anatomyImage="/images/Herniated Disks.PNG"
      accuSpinaImage="/images/accu-spina-spinal-decompression-system-landscape.png"
      seo={{
        title: isEn
          ? 'Cervical Decompression Therapy Puerto Rico | Neck Herniated Disc | PR Decompression Centers'
          : 'Descompresión Cervical Puerto Rico | Hernia Discal Cervical | PR Decompression Centers',
        description: isEn
          ? 'Non-surgical cervical decompression in Levittown & Toa Baja PR. Accu-SPINA IDD Therapy for C5-C6 / C6-C7 herniated discs, pinched nerves, and arm pain. Free consult.'
          : 'Descompresión cervical no quirúrgica en Levittown y Toa Baja PR. Terapia IDD Accu-SPINA para hernias C5-C6 / C6-C7, nervios pinchados y dolor en el brazo. Consulta gratis.',
        canonical: 'https://prdecompressioncenters.com/cervical-decompression',
        schema,
      }}
      faqs={faqs}
    />
  );
};

export default CervicalDecompressionPage;
