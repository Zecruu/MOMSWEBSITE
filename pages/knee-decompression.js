import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardCheck,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
} from "react-icons/fa";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

const copy = {
  en: {
    title: "Knee Decompression in Puerto Rico",
    eyebrow: "Non-surgical knee care",
    subtitle:
      "A gentle, consultation-based option designed to reduce pressure around irritated knee joints and support more comfortable movement.",
    schedule: "Ask about knee decompression",
    checkFit: "Check if it may fit your symptoms",
    learn: "How it works",
    introEyebrow: "For knee pain and mobility limits",
    introTitle: "A calmer way to explore care before committing.",
    intro:
      "Knee decompression is used as part of a conservative care plan for people dealing with knee discomfort, stiffness, arthritis-related irritation, or movement limits. It is not a guarantee or a replacement for a proper exam, but it may help the clinic determine whether non-surgical care is worth considering for your case.",
    mayHelp: "It may be considered for:",
    items: [
      "Knee pain that limits walking, stairs, or daily movement",
      "Arthritis-related pressure or stiffness",
      "Meniscus irritation or joint discomfort after activity",
      "Patients hoping to explore non-surgical options first",
    ],
    processTitle: "What to expect",
    steps: [
      "A consultation to understand your symptoms and medical history",
      "A focused exam to decide whether decompression is appropriate",
      "Gentle, controlled sessions if the clinician recommends treatment",
      "Follow-up guidance for movement, inflammation control, and next steps",
    ],
    videoTitle: "Watch the knee decompression overview",
    brochureTitle: "Knee decompression visual guide",
    brochureText:
      "The brochure image gives patients a quick visual overview of the knee decompression option discussed in clinic.",
    disclaimer:
      "Individual results vary. A clinician should evaluate your knee pain before recommending any treatment plan.",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "Is this a hard commitment?",
        a: "No. The best first step is a consultation so the team can review your symptoms and explain whether knee decompression may be appropriate.",
      },
      {
        q: "Does it replace medical care?",
        a: "No. Knee pain can have many causes. The clinic may recommend imaging, referral, or another care path if your exam suggests it.",
      },
      {
        q: "How do I get started?",
        a: "Use the symptom check, WhatsApp, or phone number to ask whether a knee evaluation is a good next step.",
      },
    ],
    ctaTitle: "Want to know if this fits your knee pain?",
    ctaText:
      "Start with a quick symptom check or contact the clinic. The next step is guidance, not pressure.",
  },
  es: {
    title: "Descompresion de Rodilla en Puerto Rico",
    eyebrow: "Cuidado de rodilla sin cirugia",
    subtitle:
      "Una opcion suave, basada en consulta, disenada para reducir presion alrededor de articulaciones irritadas y apoyar movimiento mas comodo.",
    schedule: "Preguntar por descompresion de rodilla",
    checkFit: "Ver si puede ajustarse a tus sintomas",
    learn: "Como funciona",
    introEyebrow: "Para dolor de rodilla y limites de movilidad",
    introTitle: "Una forma mas tranquila de explorar cuidado antes de comprometerte.",
    intro:
      "La descompresion de rodilla se usa como parte de un plan conservador para personas con dolor, rigidez, irritacion relacionada con artritis o limites de movimiento. No es una garantia ni reemplaza una evaluacion, pero puede ayudar a determinar si el cuidado sin cirugia vale la pena considerar en tu caso.",
    mayHelp: "Puede considerarse para:",
    items: [
      "Dolor de rodilla que limita caminar, subir escaleras o moverte diariamente",
      "Presion o rigidez relacionada con artritis",
      "Irritacion de menisco o molestia articular despues de actividad",
      "Pacientes que desean explorar opciones sin cirugia primero",
    ],
    processTitle: "Que esperar",
    steps: [
      "Una consulta para entender tus sintomas e historial medico",
      "Una evaluacion enfocada para decidir si la descompresion aplica",
      "Sesiones suaves y controladas si el clinico recomienda tratamiento",
      "Guia de seguimiento para movimiento, inflamacion y proximos pasos",
    ],
    videoTitle: "Mira el resumen de descompresion de rodilla",
    brochureTitle: "Guia visual de descompresion de rodilla",
    brochureText:
      "La imagen tipo brochure ofrece un resumen visual rapido de la opcion de descompresion de rodilla que se discute en la clinica.",
    disclaimer:
      "Los resultados individuales varian. Un clinico debe evaluar tu dolor de rodilla antes de recomendar un plan de tratamiento.",
    faqTitle: "Preguntas comunes",
    faqs: [
      {
        q: "Tengo que comprometerme de inmediato?",
        a: "No. El primer paso recomendado es una consulta para revisar tus sintomas y explicar si la descompresion de rodilla puede ser apropiada.",
      },
      {
        q: "Esto reemplaza cuidado medico?",
        a: "No. El dolor de rodilla puede tener muchas causas. La clinica puede recomendar imagenes, referido u otra ruta si la evaluacion lo indica.",
      },
      {
        q: "Como empiezo?",
        a: "Usa la revision de sintomas, WhatsApp o el telefono para preguntar si una evaluacion de rodilla es un buen proximo paso.",
      },
    ],
    ctaTitle: "Quieres saber si esto se ajusta a tu dolor de rodilla?",
    ctaText:
      "Empieza con una revision rapida de sintomas o contacta la clinica. El proximo paso es orientacion, no presion.",
  },
};

