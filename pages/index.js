import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import {
  FaArrowRight,
  FaBolt,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaShieldAlt,
  FaStethoscope,
  FaTimes,
} from "react-icons/fa";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

const painPointIds = [
  { top: "23%", left: "48.7%", id: "neckPain" },
  { top: "36%", left: "48.7%", id: "midBackPain" },
  { top: "47.5%", left: "48.7%", id: "lowerBackPain" },
  { top: "29%", left: "38%", id: "leftShoulderPain" },
  { top: "29%", left: "59%", id: "rightShoulderPain" },
  { top: "72%", left: "38.5%", id: "leftKneePain" },
  { top: "72%", left: "60.5%", id: "rightKneePain" },
];

const Index = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const getPainPointContent = (painPoint) => {
    const content = {
      [t("neckPain")]: {
        causes: isEn
          ? "Neck pain often comes from posture, screen use, whiplash, disc changes, or irritated cervical nerves."
          : "El dolor de cuello puede venir de postura, uso de pantallas, latigazo cervical, cambios discales o nervios irritados.",
        treatment: isEn
          ? "We combine cervical evaluation, chiropractic care, decompression when appropriate, and laser therapy to reduce pressure and inflammation."
          : "Combinamos evaluacion cervical, cuidado quiropractico, descompresion cuando aplica y laser para bajar presion e inflamacion.",
      },
      [t("midBackPain")]: {
        causes: isEn
          ? "Mid-back pain is often tied to posture, repetitive work, rib or thoracic joint restriction, and muscle guarding."
          : "El dolor de espalda media suele estar relacionado con postura, trabajo repetitivo, restriccion toracica y tension muscular.",
        treatment: isEn
          ? "Targeted chiropractic care and rehabilitation support can improve mobility and calm overloaded tissues."
          : "El cuidado quiropractico dirigido y la rehabilitacion ayudan a mejorar movilidad y calmar tejidos sobrecargados.",
      },
      [t("lowerBackPain")]: {
        causes: isEn
          ? "Lower back pain may come from herniated discs, sciatica, muscle strain, stenosis, or prolonged sitting."
          : "El dolor lumbar puede venir de hernias discales, ciatica, tension muscular, estenosis o estar sentado por mucho tiempo.",
        treatment: isEn
          ? "Lumbar decompression, chiropractic care, and laser therapy can reduce disc pressure and help restore function."
          : "La descompresion lumbar, quiropractica y laser pueden reducir presion discal y mejorar funcion.",
      },
      [t("leftShoulderPain")]: {
        causes: isEn
          ? "Shoulder pain can involve the rotator cuff, joint irritation, posture, or referred pain from the neck."
          : "El dolor de hombro puede envolver manguito rotador, irritacion articular, postura o dolor referido del cuello.",
        treatment: isEn
          ? "We evaluate the neck and shoulder together, then use hands-on care, laser therapy, and rehab support."
          : "Evaluamos cuello y hombro juntos, luego usamos cuidado manual, laser y apoyo de rehabilitacion.",
      },
      [t("rightShoulderPain")]: {
        causes: isEn
          ? "Shoulder pain can involve the rotator cuff, joint irritation, posture, or referred pain from the neck."
          : "El dolor de hombro puede envolver manguito rotador, irritacion articular, postura o dolor referido del cuello.",
        treatment: isEn
          ? "We evaluate the neck and shoulder together, then use hands-on care, laser therapy, and rehab support."
          : "Evaluamos cuello y hombro juntos, luego usamos cuidado manual, laser y apoyo de rehabilitacion.",
      },
      [t("leftKneePain")]: {
        causes: isEn
          ? "Knee pain may come from arthritis, meniscus irritation, alignment issues, or overuse."
          : "El dolor de rodilla puede venir de artritis, irritacion de menisco, alineacion o sobreuso.",
        treatment: isEn
          ? "Care may include inflammation control, movement guidance, and a consultation to see whether knee decompression is appropriate."
          : "El cuidado puede incluir control de inflamacion, guia de movimiento y una consulta para ver si la descompresion de rodilla aplica.",
      },
      [t("rightKneePain")]: {
        causes: isEn
          ? "Knee pain may come from arthritis, meniscus irritation, alignment issues, or overuse."
          : "El dolor de rodilla puede venir de artritis, irritacion de menisco, alineacion o sobreuso.",
        treatment: isEn
          ? "Care may include inflammation control, movement guidance, and a consultation to see whether knee decompression is appropriate."
          : "El cuidado puede incluir control de inflamacion, guia de movimiento y una consulta para ver si la descompresion de rodilla aplica.",
      },
    };

    return content[painPoint] || {
      causes: isEn ? "Pain in this area can have several causes." : "El dolor en esta area puede tener varias causas.",
      treatment: isEn
        ? "We evaluate your condition and match the treatment plan to your findings."
        : "Evaluamos tu condicion y ajustamos el plan a los hallazgos.",
    };
  };

  const pageTitle = isEn
    ? "Chiropractor in Levittown & Toa Baja PR | Spinal Decompression Puerto Rico | PR Decompression Centers"
    : "Quiropractico en Levittown y Toa Baja PR | Descompresion Espinal Puerto Rico | PR Decompression Centers";

  const pageDescription = isEn
    ? "IDD Therapy® provider in Levittown and Toa Baja, Puerto Rico. Accu-SPINA® spinal decompression for herniated discs, sciatica, and neck or back pain. Call 787-261-8258."
    : "Proveedor de Terapia IDD® en Levittown y Toa Baja, Puerto Rico. Descompresion Accu-SPINA® para hernias discales, ciatica y dolor de cuello o espalda. Llame 787-261-8258.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "PR Decompression Centers",
    url: "https://prdecompressioncenters.com",
    telephone: "+1-787-261-8258",
    image: "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "RH-16 Ave. Building, Los Dominicos",
      addressLocality: "Toa Baja",
      addressRegion: "PR",
      postalCode: "00949",
      addressCountry: "US",
    },
    medicalSpecialty: ["Chiropractic", "Physical Therapy", "Pain Management"],
    knowsAbout: [
      "IDD Therapy",
      "Intervertebral Differential Dynamics",
      "Accu-SPINA",
      "Spinal decompression",
      "Herniated disc treatment",
    ],
  };

  const selectedIsKneePain = selectedPainPoint === "leftKneePain" || selectedPainPoint === "rightKneePain";

  const services = useMemo(
    () => [
      {
        title: t("advancedChiropractic"),
        text: isEn
          ? "Hands-on spinal care for alignment, mobility, and nerve irritation."
          : "Cuidado espinal manual para alineacion, movilidad e irritacion nerviosa.",
        image: "/images/chiropractic-treatment-toa-baja.jpeg",
        href: "/products#chiropractic",
        icon: <FaStethoscope />,
      },
      {
        title: t("spinalDecompressionTitle"),
        text: isEn
          ? "IDD Therapy® on Accu-SPINA® for herniated discs, sciatica, and neck or back pain."
          : "Terapia IDD® en Accu-SPINA® para hernias discales, ciatica y dolor de cuello o espalda.",
        image: "/images/accu-spina-spinal-decompression-system-landscape.png",
        href: "/idd-therapy",
        icon: <FaHeartbeat />,
      },
      {
        title: t("advancedLaserTitle"),
        text: isEn
          ? "Light therapy to support pain relief, inflammation control, and tissue recovery."
          : "Terapia de luz para apoyar alivio, inflamacion y recuperacion de tejidos.",
        image: "/images/advanced-laser-therapy-treatment.png",
        href: "/products#laser",
        icon: <FaBolt />,
      },
      {
        title: t("matrix"),
        text: isEn
          ? "Rehabilitation support for movement, chronic tension, and recovery."
          : "Apoyo de rehabilitacion para movimiento, tension cronica y recuperacion.",
        image: "/images/matrix-rehabilitation-therapy.jpeg",
        href: "/products#matrix",
        icon: <FaShieldAlt />,
      },
    ],
    [isEn, t]
  );

  const videos = [
    {
      title: t("spinalDecompressionVideo"),
      src: "https://www.youtube.com/embed/tJahlOwwuGM",
      type: "iframe",
    },
    {
      title: t("chiropracticVideo"),
      src: "https://www.youtube.com/embed/iWwJeSb7Dh4",
      type: "iframe",
    },
    {
      title: t("clinicVideo"),
      src: "/videos/Centro-Quiropractico-Dra.-Morales.mp4",
      type: "video",
    },
  ];

  return (
    <Page>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="IDD Therapy Puerto Rico, Accu-SPINA Levittown, chiropractor Levittown, chiropractor Toa Baja, spinal decompression Puerto Rico, decompression therapy, herniated disc treatment, sciatica treatment, dolor de espalda, discos herniados"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/"
        schema={structuredData}
      />

      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroEyebrow>{t("accuSpinaTitle")}</HeroEyebrow>
          <HeroTitle>{t("mainTitle")}</HeroTitle>
          <HeroSub>{t("mainSubtitle")}</HeroSub>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {isEn ? "Schedule an Appointment" : "Agendar una Cita"}
            </PrimaryCTA>
            <GhostCTA href="#services">
              {isEn ? "Explore Services" : "Ver Servicios"}
              <FaArrowRight />
            </GhostCTA>
          </HeroActions>
          <TrustRow>
            <TrustItem><strong>20-30</strong><span>{isEn ? "session protocols" : "sesiones tipicas"}</span></TrustItem>
            <TrustItem><strong>{isEn ? "No" : "Sin"}</strong><span>{isEn ? "surgery or downtime" : "cirugia ni reposo"}</span></TrustItem>
            <TrustItem><strong>IDD</strong><span>{isEn ? "Accu-SPINA therapy" : "terapia Accu-SPINA"}</span></TrustItem>
          </TrustRow>
        </HeroContent>
      </Hero>

      <IntroBand>
        <IntroText>
          <Eyebrow>{isEn ? "Specialized spine care" : "Cuidado especializado"}</Eyebrow>
          <SectionTitle>{isEn ? "Built around the source of your pain." : "Enfocado en la causa de tu dolor."}</SectionTitle>
        </IntroText>
        <IntroCards>
          {[t("benefitItem1"), t("benefitItem2"), t("benefitItem3")].map((item) => (
            <MiniCard key={item}>
              <FaCheckCircle />
              <span>{item}</span>
            </MiniCard>
          ))}
        </IntroCards>
      </IntroBand>

      <Section id="services" $light>
        <Container>
          <SectionHeader>
            <Eyebrow>{t("services")}</Eyebrow>
            <DarkTitle>{t("specializedServices")}</DarkTitle>
          </SectionHeader>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <ServiceImage>
                  <img src={service.image} alt={service.title} loading={index > 1 ? "lazy" : "eager"} />
                  <IconBadge>{service.icon}</IconBadge>
                </ServiceImage>
                <ServiceBody>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <CardLink href={service.href}>
                    {t("learnMore")} <FaArrowRight />
                  </CardLink>
                </ServiceBody>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </Section>

      <FeatureSection>
        <FeatureImage>
          <img src="/images/accu-spina-spinal-decompression-system-desktop.png" alt="Accu-SPINA spinal decompression system" />
        </FeatureImage>
        <FeatureCopy>
          <Eyebrow>{t("ourSpecialty")}</Eyebrow>
          <SectionTitle>{t("accuSpinaTitle")}</SectionTitle>
          <FeatureText>{t("accuSpinaIntro")}</FeatureText>
          <FeatureList>
            <li>{t("protocolStep1")}</li>
            <li>{t("protocolStep3")}</li>
            <li>{t("protocolStep4")}</li>
          </FeatureList>
          <PrimaryCTA href="/idd-therapy">
            {isEn ? "Learn about IDD Therapy" : "Conoce la Terapia IDD"}
            <FaArrowRight />
          </PrimaryCTA>
        </FeatureCopy>
      </FeatureSection>

      <Section $light>
        <Container>
          <PainSectionHeader>
            <Eyebrow>{t("clickWhere")}</Eyebrow>
            <DarkTitle>{t("herniatedDiscTitle")}</DarkTitle>
            <MutedLead>
              {isEn
                ? "Select the area that hurts and see how our care plan may approach it."
                : "Selecciona el area que duele y mira como podriamos abordarlo."}
            </MutedLead>
          </PainSectionHeader>

          <PainGrid>
            <PainDiagramColumn>
              <PainPrompt>{isEn ? "Click where you feel pain" : "Haz clic donde te duele"}</PainPrompt>
              <PainDiagram>
                <img src="/images/interactive-pain-diagram.jpeg" alt="Interactive pain diagram" />
                {painPointIds.map((point) => (
                  <PainPoint
                    key={point.id}
                    type="button"
                    aria-label={t(point.id)}
                    onClick={() => setSelectedPainPoint(point.id)}
                    style={{ top: point.top, left: point.left }}
                  />
                ))}
              </PainDiagram>
            </PainDiagramColumn>
            <PainPanel>
              {selectedPainPoint ? (
                <>
                  <CloseButton type="button" onClick={() => setSelectedPainPoint(null)} aria-label={t("close")}>
                    <FaTimes />
                  </CloseButton>
                  <PainTitle>{t(selectedPainPoint)}</PainTitle>
                  <InfoBlock>
                    <h4>{t("commonCauses")}</h4>
                    <p>{getPainPointContent(t(selectedPainPoint)).causes}</p>
                  </InfoBlock>
                  <InfoBlock>
                    <h4>{t("howWeCanHelp")}</h4>
                    <p>{getPainPointContent(t(selectedPainPoint)).treatment}</p>
                  </InfoBlock>
                  {selectedIsKneePain && (
                    <PanelLink href="/knee-decompression">
                      {isEn ? "Learn about knee decompression" : "Conoce la descompresion de rodilla"}
                      <FaArrowRight />
                    </PanelLink>
                  )}
                </>
              ) : (
                <EmptyPain>
                  <FaMapMarkerAlt />
                  <h3>{isEn ? "Choose a pain area" : "Elige un area"}</h3>
                  <p>{isEn ? "Tap a glowing point on the diagram to view common causes and treatment options." : "Toca un punto en el diagrama para ver causas y opciones de tratamiento."}</p>
                </EmptyPain>
              )}
            </PainPanel>
          </PainGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Eyebrow>{t("testimonialsSectionTitle")}</Eyebrow>
            <SectionTitle>{isEn ? "Real patients. Real relief stories." : "Pacientes reales. Historias reales."}</SectionTitle>
          </SectionHeader>
          <VideoGrid>
            {[
              {
                src: "/videos/Testimonio Decompression.mp4",
                caption: isEn ? "Results of Decompression Therapy" : "Resultados de Terapia de Descompresion",
              },
              {
                src: "/videos/Testimonio Soluciones Sin Cirugia Dolor De Espalda.mp4",
                caption: isEn ? "Non-surgical solutions for back and neck pain" : "Soluciones sin cirugia para espalda y cuello",
              },
            ].map((video) => (
              <VideoCard key={video.src}>
                <video controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                </video>
                <h3>{video.caption}</h3>
              </VideoCard>
            ))}
          </VideoGrid>
        </Container>
      </Section>

      <Section $light>
        <Container>
          <SectionHeader>
            <Eyebrow>{t("videoSectionTitle")}</Eyebrow>
            <DarkTitle>{isEn ? "Understand your options before you decide." : "Entiende tus opciones antes de decidir."}</DarkTitle>
          </SectionHeader>
          <EducationGrid>
            {videos.map((video) => (
              <EducationCard key={video.title}>
                <h3><FaPlay /> {video.title}</h3>
                <MediaFrame>
                  {video.type === "iframe" ? (
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                    </video>
                  )}
                </MediaFrame>
              </EducationCard>
            ))}
          </EducationGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>{t("readyForRelief")}</CTATitle>
          <CTASub>{t("teamReady")}</CTASub>
          <CTAButtons>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {t("bookConsult")}
            </PrimaryCTA>
            <GhostCTA href="tel:7872618258">
              <FaPhoneAlt />
              787-261-8258
            </GhostCTA>
          </CTAButtons>
        </Container>
      </CTASection>
    </Page>
  );
};

