import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaCalendarAlt,
  FaChevronDown,
  FaHeartbeat,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
} from "react-icons/fa";
import Link from "next/link";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

const Products = () => {
  const { t, language } = useLanguage();
  const [openProduct, setOpenProduct] = useState("decompression");
  const isEn = language === "en";

  const toggleProduct = (product) => {
    setOpenProduct(openProduct === product ? null : product);
  };

  const pageTitle = isEn
    ? "IDD Therapy®, Accu-SPINA® & Chiropractic Services | Levittown & Toa Baja PR"
    : "Terapia IDD®, Accu-SPINA® y Servicios Quiropracticos | Levittown y Toa Baja PR";

  const pageDescription = isEn
    ? "IDD Therapy® on Accu-SPINA®, chiropractic adjustments, laser therapy and matrix rehabilitation in Levittown and Toa Baja, Puerto Rico. Non-surgical treatment for herniated discs, back pain, and sciatica. Call 787-261-8258."
    : "Terapia IDD® en Accu-SPINA®, ajustes quiropracticos, terapia laser y rehabilitacion matrix en Levittown y Toa Baja, Puerto Rico. Tratamiento sin cirugia para hernias discales, dolor de espalda y ciatica. Llame 787-261-8258.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    name: "PR Decompression Centers - Chiropractic Services Levittown",
    alternateName: ["Chiropractor Levittown Services", "Servicios Quiropracticos Levittown"],
    url: "https://prdecompressioncenters.com/products",
    telephone: "+1-787-261-8258",
    address: {
      "@type": "PostalAddress",
      streetAddress: "RH-16 Ave. Building, Los Dominicos",
      addressLocality: "Levittown",
      addressRegion: "PR",
      postalCode: "00949",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Levittown" },
      { "@type": "City", name: "Toa Baja" },
      { "@type": "City", name: "Bayamon" },
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Chiropractic Treatment Levittown",
        description: isEn
          ? "Professional chiropractic adjustments and spinal alignment therapy in Levittown PR"
          : "Ajustes quiropracticos profesionales y terapia de alineacion espinal en Levittown PR",
      },
      {
        "@type": "MedicalTherapy",
        name: "Spinal Decompression Therapy Levittown",
        description: isEn
          ? "Non-surgical treatment for herniated discs and spinal compression in Levittown Puerto Rico"
          : "Tratamiento no quirurgico para hernias discales y compresion espinal en Levittown Puerto Rico",
      },
      {
        "@type": "MedicalTherapy",
        name: "Laser Therapy Levittown",
        description: isEn
          ? "Advanced laser treatment for pain relief and tissue healing in Levittown"
          : "Tratamiento laser avanzado para alivio del dolor y sanacion de tejidos en Levittown",
      },
      {
        "@type": "MedicalTherapy",
        name: "Matrix Rehabilitation",
        description: isEn
          ? "Matrix therapy for muscle recovery and pain management"
          : "Terapia matrix para recuperacion muscular y manejo del dolor",
      },
    ],
  };

  const services = useMemo(
    () => [
      {
        id: "decompression",
        title: t("decompression"),
        image: "/images/accu-spina-spinal-decompression-system-landscape.png",
        alt: "Accu-SPINA spinal decompression system in a premium clinical studio",
        icon: <FaHeartbeat />,
        accent: "#00f2fe",
        summary: isEn
          ? "IDD Therapy® on Accu-SPINA® — targeted, computer-controlled disc treatment, not generic traction."
          : "Terapia IDD® en Accu-SPINA® — tratamiento discal dirigido por computadora, no traccion generica.",
        detail: t("decompressionDesc"),
        insurance: t("insuranceNotCovered"),
        tags: isEn ? ["Herniated discs", "Sciatica", "Neck & back"] : ["Hernias discales", "Ciatica", "Cuello y espalda"],
      },
      {
        id: "chiropractic",
        title: t("chiropractic"),
        image: "/images/chiropractic-treatment-toa-baja.jpeg",
        alt: "Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico",
        icon: <FaStethoscope />,
        accent: "#4facfe",
        summary: isEn
          ? "Hands-on spinal care to improve alignment, mobility, and daily function."
          : "Cuidado espinal manual para mejorar alineacion, movilidad y funcion diaria.",
        detail: t("chiropracticDesc"),
        insurance: (
          <>
            {t("insuranceChiro")}
            <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
            {t("callToVerify")}
          </>
        ),
        tags: isEn ? ["Adjustments", "Mobility", "Covered plans"] : ["Ajustes", "Movilidad", "Planes cubiertos"],
      },
      {
        id: "laser",
        title: t("laserTherapy"),
        image: "/images/advanced-laser-therapy-treatment.png",
        alt: "Advanced laser therapy for pain relief and healing in Puerto Rico",
        icon: <FaBolt />,
        accent: "#36d399",
        summary: isEn
          ? "Light-based therapy used to support tissue healing, pain relief, and inflammation control."
          : "Terapia con luz para apoyar sanacion de tejidos, alivio del dolor y control de inflamacion.",
        detail: t("laserDesc"),
        insurance: (
          <>
            {t("insuranceLaser")}
            <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
            {t("callToVerify")}
          </>
        ),
        tags: isEn ? ["Pain relief", "Inflammation", "Recovery"] : ["Alivio", "Inflamacion", "Recuperacion"],
      },
      {
        id: "matrix",
        title: t("matrix"),
        image: "/images/matrix-rehabilitation-therapy.jpeg",
        alt: "Matrix rehabilitation therapy for muscle recovery and pain management",
        icon: <FaShieldAlt />,
        accent: "#8fd3ff",
        summary: isEn
          ? "Rehabilitation support for chronic muscle tension, recovery, and improved movement."
          : "Apoyo de rehabilitacion para tension muscular cronica, recuperacion y mejor movimiento.",
        detail: t("matrixDesc"),
        insurance: t("insuranceNotCovered"),
        tags: isEn ? ["Rehab", "Muscle recovery", "Function"] : ["Rehab", "Musculos", "Funcion"],
      },
    ],
    [isEn, t]
  );

  return (
    <MainContainer>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="IDD Therapy Puerto Rico, Accu-SPINA Levittown, chiropractic services Levittown, chiropractor services Levittown PR, spinal decompression Levittown, laser therapy Levittown Puerto Rico, chiropractic treatment Levittown, servicios quiropracticos Levittown, herniated disc treatment Levittown, back pain treatment Levittown PR, sciatica treatment Levittown, matrix therapy Levittown"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/products"
        schema={structuredData}
      />

      <Hero>
        <HeroContent>
          <Eyebrow>{isEn ? "Clinical services" : "Servicios clinicos"}</Eyebrow>
          <Title>{t("services")}</Title>
          <HeroText>
            {isEn
              ? "A focused care menu for spine pain, nerve irritation, mobility limits, and recovery support. Every service is selected around your exam findings and treatment goals."
              : "Un menu de cuidado enfocado en dolor de columna, irritacion nerviosa, limites de movilidad y apoyo de recuperacion. Cada servicio se selecciona segun tu evaluacion y tus metas."}
          </HeroText>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {isEn ? "Schedule an appointment" : "Agendar una cita"}
            </PrimaryCTA>
            <SecondaryCTA href="tel:7872618258">
              <FaPhoneAlt />
              787-261-8258
            </SecondaryCTA>
          </HeroActions>
        </HeroContent>
        <HeroMedia>
          <img src="/images/hero-lumbar-decompression.png" alt="" aria-hidden="true" />
        </HeroMedia>
      </Hero>

      <ServiceNav aria-label={isEn ? "Service shortcuts" : "Accesos a servicios"}>
        {services.map((service) => (
          <ServiceNavLink key={service.id} href={`#${service.id}`}>
            <span style={{ color: service.accent }}>{service.icon}</span>
            {service.title}
          </ServiceNavLink>
        ))}
      </ServiceNav>

      <ServicesSection>
        <SectionHeader>
          <Eyebrow>{isEn ? "Treatment options" : "Opciones de tratamiento"}</Eyebrow>
          <SectionTitle>
            {isEn ? "Care that feels specific, not generic." : "Cuidado especifico, no generico."}
          </SectionTitle>
        </SectionHeader>

        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              $accent={service.accent}
            >
              <ImagePanel>
                <img src={service.image} alt={service.alt} loading={index > 1 ? "lazy" : "eager"} />
                <IconBadge $accent={service.accent}>{service.icon}</IconBadge>
              </ImagePanel>
              <CardBody>
                <ProductTitle>{service.title}</ProductTitle>
                <Summary>{service.summary}</Summary>
                <TagRow>
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
                <DetailsButton onClick={() => toggleProduct(service.id)} $isOpen={openProduct === service.id}>
                  {openProduct === service.id ? (isEn ? "Hide details" : "Ocultar detalles") : t("moreInfo")}
                  <FaChevronDown />
                </DetailsButton>
                <DropdownContent $isOpen={openProduct === service.id}>
                  <InfoSection>
                    <InfoTitle>{t("whatIsThis")}</InfoTitle>
                    <InfoText>{service.detail}</InfoText>
                    {service.id === "decompression" && (
                      <CardLink href="/idd-therapy">
                        {isEn ? "Read the full IDD Therapy® / Accu-SPINA® explainer" : "Leer la explicacion completa de Terapia IDD® / Accu-SPINA®"}
                        <FaArrowRight />
                      </CardLink>
                    )}
                  </InfoSection>
                  <InfoSection>
                    <InfoTitle>{t("insuranceCover")}</InfoTitle>
                    <InfoText>{service.insurance}</InfoText>
                  </InfoSection>
                </DropdownContent>
              </CardBody>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesSection>

      <BottomCTA>
        <div>
          <Eyebrow>{isEn ? "Not sure where to start?" : "No sabes por donde empezar?"}</Eyebrow>
          <BottomTitle>
            {isEn
              ? "Start with a consultation and we will match the service to the problem."
              : "Comienza con una consulta y ajustamos el servicio al problema."}
          </BottomTitle>
        </div>
        <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
          {isEn ? "Request guidance" : "Pedir orientacion"}
          <FaArrowRight />
        </PrimaryCTA>
      </BottomCTA>
    </MainContainer>
  );
};

