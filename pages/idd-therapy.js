import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaBookOpen,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
} from 'react-icons/fa';

const copy = {
  en: {
    title: 'IDD Therapy® on the Accu-SPINA® | Spinal Decompression Puerto Rico',
    description:
      'PR Decompression Centers in Levittown and Toa Baja is an IDD Therapy® provider. We deliver Intervertebral Differential Dynamics on the Accu-SPINA® system — a documented, computer-controlled protocol, not generic spinal decompression or traction.',
    keywords:
      'IDD Therapy, IDD Therapy Puerto Rico, IDD Therapy near me, Accu-SPINA, Accu-SPINA Puerto Rico, Accu-SPINA Levittown, Intervertebral Differential Dynamics, IDD Therapy vs spinal decompression, Accu-SPINA IDD Therapy, non-surgical disc treatment Puerto Rico',
    eyebrow: 'IDD Therapy® provider · Accu-SPINA® system',
    hero: 'IDD Therapy® is not generic spinal decompression.',
    heroSub:
      'We treat herniated discs, sciatica, and neck or back pain with Intervertebral Differential Dynamics — a documented protocol delivered only on the Accu-SPINA® system at PR Decompression Centers in Levittown and Toa Baja, Puerto Rico.',
    whatEyebrow: 'What we offer',
    whatTitle: 'What is IDD Therapy®?',
    whatP1:
      'IDD Therapy® stands for Intervertebral Differential Dynamics. It is a precise, computer-controlled form of spinal disc treatment used to open the space around a targeted vertebra, lower pressure inside a compressed disc, and give irritated nerves room to settle.',
    whatP2:
      'Compressed discs — also described as bulging, slipped, ruptured, prolapsed, or herniated — can cause pain in the neck and back and referred symptoms in the arms, legs, and feet. IDD Therapy is designed to treat that disc-level problem rather than only stretching the whole spine.',
    whatP3:
      'IDD Therapy is only administered on the Accu-SPINA® System, an FDA-cleared Class II medical device manufactured by North American Medical Corporation. PR Decompression Centers is a provider of this treatment in Puerto Rico.',
    differEyebrow: 'Why the name matters',
    differTitle: 'How IDD Therapy differs from ordinary traction or generic decompression',
    differLead:
      'Many clinics advertise “spinal decompression.” That phrase can mean a simple traction table, a generic motorized stretch, or a specific documented protocol. IDD Therapy is the last of those.',
    differCards: [
      {
        title: 'Single-segment targeting',
        text: 'The clinician selects a specific level — for example L4-L5, L5-S1, C5-C6, or C6-C7 — instead of pulling the entire spine at once.',
      },
      {
        title: 'Computer-directed force',
        text: 'Force, angle, waveform, and hold/relax cycles are calculated for the patient and the injured disc. The session can be repeated or adjusted as the case changes.',
      },
      {
        title: 'Oscillating Logarithmic Curve™',
        text: 'Accu-SPINA adds a patented secondary oscillation at peak distraction. That gentle pumping motion is meant to help muscles release instead of guarding against a linear pull.',
      },
      {
        title: 'Not the same as traction',
        text: 'Linear traction often triggers a muscle pull-back response. IDD Therapy uses non-linear, sinusoidal force patterns so the disc can unload rather than fight the stretch.',
      },
    ],
    machineEyebrow: 'The machine',
    machineTitle: 'The Accu-SPINA® System',
    machineP1:
      'The Accu-SPINA is the only therapeutic device certified to deliver IDD Therapy disc treatment. It is a software-driven platform with closed-loop treatment feedback. The clinician can choose sinusoidal, triangular, or square primary waveforms and add the patented secondary oscillation waveform.',
    machineP2:
      'Treatment aims are practical: decompress a targeted disc, support fluid, oxygen, and nutrient exchange, and re-educate the surrounding spinal muscles and joints. Patients remain clothed. Many describe a gentle stretch and some fall asleep on the table.',
    machineFacts: [
      'FDA-cleared Class II device for lumbar and cervical use',
      'Only system approved to deliver IDD Therapy®',
      'Computer-controlled targeting of a single spinal segment',
      'Patented sinusoidal oscillation / Oscillating Logarithmic Curve™',
      'Used for herniated discs, degenerative disc disease, sciatica, and facet-related pain',
    ],
    conditionsTitle: 'Conditions we evaluate for IDD Therapy',
    conditions: [
      'Lumbar herniated or bulging discs (especially L4-L5 and L5-S1)',
      'Cervical herniated or bulging discs (especially C5-C6 and C6-C7)',
      'Sciatica and leg pain from lumbar nerve compression',
      'Arm pain, tingling, or weakness from a cervical pinched nerve',
      'Degenerative disc disease',
      'Posterior facet syndrome',
      'Chronic neck or lower-back pain after conservative care has stalled',
    ],
    selectEyebrow: 'Patient selection',
    selectTitle: 'Who may be a candidate — and who is not',
    selectP:
      'IDD Therapy is not for every spine. A consultation, exam, and usually imaging come first. Typical candidates have disc-related neck or back pain, radicular symptoms, or an MRI showing a herniated or bulging disc and want a non-surgical option before injections or surgery.',
    notTitle: 'IDD Therapy is generally not appropriate when there is:',
    contraindications: [
      'Abdominal aortic aneurysm',
      'Active infection, inflammatory, or neoplastic spinal disease',
      'Open growth plates',
      'Osteoporosis (typically T-score of −2.5 or lower)',
      'Pacemaker',
      'Pregnancy',
      'Unstable post-surgical spine, spinal hardware, or vertebral fusion',
      'Severe canal stenosis, rotatory or severe scoliosis',
      'Spondylolisthesis grade 2 or higher, spondylolysis, or unresolved compression fracture',
    ],
    selectNote:
      'Final clearance is always clinical. Some annular tears and other findings are decided case by case. If IDD Therapy is not a fit, we say so and discuss other options.',
    protocolEyebrow: 'The protocol',
    protocolTitle: 'What a documented IDD Therapy course looks like',
    protocolP:
      'This is a course of care, not a single stretch. Many patients complete about 20 to 30 sessions over 6 to 12 weeks. A typical visit lasts 30 to 60 minutes, with roughly 25 minutes of Accu-SPINA treatment time. We often combine IDD Therapy with chiropractic care and laser therapy when the exam supports it.',
    steps: [
      'Consultation, history, and review of MRI or X-rays',
      'Segment selection and a computer-directed treatment plan',
      'Repeated Accu-SPINA sessions with force and oscillation adjusted over time',
      'Progress checks; most lumbar patients who respond notice change around sessions 6–10',
      'Home movement guidance and a plan for what happens after the protocol',
    ],
    litEyebrow: 'Clinical literature',
    litTitle: 'What published research actually says',
    litLead:
      'IDD Therapy has one of the more documented footprints in the spinal-decompression field. The literature is not one-sided. We summarize it so patients and referring clinicians can judge the evidence, not a slogan.',
    studies: [
      {
        title: 'Videofluoroscopy during an Accu-SPINA session',
        text: 'Imaging during IDD Therapy with oscillation showed L5-S1 separation of about 1 mm and a more uniform anterior–posterior opening when the secondary waveform was added. That supports the claim that oscillation can change how the segment separates compared with a simple pull.',
      },
      {
        title: '2010 randomized trial (Schimmel et al.)',
        text: 'Sixty patients with chronic low-back pain received graded activity plus either IDD Therapy on Accu-SPINA or sham traction at a non-therapeutic weight. Both groups improved on pain and disability. The study did not find a significant extra benefit for IDD over sham in that mixed chronic-pain population. It is an important caution against treating every back-pain patient as an automatic IDD candidate.',
      },
      {
        title: '2025 retrospective Accu-SPINA cohort',
        text: 'Twenty-one patients with MRI-confirmed cervical or lumbar disc bulges or herniations completed 30 IDD sessions. Mean VAS pain fell from 5.8 to 1.5 and Oswestry Disability Index from 18.5 to 6.5, with no reported adverse events. This is encouraging short-term clinic data, not a randomized trial.',
      },
      {
        title: 'Manufacturer-cited outcome ranges',
        text: 'North American Medical cites independent and in-clinic series in the 86–92% range for pain and disability improvement in selected disc patients. Those figures come from specific protocols and selected cases. They are not a guarantee for every person who walks in.',
      },
    ],
    litNote:
      'Insurance plans often still label nonsurgical spinal decompression as investigational. In our clinic, IDD Therapy is typically an out-of-pocket service. Individual results vary.',
    faqTitle: 'IDD Therapy and Accu-SPINA FAQs',
    faqs: [
      {
        q: 'Do you offer IDD Therapy or only “spinal decompression”?',
        a: 'We are an IDD Therapy® provider. Treatment is delivered on the Accu-SPINA® system using Intervertebral Differential Dynamics protocols — not a generic traction table.',
      },
      {
        q: 'Where can I get IDD Therapy near me in Puerto Rico?',
        a: 'PR Decompression Centers provides IDD Therapy on Accu-SPINA in Toa Baja, serving Levittown, Bayamón, Cataño, Dorado, Guaynabo, and the San Juan metro. Call 787-261-8258 or message us on WhatsApp.',
      },
      {
        q: 'Is Accu-SPINA the same as other decompression machines?',
        a: 'No. Several devices market spinal decompression. Accu-SPINA is the only system certified to deliver IDD Therapy, including the patented oscillation algorithm used to target a single disc level.',
      },
      {
        q: 'Does IDD Therapy treat depression?',
        a: 'No. IDD Therapy is a spinal disc treatment. It is used for decompression of herniated or degenerative discs — not for mental-health depression. If disc pain has affected mood or sleep, we still evaluate the spine first and refer when mental-health care is needed.',
      },
      {
        q: 'Is it painful?',
        a: 'Most patients feel a gentle stretch. Some feel sore after early sessions, similar to starting a new exercise program. That usually eases as the tissues adapt.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'The clinician sets the plan. Many disc cases are programmed for about 20 to 30 visits. Short courses are sometimes used; lasting structural change is more likely with a completed protocol.',
      },
    ],
    areaTitle: 'Lumbar or cervical IDD Therapy',
    lumbar: 'Lumbar IDD Therapy',
    lumbarDesc: 'Lower-back herniations, sciatica, and L4-L5 / L5-S1 disc pressure.',
    cervical: 'Cervical IDD Therapy',
    cervicalDesc: 'Neck herniations, pinched nerves, and arm or hand symptoms.',
    ctaTitle: 'Looking for IDD Therapy or Accu-SPINA treatment in Puerto Rico?',
    ctaSub:
      'Tell us your symptoms and whether you have an MRI. We will explain if IDD Therapy on Accu-SPINA is appropriate — or if another plan is safer.',
    book: 'Book a consultation',
    learnMore: 'Learn more',
  },
  es: {
    title: 'Terapia IDD® en Accu-SPINA® | Descompresión Espinal Puerto Rico',
    description:
      'PR Decompression Centers en Levittown y Toa Baja es proveedor de Terapia IDD®. Aplicamos Intervertebral Differential Dynamics en el sistema Accu-SPINA® — un protocolo documentado y controlado por computadora, no descompresión genérica ni tracción.',
    keywords:
      'Terapia IDD, IDD Therapy Puerto Rico, Accu-SPINA Puerto Rico, Accu-SPINA Levittown, Intervertebral Differential Dynamics, IDD vs descompresión espinal, tratamiento discal no quirúrgico Puerto Rico',
    eyebrow: 'Proveedor de Terapia IDD® · sistema Accu-SPINA®',
    hero: 'La Terapia IDD® no es descompresión espinal genérica.',
    heroSub:
      'Tratamos hernias discales, ciática y dolor de cuello o espalda con Intervertebral Differential Dynamics — un protocolo documentado que solo se aplica en el sistema Accu-SPINA® en PR Decompression Centers, Levittown y Toa Baja, Puerto Rico.',
    whatEyebrow: 'Lo que ofrecemos',
    whatTitle: '¿Qué es la Terapia IDD®?',
    whatP1:
      'IDD Therapy® significa Intervertebral Differential Dynamics. Es un tratamiento discal preciso, controlado por computadora, que abre el espacio alrededor de una vértebra específica, baja la presión dentro de un disco comprimido y da espacio a los nervios irritados.',
    whatP2:
      'Los discos comprimidos — también llamados protruidos, deslizados, rotos o herniados — pueden causar dolor en cuello y espalda y síntomas en brazos, piernas y pies. La Terapia IDD busca tratar ese problema a nivel del disco, no solo estirar toda la columna.',
    whatP3:
      'La Terapia IDD solo se administra en el sistema Accu-SPINA®, un dispositivo médico Clase II autorizado por la FDA y fabricado por North American Medical Corporation. PR Decompression Centers es proveedor de este tratamiento en Puerto Rico.',
    differEyebrow: 'Por qué importa el nombre',
    differTitle: 'En qué se diferencia la Terapia IDD de la tracción o la descompresión genérica',
    differLead:
      'Muchas clínicas anuncian “descompresión espinal”. Esa frase puede significar una mesa de tracción, un estiramiento motorizado genérico o un protocolo documentado. La Terapia IDD es lo último.',
    differCards: [
      {
        title: 'Objetivo de un solo segmento',
        text: 'El clínico elige un nivel específico — por ejemplo L4-L5, L5-S1, C5-C6 o C6-C7 — en vez de traccionar toda la columna a la vez.',
      },
      {
        title: 'Fuerza dirigida por computadora',
        text: 'La fuerza, el ángulo, la forma de onda y los ciclos de tensión/relajación se calculan para el paciente y el disco lesionado. La sesión se puede repetir o ajustar.',
      },
      {
        title: 'Curva Logarítmica Oscilante™',
        text: 'Accu-SPINA añade una oscilación secundaria patentada en el pico de distracción. Ese bombeo suave busca que los músculos suelten en vez de resistirse a un jalón lineal.',
      },
      {
        title: 'No es lo mismo que tracción',
        text: 'La tracción lineal a menudo provoca que el músculo tire en contra. La Terapia IDD usa patrones de fuerza no lineales y sinusoidales para descargar el disco.',
      },
    ],
    machineEyebrow: 'El equipo',
    machineTitle: 'El sistema Accu-SPINA®',
    machineP1:
      'Accu-SPINA es el único dispositivo terapéutico certificado para aplicar el tratamiento discal IDD. Es una plataforma de software con retroalimentación de tratamiento en circuito cerrado. El clínico puede elegir ondas sinusoidales, triangulares o cuadradas y añadir la oscilación secundaria patentada.',
    machineP2:
      'Los objetivos son prácticos: descomprimir un disco específico, apoyar el intercambio de líquido, oxígeno y nutrientes, y reeducar músculos y articulaciones. El paciente permanece vestido. Muchos sienten un estiramiento suave y algunos se duermen en la mesa.',
    machineFacts: [
      'Dispositivo Clase II autorizado por la FDA para uso lumbar y cervical',
      'Único sistema aprobado para administrar Terapia IDD®',
      'Objetivo computarizado de un solo segmento vertebral',
      'Oscilación sinusoidal patentada / Curva Logarítmica Oscilante™',
      'Usado en hernias, enfermedad degenerativa del disco, ciática y dolor facetario',
    ],
    conditionsTitle: 'Condiciones que evaluamos para Terapia IDD',
    conditions: [
      'Hernias o protrusiones lumbares (sobre todo L4-L5 y L5-S1)',
      'Hernias o protrusiones cervicales (sobre todo C5-C6 y C6-C7)',
      'Ciática y dolor en la pierna por compresión lumbar',
      'Dolor, hormigueo o debilidad en el brazo por nervio cervical pinchado',
      'Enfermedad degenerativa del disco',
      'Síndrome facetario posterior',
      'Dolor crónico de cuello o espalda baja cuando el cuidado conservador se estancó',
    ],
    selectEyebrow: 'Selección de pacientes',
    selectTitle: 'Quién puede ser candidato — y quién no',
    selectP:
      'La Terapia IDD no es para toda columna. Primero hay consulta, examen y, por lo general, imágenes. Los candidatos típicos tienen dolor discal, síntomas radiculares o una MRI con hernia o protrusión y quieren una opción no quirúrgica antes de inyecciones o cirugía.',
    notTitle: 'Por lo general no es apropiada cuando hay:',
    contraindications: [
      'Aneurisma aórtico abdominal',
      'Infección activa, enfermedad inflamatoria o neoplásica de la columna',
      'Placas de crecimiento abiertas',
      'Osteoporosis (típicamente T-score de −2.5 o menor)',
      'Marcapasos',
      'Embarazo',
      'Columna postquirúrgica inestable, hardware o fusión vertebral',
      'Estenosis de canal severa, escoliosis rotatoria o severa',
      'Espondilolistesis grado 2 o mayor, espondilólisis o fractura por compresión no resuelta',
    ],
    selectNote:
      'La autorización final siempre es clínica. Algunas roturas anulares y otros hallazgos se deciden caso por caso. Si la Terapia IDD no aplica, lo decimos y hablamos de otras opciones.',
    protocolEyebrow: 'El protocolo',
    protocolTitle: 'Cómo se ve un curso documentado de Terapia IDD',
    protocolP:
      'Es un curso de cuidado, no un solo estiramiento. Muchos pacientes completan unas 20 a 30 sesiones en 6 a 12 semanas. Una visita típica dura 30 a 60 minutos, con unos 25 minutos en Accu-SPINA. A menudo combinamos IDD con quiropráctica y láser cuando el examen lo apoya.',
    steps: [
      'Consulta, historial y revisión de MRI o radiografías',
      'Selección del segmento y plan dirigido por computadora',
      'Sesiones repetidas en Accu-SPINA con fuerza y oscilación ajustadas',
      'Revisiones de progreso; muchos pacientes lumbares que responden notan cambio entre las sesiones 6 y 10',
      'Guía de movimiento en casa y plan para después del protocolo',
    ],
    litEyebrow: 'Literatura clínica',
    litTitle: 'Lo que realmente dice la investigación publicada',
    litLead:
      'La Terapia IDD tiene una de las huellas más documentadas en descompresión espinal. La literatura no es unilateral. La resumimos para que pacientes y colegas puedan juzgar la evidencia, no un eslogan.',
    studies: [
      {
        title: 'Videofluoroscopia durante una sesión Accu-SPINA',
        text: 'Las imágenes durante Terapia IDD con oscilación mostraron separación L5-S1 de unos 1 mm y una apertura anteroposterior más uniforme al añadir la onda secundaria. Eso apoya que la oscilación cambia cómo se separa el segmento frente a un jalón simple.',
      },
      {
        title: 'Ensayo aleatorizado de 2010 (Schimmel et al.)',
        text: 'Sesenta pacientes con dolor lumbar crónico recibieron actividad graduada más Terapia IDD en Accu-SPINA o tracción simulada a peso no terapéutico. Ambos grupos mejoraron en dolor y discapacidad. El estudio no halló un beneficio extra significativo de IDD frente al sham en esa población mixta. Es una advertencia importante: no todo dolor de espalda es candidato automático.',
      },
      {
        title: 'Cohorte retrospectiva Accu-SPINA 2025',
        text: 'Veintiún pacientes con protrusión o hernia cervical o lumbar confirmada por MRI completaron 30 sesiones IDD. El VAS medio bajó de 5.8 a 1.5 y el Oswestry de 18.5 a 6.5, sin eventos adversos reportados. Son datos clínicos a corto plazo, no un ensayo aleatorizado.',
      },
      {
        title: 'Rangos de resultados citados por el fabricante',
        text: 'North American Medical cita series independientes y clínicas en el rango 86–92% de mejoría de dolor y discapacidad en pacientes discales seleccionados. Esas cifras vienen de protocolos y casos específicos. No son una garantía para cada persona.',
      },
    ],
    litNote:
      'Muchos planes de seguro siguen etiquetando la descompresión no quirúrgica como investigacional. En nuestra clínica, la Terapia IDD suele ser un servicio de pago directo. Los resultados individuales varían.',
    faqTitle: 'Preguntas frecuentes sobre Terapia IDD y Accu-SPINA',
    faqs: [
      {
        q: '¿Ofrecen Terapia IDD o solo “descompresión espinal”?',
        a: 'Somos proveedores de Terapia IDD®. El tratamiento se aplica en el sistema Accu-SPINA® con protocolos de Intervertebral Differential Dynamics — no una mesa de tracción genérica.',
      },
      {
        q: '¿Dónde puedo recibir Terapia IDD cerca de mí en Puerto Rico?',
        a: 'PR Decompression Centers ofrece Terapia IDD en Accu-SPINA en Toa Baja, sirviendo Levittown, Bayamón, Cataño, Dorado, Guaynabo y el área metro de San Juan. Llama al 787-261-8258 o escríbenos por WhatsApp.',
      },
      {
        q: '¿Accu-SPINA es igual a otras máquinas de descompresión?',
        a: 'No. Varios equipos mercadean descompresión espinal. Accu-SPINA es el único sistema certificado para administrar Terapia IDD, incluyendo el algoritmo de oscilación patentado para un nivel discal específico.',
      },
      {
        q: '¿La Terapia IDD trata la depresión?',
        a: 'No. La Terapia IDD es un tratamiento discal. Se usa para descompresión de hernias o discos degenerativos — no para depresión de salud mental. Si el dolor discal ha afectado el ánimo o el sueño, igual evaluamos la columna primero y referimos cuando haga falta cuidado de salud mental.',
      },
      {
        q: '¿Duele?',
        a: 'La mayoría siente un estiramiento suave. Algunos quedan adoloridos después de las primeras sesiones, como al empezar un ejercicio nuevo. Eso suele ceder cuando los tejidos se adaptan.',
      },
      {
        q: '¿Cuántas sesiones necesito?',
        a: 'El clínico define el plan. Muchos casos discales se programan para unas 20 a 30 visitas. A veces se usan cursos cortos; el cambio estructural duradero es más probable con el protocolo completo.',
      },
    ],
    areaTitle: 'Terapia IDD lumbar o cervical',
    lumbar: 'Terapia IDD lumbar',
    lumbarDesc: 'Hernias de espalda baja, ciática y presión L4-L5 / L5-S1.',
    cervical: 'Terapia IDD cervical',
    cervicalDesc: 'Hernias de cuello, nervios pinchados y síntomas en brazo o mano.',
    ctaTitle: '¿Buscas Terapia IDD o tratamiento Accu-SPINA en Puerto Rico?',
    ctaSub:
      'Cuéntanos tus síntomas y si tienes MRI. Te explicamos si la Terapia IDD en Accu-SPINA aplica — o si otro plan es más seguro.',
    book: 'Agendar consulta',
    learnMore: 'Más información',
  },
};