export default Index;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  width: 100%;
  background: #0b1220;
  color: #ffffff;
  overflow-x: hidden;
`;

const Hero = styled.section`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  background: url('/images/accu-spina-spinal-decompression-system-landscape.png') center/cover no-repeat, #0b1220;

  @media (min-width: 900px) {
    background-image: url('/images/accu-spina-spinal-decompression-system-desktop.png');
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 17, 31, 0.95) 0%, rgba(7, 17, 31, 0.78) 48%, rgba(7, 17, 31, 0.32) 100%),
    radial-gradient(circle at 72% 44%, rgba(0, 242, 254, 0.18), transparent 32%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 86px 24px 72px;
  animation: ${fadeUp} 0.65s ease both;
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  color: #00f2fe;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid rgba(0, 242, 254, 0.35);
  border-radius: 999px;
  background: rgba(0, 242, 254, 0.08);
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  max-width: 840px;
  margin: 0 0 20px;
  font-size: clamp(44px, 7vw, 84px);
  line-height: 0.98;
  font-weight: 900;
  letter-spacing: 0;
`;

const HeroSub = styled.p`
  max-width: 670px;
  margin: 0 0 32px;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.55;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 38px;
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 26px;
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

const GhostCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 24px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
`;

const TrustRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 760px;
  gap: 12px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const TrustItem = styled.div`
  padding: 16px 18px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);

  strong {
    display: block;
    color: #00f2fe;
    font-size: 24px;
    line-height: 1;
  }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.76);
    font-size: 13px;
    margin-top: 6px;
  }