export default Products;

const MainContainer = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at 78% 8%, rgba(0, 242, 254, 0.16), transparent 30%),
    linear-gradient(180deg, #07111f 0%, #0b1220 46%, #f5f8fb 46%, #f5f8fb 100%);
  color: #ffffff;
  overflow-x: hidden;
`;

const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 84px 24px 46px;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 56px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00f2fe;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Title = styled.h1`
  font-size: clamp(44px, 6vw, 82px);
  line-height: 0.95;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 24px;
`;

const HeroText = styled.p`
  max-width: 680px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 19px;
  line-height: 1.7;
  margin: 0 0 32px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
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
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 18px 44px rgba(0, 242, 254, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 54px rgba(0, 242, 254, 0.34);
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
`;

const HeroMedia = styled.div`
  border-radius: 8px;
  overflow: hidden;
  min-height: 420px;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    min-height: 420px;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    min-height: 280px;

    img {
      min-height: 280px;
    }
  }
`;

const ServiceNav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 54px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 56px;
  padding: 0 18px;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

const ServicesSection = styled.section`
  background: #f5f8fb;
  color: #0b1220;
  padding: 72px 24px 88px;
`;

const SectionHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 28px;
`;

const SectionTitle = styled.h2`
  max-width: 760px;
  margin: 0;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05;
  font-weight: 900;
  color: #0b1220;
`;

const ServiceGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.article)`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  min-height: 420px;
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(11, 18, 32, 0.08);
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePanel = styled.div`
  position: relative;
  min-height: 260px;
  padding: 18px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f8fb 100%);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    border-radius: 6px;
  }