const IddTherapyPage = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const c = isEn ? copy.en : copy.es;
  const [openFaq, setOpenFaq] = useState(null);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: c.title,
      description: c.description,
      url: 'https://prdecompressioncenters.com/idd-therapy',
      inLanguage: isEn ? 'en-US' : 'es-PR',
      about: {
        '@type': 'MedicalTherapy',
        name: 'IDD Therapy (Intervertebral Differential Dynamics)',
        alternateName: ['IDD Therapy®', 'Accu-SPINA® IDD Therapy', 'Intervertebral Differential Dynamics'],
        recognizingAuthority: {
          '@type': 'Organization',
          name: 'North American Medical Corporation',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'IDD Therapy® on Accu-SPINA®',
      alternateName: 'Intervertebral Differential Dynamics',
      procedureType: 'Noninvasive',
      bodyLocation: ['Lumbar spine', 'Cervical spine'],
      howPerformed:
        'Computer-controlled, segment-specific spinal disc treatment on the Accu-SPINA system using IDD Therapy protocols, including oscillating logarithmic force patterns.',
      preparation: 'Clinical exam and usually MRI or X-ray review before a customized session plan.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <Page>
      <SEOHead
        title={c.title}
        description={c.description}
        keywords={c.keywords}
        canonicalUrl="https://prdecompressioncenters.com/idd-therapy"
        ogImage="https://prdecompressioncenters.com/images/accu-spina-spinal-decompression-system-landscape.png"
        schema={schema}
      />

      <Hero>
        <HeroOverlay />
        <HeroInner>
          <HeroEyebrow>{c.eyebrow}</HeroEyebrow>
          <HeroTitle>{c.hero}</HeroTitle>
          <HeroSub>{c.heroSub}</HeroSub>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              📱 {c.book}
            </PrimaryCTA>
            <GhostCTA href="#how-idd-differs">
              {c.differTitle} <FaArrowRight />
            </GhostCTA>
          </HeroActions>
        </HeroInner>
      </Hero>

      <Section>
        <Container>
          <TwoCol>
            <div>
              <SectionEyebrow>
                <FaStethoscope /> {c.whatEyebrow}
              </SectionEyebrow>
              <SectionTitle>{c.whatTitle}</SectionTitle>
              <Paragraph>{c.whatP1}</Paragraph>
              <Paragraph>{c.whatP2}</Paragraph>
              <Paragraph>{c.whatP3}</Paragraph>
            </div>
            <SplitImage>
              <img
                src="/images/accu-spina-spinal-decompression-system-landscape.png"
                alt="Accu-SPINA IDD Therapy system at PR Decompression Centers"
              />
            </SplitImage>
          </TwoCol>
        </Container>
      </Section>

      <Section id="how-idd-differs" $alt>
        <Container>
          <SectionEyebrow>
            <FaBolt /> {c.differEyebrow}
          </SectionEyebrow>
          <SectionTitle>{c.differTitle}</SectionTitle>
          <Paragraph style={{ maxWidth: 820 }}>{c.differLead}</Paragraph>
          <CardGrid>
            {c.differCards.map((card) => (
              <InfoCard key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <TwoCol>
            <SplitImage>
              <img
                src="/images/accu-spina-spinal-decompression-system-desktop.png"
                alt="Accu-SPINA spinal decompression system"
                loading="lazy"
              />
            </SplitImage>
            <div>
              <SectionEyebrow>
                <FaBolt /> {c.machineEyebrow}
              </SectionEyebrow>
              <SectionTitle>{c.machineTitle}</SectionTitle>
              <Paragraph>{c.machineP1}</Paragraph>
              <Paragraph>{c.machineP2}</Paragraph>
              <FactList>
                {c.machineFacts.map((fact) => (
                  <li key={fact}>
                    <FaCheckCircle />
                    <span>{fact}</span>
                  </li>
                ))}
              </FactList>
            </div>
          </TwoCol>
        </Container>
      </Section>

      <Section $alt>
        <Container>
          <SectionEyebrow>
            <FaStethoscope /> {c.conditionsTitle}
          </SectionEyebrow>
          <SectionTitle>{c.conditionsTitle}</SectionTitle>
          <ConditionGrid>
            {c.conditions.map((item) => (
              <ConditionCard key={item}>
                <FaCheckCircle />
                <span>{item}</span>
              </ConditionCard>
            ))}
          </ConditionGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionEyebrow>
            <FaUserMd /> {c.selectEyebrow}
          </SectionEyebrow>
          <SectionTitle>{c.selectTitle}</SectionTitle>
          <Paragraph style={{ maxWidth: 820 }}>{c.selectP}</Paragraph>
          <Paragraph>
            <strong>{c.notTitle}</strong>
          </Paragraph>
          <ConditionGrid>
            {c.contraindications.map((item) => (
              <ConditionCard key={item}>
                <FaShieldAlt />
                <span>{item}</span>
              </ConditionCard>
            ))}
          </ConditionGrid>
          <Note>{c.selectNote}</Note>
        </Container>
      </Section>

      <Section $alt>
        <Container>
          <SectionEyebrow>
            <FaShieldAlt /> {c.protocolEyebrow}
          </SectionEyebrow>
          <SectionTitle>{c.protocolTitle}</SectionTitle>
          <Paragraph style={{ maxWidth: 820 }}>{c.protocolP}</Paragraph>
          <StepList>
            {c.steps.map((step, i) => (
              <Step key={step}>
                <StepNum>{i + 1}</StepNum>
                <span>{step}</span>
              </Step>
            ))}
          </StepList>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionEyebrow>
            <FaBookOpen /> {c.litEyebrow}
          </SectionEyebrow>
          <SectionTitle>{c.litTitle}</SectionTitle>
          <Paragraph style={{ maxWidth: 820 }}>{c.litLead}</Paragraph>
          <StudyGrid>
            {c.studies.map((study) => (
              <StudyCard key={study.title}>
                <h3>{study.title}</h3>
                <p>{study.text}</p>
              </StudyCard>
            ))}
          </StudyGrid>
          <Note>{c.litNote}</Note>
        </Container>
      </Section>

      <Section $alt>
        <Container>
          <Centered>
            <SectionEyebrow>{c.areaTitle}</SectionEyebrow>
            <SectionTitle style={{ textAlign: 'center', margin: '0 auto 14px' }}>{c.areaTitle}</SectionTitle>
          </Centered>
          <AreaGrid>
            <AreaCard href="/lumbar-decompression">
              <AreaTitle>{c.lumbar}</AreaTitle>
              <AreaDesc>{c.lumbarDesc}</AreaDesc>
              <AreaCTA>
                {c.learnMore} <FaArrowRight />
              </AreaCTA>
            </AreaCard>
            <AreaCard href="/cervical-decompression">
              <AreaTitle>{c.cervical}</AreaTitle>
              <AreaDesc>{c.cervicalDesc}</AreaDesc>
              <AreaCTA>
                {c.learnMore} <FaArrowRight />
              </AreaCTA>
            </AreaCard>
          </AreaGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionEyebrow>{c.faqTitle}</SectionEyebrow>
          <SectionTitle>{c.faqTitle}</SectionTitle>
          <FAQList>
            {c.faqs.map((f, i) => (
              <FAQItem key={f.q}>
                <FAQButton onClick={() => setOpenFaq(openFaq === i ? null : i)} $open={openFaq === i}>
                  <span>{f.q}</span>
                  {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </FAQButton>
                <FAQAnswer $open={openFaq === i}>{f.a}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>{c.ctaTitle}</CTATitle>
          <CTASub>{c.ctaSub}</CTASub>
          <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
            📱 {c.book}
          </PrimaryCTA>
        </Container>
      </CTASection>
    </Page>
  );
};

export default IddTherapyPage;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  width: 100%;
  background: #0b1220;
  color: #ffffff;
`;

const Hero = styled.section`
  position: relative;
  min-height: 64vh;
  background:
    radial-gradient(ellipse at 75% 50%, rgba(0, 159, 255, 0.18) 0%, transparent 60%),
    url('/images/accu-spina-spinal-decompression-system-landscape.png') center right/cover no-repeat,
    #0b1220;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(11, 18, 32, 0.98) 0%,
    rgba(11, 18, 32, 0.92) 35%,
    rgba(11, 18, 32, 0.65) 65%,
    rgba(11, 18, 32, 0.45) 100%
  );
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  width: 100%;
  animation: ${fadeUp} 0.7s ease both;
`;

const HeroEyebrow = styled.div`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00f2fe;
  padding: 6px 14px;
  border: 1px solid rgba(0, 242, 254, 0.4);
  border-radius: 999px;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 800;
  line-height: 1.08;
  margin: 0 0 20px;
  max-width: 720px;
  color: #ffffff;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const HeroSub = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 640px;
  margin: 0 0 32px;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #0b1220;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(0, 242, 254, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(0, 242, 254, 0.45);
  }
`;

const GhostCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${(p) => (p.$alt ? '#0f172a' : '#0b1220')};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTASection = styled.section`
  padding: 90px 0;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #009fff 100%);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00f2fe;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 28px;
  max-width: 860px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 18px;

  strong {
    color: #ffffff;
  }
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const SplitImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 12px;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #00f2fe;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const FactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: grid;
  gap: 12px;

  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.5;
  }

  svg {
    color: #00f2fe;
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const ConditionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
`;

const ConditionCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  svg {
    color: #00f2fe;
    margin-top: 2px;
    flex-shrink: 0;
  }

  span {
    font-size: 15px;
    line-height: 1.5;
  }
`;

const Note = styled.p`
  margin: 24px 0 0;
  max-width: 860px;
  padding: 16px 18px;
  border-left: 3px solid #00f2fe;
  background: rgba(0, 242, 254, 0.08);
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: grid;
  gap: 14px;
`;

const Step = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 18px 22px;
  border-radius: 14px;
  font-size: 16px;
  line-height: 1.55;
`;

const StepNum = styled.span`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  color: #0b1220;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

const StudyCard = styled.article`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;

  h3 {
    margin: 0 0 12px;
    font-size: 17px;
    color: #00f2fe;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const Centered = styled.div`
  text-align: center;
  margin-bottom: 36px;

  ${SectionEyebrow} {
    justify-content: center;
  }
`;

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

const AreaCard = styled(Link)`
  display: block;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: rgba(0, 242, 254, 0.5);
    transform: translateY(-4px);
  }
`;

const AreaTitle = styled.h3`
  font-size: 22px;
  margin: 0 0 10px;
`;

const AreaDesc = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 18px;
`;

const AreaCTA = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00f2fe;
  font-weight: 600;
`;

const FAQList = styled.div`
  display: grid;
  gap: 12px;
  max-width: 880px;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
`;

const FAQButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: #ffffff;
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  svg {
    color: #00f2fe;
    flex-shrink: 0;
  }
`;

const FAQAnswer = styled.div`
  max-height: ${(p) => (p.$open ? '500px' : '0')};
  padding: ${(p) => (p.$open ? '0 24px 22px' : '0 24px')};
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

const CTATitle = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: #0b1220;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const CTASub = styled.p`
  font-size: 18px;
  color: rgba(11, 18, 32, 0.85);
  max-width: 680px;
  margin: 0 auto 28px;
  line-height: 1.6;
`;