`;

const IntroBand = styled.section`
  padding: 42px max(24px, calc((100vw - 1200px) / 2));
  background: #0b1220;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const IntroText = styled.div``;

const Eyebrow = styled.div`
  color: #00c7d8;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  max-width: 780px;
  margin: 0 0 24px;
  color: #ffffff;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.08;
  font-weight: 900;
`;

const DarkTitle = styled(SectionTitle)`
  color: #0b1220;
`;

const IntroCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const MiniCard = styled.div`
  padding: 18px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  line-height: 1.45;

  svg {
    color: #00c7d8;
    margin-bottom: 12px;
  }
`;

const Section = styled.section`
  padding: 86px 0;
  background: ${({ $light }) => ($light ? "#f5f8fb" : "#0b1220")};
  color: ${({ $light }) => ($light ? "#0b1220" : "#ffffff")};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled.div`
  margin-bottom: 32px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.article)`
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(11, 18, 32, 0.08);
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);
`;

const ServiceImage = styled.div`
  position: relative;
  height: 220px;
  padding: 16px;
  background: linear-gradient(180deg, #ffffff 0%, #edf5fb 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const IconBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #06101f;
  background: #00f2fe;
  box-shadow: 0 12px 28px rgba(0, 242, 254, 0.32);
`;

const ServiceBody = styled.div`
  padding: 22px;

  h3 {
    min-height: 58px;
    margin: 0 0 10px;
    color: #0b1220;
    font-size: 21px;
    line-height: 1.18;
    font-weight: 900;
  }

  p {
    min-height: 96px;
    margin: 0 0 18px;
    color: #526174;
    line-height: 1.6;
  }
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #006f91;
  font-weight: 900;
  text-decoration: none;
`;