`;

const IconBadge = styled.div`
  position: absolute;
  left: 18px;
  top: 18px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #06101f;
  background: ${({ $accent }) => $accent};
  box-shadow: 0 14px 30px ${({ $accent }) => `${$accent}55`};
`;

const CardBody = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 680px) {
    padding: 24px;
  }
`;

const ProductTitle = styled.h2`
  color: #0b1220;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 900;
  margin: 0 0 12px;
`;

const Summary = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 18px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 11px;
  border-radius: 999px;
  color: #0f172a;
  background: #edf4fb;
  border: 1px solid #dbe7f3;
  font-size: 13px;
  font-weight: 800;
`;

const DetailsButton = styled.button`
  width: 100%;
  min-height: 48px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 0;
  border-radius: 8px;
  padding: 0 16px;
  color: #ffffff;
  background: #0f2138;
  cursor: pointer;
  font-weight: 800;
  text-align: left;

  svg {
    flex: 0 0 auto;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease;
  }
`;

const DropdownContent = styled.div`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.26s ease;
  width: 100%;

  > * {
    overflow: hidden;
  }
`;

const InfoSection = styled.div`
  margin-top: 18px;
`;

const InfoTitle = styled.h3`
  color: #0f2138;
  font-size: 15px;
  margin: 0 0 8px;
  font-weight: 900;
`;

const InfoText = styled.p`
  color: #475569;
  font-size: 15px;
  line-height: 1.65;
  margin: 0;
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: #006f91;
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #0f2138;
  }
`;

const PhoneLink = styled.a`
  color: #006f91;
  font-weight: 900;
  text-decoration: none;
  margin: 0 4px;
`;

const BottomCTA = styled.section`
  max-width: 1200px;
  margin: 0 auto 82px;
  padding: 42px 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(79, 172, 254, 0.05)),
    #07111f;
  border: 1px solid rgba(0, 242, 254, 0.18);
  box-shadow: 0 24px 70px rgba(7, 17, 31, 0.18);

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 24px 64px;
    padding: 32px 24px;
  }
`;

const BottomTitle = styled.h2`
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.1;
  font-weight: 900;
`;