const KneeDecompressionPage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const content = copy[isEn ? "en" : "es"];

  const openQuestionnaire = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("open-questionnaire"));
  };

  const pageTitle = isEn
    ? "Knee Decompression Puerto Rico | Non-Surgical Knee Pain Consultation | PR Decompression Centers"
    : "Descompresion de Rodilla Puerto Rico | Consulta para Dolor de Rodilla | PR Decompression Centers";

  const pageDescription = isEn
    ? "Explore knee decompression in Levittown and Toa Baja, Puerto Rico. A non-surgical consultation option for knee pain, stiffness, and mobility concerns. Individual results vary."
    : "Conoce la descompresion de rodilla en Levittown y Toa Baja, Puerto Rico. Una opcion de consulta sin cirugia para dolor, rigidez y movilidad. Los resultados varian.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: content.title,
    url: "https://prdecompressioncenters.com/knee-decompression",
    inLanguage: isEn ? "en-US" : "es-PR",
    about: {
      "@type": "MedicalTherapy",
      name: isEn ? "Knee Decompression Therapy" : "Descompresion de Rodilla",
    },
  };

  return (
    <Page>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="knee decompression Puerto Rico, knee pain Levittown, knee pain Toa Baja, non surgical knee treatment, dolor de rodilla Puerto Rico, descompresion de rodilla"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/knee-decompression"
        schema={schema}
      />

      <Hero>
        <HeroCopy>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <HeroTitle>{content.title}</HeroTitle>
          <HeroText>{content.subtitle}</HeroText>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {content.schedule}
            </PrimaryCTA>
            <SecondaryButton type="button" onClick={openQuestionnaire}>
              <FaClipboardCheck />
              {content.checkFit}
            </SecondaryButton>
          </HeroActions>
        </HeroCopy>
        <HeroMedia aria-label={content.videoTitle}>
          <video controls preload="metadata" poster="/images/knee-decompression-brochure.png">
            <source src="/videos/knee-decompression-spanish-ad.mp4" type="video/mp4" />
          </video>
        </HeroMedia>
      </Hero>

      <IntroSection id="how-it-works">
        <Container>
          <Split>
            <div>
              <Eyebrow>{content.introEyebrow}</Eyebrow>
              <SectionTitle>{content.introTitle}</SectionTitle>
              <Paragraph>{content.intro}</Paragraph>
              <Disclaimer>
                <FaShieldAlt />
                <span>{content.disclaimer}</span>
              </Disclaimer>
            </div>
            <MediaCard>
              <img src="/images/knee-decompression-brochure.png" alt={content.brochureTitle} loading="lazy" />
            </MediaCard>
          </Split>
        </Container>
      </IntroSection>

      <Section $light>
        <Container>
          <SectionGrid>
            <InfoPanel>
              <PanelIcon><FaStethoscope /></PanelIcon>
              <h2>{content.mayHelp}</h2>
              <Checklist>
                {content.items.map((item) => (
                  <li key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </Checklist>
            </InfoPanel>
            <InfoPanel>
              <PanelIcon><FaClipboardCheck /></PanelIcon>
              <h2>{content.processTitle}</h2>
              <StepList>
                {content.steps.map((step, index) => (
                  <li key={step}>
                    <strong>{index + 1}</strong>
                    <span>{step}</span>
                  </li>
                ))}
              </StepList>
            </InfoPanel>
          </SectionGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Eyebrow>{content.videoTitle}</Eyebrow>
            <SectionTitle>{content.brochureTitle}</SectionTitle>
            <Paragraph>{content.brochureText}</Paragraph>
          </SectionHeader>
          <VideoGrid>
            <VideoCard>
              <video controls preload="metadata" poster="/images/knee-decompression-brochure.png">
                <source src="/videos/knee-decompression-spanish-ad.mp4" type="video/mp4" />
              </video>
            </VideoCard>
            <BrochureCard>
              <img src="/images/knee-decompression-brochure.png" alt={content.brochureTitle} loading="lazy" />
            </BrochureCard>
          </VideoGrid>
        </Container>
      </Section>

      <Section $light>
        <Container>
          <SectionHeader>
            <Eyebrow>{content.faqTitle}</Eyebrow>
            <DarkTitle>{content.faqTitle}</DarkTitle>
          </SectionHeader>
          <FAQGrid>
            {content.faqs.map((faq) => (
              <FAQCard key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </FAQCard>
            ))}
          </FAQGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>{content.ctaTitle}</CTATitle>
          <CTAText>{content.ctaText}</CTAText>
          <CTAButtons>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {content.schedule}
            </PrimaryCTA>
            <SecondaryButton type="button" onClick={openQuestionnaire}>
              <FaClipboardCheck />
              {content.checkFit}
            </SecondaryButton>
            <PhoneCTA href="tel:7872618258">
              <FaPhoneAlt />
              787-261-8258
            </PhoneCTA>
          </CTAButtons>
        </Container>
      </CTASection>
    </Page>
  );
};

export default KneeDecompressionPage;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  width: 100%;
  background: #07111f;
  color: #ffffff;
  overflow-x: hidden;
`;

const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 78px 24px 64px;
  min-height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
  gap: 42px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 56px;
  }
`;

const HeroCopy = styled.div`
  animation: ${fadeUp} 0.6s ease both;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  color: #00f2fe;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const HeroTitle = styled.h1`
  max-width: 760px;
  margin: 0 0 22px;
  font-size: clamp(42px, 6vw, 78px);
  line-height: 0.98;
  font-weight: 900;
  letter-spacing: 0;
`;

const HeroText = styled.p`
  max-width: 640px;
  margin: 0 0 30px;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.62;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const HeroMedia = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #000;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);

  video {
    width: 100%;
    aspect-ratio: 9 / 16;
    max-height: 680px;
    object-fit: contain;
    display: block;
    background: #000;
  }

  @media (max-width: 900px) {
    max-width: 460px;
    width: 100%;
    margin: 0 auto;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #06101f;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 18px 44px rgba(0, 242, 254, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 54px rgba(0, 242, 254, 0.34);
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 900;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
`;

const IntroSection = styled.section`
  padding: 80px 0;
  background: #0b1220;
`;

const Section = styled.section`
  padding: 82px 0;
  background: ${({ $light }) => ($light ? "#f5f8fb" : "#0b1220")};
  color: ${({ $light }) => ($light ? "#0b1220" : "#ffffff")};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 1.05fr);
  gap: 44px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  max-width: 820px;
  margin: 0 0 24px;
  color: #ffffff;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.08;
  font-weight: 900;
`;

const DarkTitle = styled(SectionTitle)`
  color: #0b1220;
`;

const Paragraph = styled.p`
  max-width: 760px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
  line-height: 1.75;
  margin: 0 0 22px;
`;

const Disclaimer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 700px;
  padding: 16px 18px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 1.55;

  svg {
    color: #00f2fe;
    flex: 0 0 auto;
    margin-top: 3px;
  }
`;

const MediaCard = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 26px 64px rgba(0, 0, 0, 0.38);

  img {
    width: 100%;
    display: block;
  }
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

const InfoPanel = styled.article`
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(11, 18, 32, 0.08);
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);
  padding: 30px;

  h2 {
    margin: 0 0 22px;
    color: #0b1220;
    font-size: clamp(26px, 3vw, 36px);
    line-height: 1.1;
    font-weight: 900;
  }
`;

const PanelIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #06101f;
  background: #00f2fe;
  box-shadow: 0 14px 30px rgba(0, 242, 254, 0.28);
`;

const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #475569;
    line-height: 1.62;
  }

  svg {
    color: #00a8b8;
    flex: 0 0 auto;
    margin-top: 4px;
  }
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 13px;
    color: #475569;
    line-height: 1.62;
  }

  strong {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 999px;
    color: #06101f;
    background: #00f2fe;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 30px;

  ${Paragraph} {
    margin-bottom: 0;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.78fr) minmax(340px, 1.22fr);
  gap: 22px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.12);

  video {
    width: 100%;
    aspect-ratio: 9 / 16;
    display: block;
    object-fit: contain;
    background: #000;
  }
`;

const BrochureCard = styled(MediaCard)``;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FAQCard = styled.article`
  padding: 24px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(11, 18, 32, 0.08);
  box-shadow: 0 14px 40px rgba(11, 18, 32, 0.08);

  h3 {
    margin: 0 0 10px;
    color: #0b1220;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: #526174;
    line-height: 1.65;
  }
`;

const CTASection = styled.section`
  padding: 86px 0;
  background:
    linear-gradient(135deg, rgba(0, 242, 254, 0.14), rgba(79, 172, 254, 0.06)),
    #07111f;
  text-align: center;
`;

const CTATitle = styled.h2`
  max-width: 820px;
  margin: 0 auto 16px;
  color: #ffffff;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.06;
  font-weight: 900;
`;

const CTAText = styled.p`
  max-width: 660px;
  margin: 0 auto 28px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.65;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const PhoneCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 900;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.07);
`;