const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  background: #07111f;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureImage = styled.div`
  min-height: 560px;
  background: #0b1220;

  img {
    width: 100%;
    height: 100%;
    min-height: 560px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    min-height: 320px;

    img {
      min-height: 320px;
    }
  }
`;

const FeatureCopy = styled.div`
  padding: 78px clamp(24px, 6vw, 86px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
  line-height: 1.75;
  margin: 0 0 22px;
`;

const FeatureList = styled.ul`
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 0 0 28px;
  list-style: none;

  li {
    color: rgba(255, 255, 255, 0.86);
    padding-left: 28px;
    position: relative;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #00f2fe;
  }
`;

const MutedLead = styled.p`
  color: #526174;
  font-size: 17px;
  line-height: 1.65;
  max-width: 660px;
  margin: 0 0 28px;
`;

const PainSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;

  ${DarkTitle} {
    margin-left: auto;
    margin-right: auto;
  }

  ${MutedLead} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const PainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 500px) minmax(320px, 500px);
  gap: 28px;
  align-items: start;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PainDiagramColumn = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const PainPrompt = styled.div`
  background: #ffffff;
  border: 1px solid #dce8f2;
  border-radius: 8px;
  box-shadow: 0 12px 30px rgba(11, 18, 32, 0.08);
  color: #0b1220;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  padding: 16px;
  margin-bottom: 16px;
`;

const PainDiagram = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dce8f2;
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const PainPoint = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: -12px 0 0 -12px;
  border: 0;
  border-radius: 999px;
  background: #ff4d5d;
  cursor: pointer;
  box-shadow: 0 0 0 8px rgba(255, 77, 93, 0.18);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const PainPanel = styled.div`
  position: relative;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dce8f2;
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);
  padding: 30px;
  min-height: 420px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const PainTitle = styled.h3`
  margin: 0 0 22px;
  color: #0b1220;
  font-size: 30px;
  font-weight: 900;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: #edf4fb;
  color: #0b1220;
  cursor: pointer;
`;

const InfoBlock = styled.div`
  margin-bottom: 22px;

  h4 {
    margin: 0 0 8px;
    color: #0f2138;
    font-size: 16px;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: #526174;
    line-height: 1.7;
  }
`;

const PanelLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  color: #06101f;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  font-weight: 900;
  text-decoration: none;

  svg {
    flex: 0 0 auto;
  }
`;

const EmptyPain = styled.div`
  height: 100%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #526174;

  svg {
    color: #00c7d8;
    font-size: 34px;
    margin-bottom: 18px;
  }

  h3 {
    color: #0b1220;
    font-size: 28px;
    font-weight: 900;
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    line-height: 1.65;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.article`
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    background: #000;
  }

  h3 {
    margin: 0;
    padding: 18px 20px;
    font-size: 18px;
    color: #ffffff;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.article`
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dce8f2;
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 76px;
    margin: 0;
    padding: 18px;
    color: #0b1220;
    font-size: 18px;
    font-weight: 900;
  }

  svg {
    color: #00c7d8;
  }
`;

const MediaFrame = styled.div`
  aspect-ratio: 16 / 9;
  background: #000;

  iframe,
  video {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
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
  max-width: 780px;
  margin: 0 auto 16px;
  color: #ffffff;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.05;
  font-weight: 900;
`;

const CTASub = styled.p`
  max-width: 650px;
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
