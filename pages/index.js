import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Index = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const getPainPointContent = (painPoint) => {
    const content = {
      [t('neckPain')]: {
        causes: language === 'en' 
          ? "Neck pain often results from poor posture, prolonged screen use, whiplash injuries, or degenerative conditions. This can lead to muscle tension, pinched nerves, and cervical spine misalignment."
          : "El dolor cervical frecuentemente es consecuencia de una postura inadecuada, uso prolongado de pantallas, lesiones por latigazo cervical o condiciones degenerativas. Estas situaciones pueden provocar tensión muscular, compresión de nervios y desalineación de la columna cervical, afectando significativamente su calidad de vida.",
        treatment: language === 'en'
          ? "Our chiropractic adjustments and decompression therapy can help realign your cervical spine, reduce nerve pressure, and relax tense muscles. Laser therapy can also help reduce inflammation and accelerate healing in the affected area."
          : "Nuestros ajustes quiroprácticos especializados y la terapia de descompresión ayudan a realinear su columna cervical, reducir la presión sobre los nervios y relajar los músculos tensos. Complementamos el tratamiento con terapia láser avanzada para reducir la inflamación y acelerar la recuperación del área afectada."
      },
      [t('midBackPain')]: {
        causes: language === 'en' 
          ? "Mid back pain typically stems from poor posture, repetitive movements, muscle strain, or spinal disc issues. This area is particularly affected by prolonged sitting and workplace ergonomics."
          : "El dolor en la espalda media generalmente se origina por diversos factores como postura incorrecta, movimientos repetitivos, tensión muscular o problemas en los discos vertebrales. Esta zona es particularmente vulnerable durante periodos prolongados de sedestación y por una ergonomía inadecuada en el lugar de trabajo, lo que puede resultar en molestias crónicas si no se trata adecuadamente.",
        treatment: language === 'en'
          ? "We offer targeted chiropractic care to improve thoracic spine mobility, combined with matrix therapy to address muscle tension. Our decompression techniques can help relieve pressure on spinal discs and nerves in this region."
          : "Ofrecemos atención quiropráctica específica para mejorar la movilidad de la columna torácica, combinada con terapia matrix para tratar la tensión muscular. Nuestras técnicas avanzadas de descompresión ayudan a aliviar la presión en los discos vertebrales y nervios de esta región, promoviendo una recuperación integral y duradera."
      },
      [t('lowerBackPain')]: {
        causes: language === 'en'
          ? "Lower back pain can be caused by herniated discs, sciatica, muscle strains, or degenerative conditions. Lifestyle factors like heavy lifting, prolonged sitting, or lack of exercise can worsen the condition."
          : "El dolor lumbar puede ser causado por hernias discales, ciática, distensiones musculares o condiciones degenerativas. Factores del estilo de vida como levantar objetos pesados, permanecer sentado por largos períodos o la falta de ejercicio pueden agravar significativamente estas condiciones. La región lumbar es fundamental para la movilidad y estabilidad del cuerpo.",
        treatment: language === 'en'
          ? "Our comprehensive approach includes spinal decompression to relieve disc pressure, chiropractic adjustments for proper alignment, and laser therapy to reduce inflammation. Matrix therapy helps address muscle imbalances and promotes faster healing."
          : "Nuestro enfoque integral incluye descompresión espinal para aliviar la presión discal, ajustes quiroprácticos para una alineación óptima y terapia láser para reducir la inflamación. La terapia matrix complementa el tratamiento, ayudando a corregir desequilibrios musculares y promoviendo una recuperación más rápida y efectiva."
      },
      [t('leftShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor de hombro puede surgir por lesiones del manguito rotador, hombro congelado, artritis o dolor referido de problemas cervicales. La postura inadecuada y los movimientos repetitivos frecuentemente contribuyen al problema. Esta articulación compleja requiere un diagnóstico preciso para un tratamiento efectivo.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación especializada de atención quiropráctica y terapia láser para tratar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar el rango de movimiento, reducir la tensión muscular y restaurar la funcionalidad normal del hombro."
      },
      [t('rightShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor de hombro puede surgir por lesiones del manguito rotador, hombro congelado, artritis o dolor referido de problemas cervicales. La postura inadecuada y los movimientos repetitivos frecuentemente contribuyen al problema. Esta articulación compleja requiere un diagnóstico preciso para un tratamiento efectivo.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación especializada de atención quiropráctica y terapia láser para tratar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar el rango de movimiento, reducir la tensión muscular y restaurar la funcionalidad normal del hombro."
      },
      [t('leftKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede originarse por osteoartritis, lesiones ligamentarias, desgarros de menisco o problemas de alineación. Al ser una articulación que soporta peso, es particularmente susceptible al desgaste. Los problemas biomecánicos pueden afectar toda la cadena cinética de la pierna.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia láser avanzada para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar problemas de alineación que puedan estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes y mejorar la estabilidad articular."
      },
      [t('rightKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede originarse por osteoartritis, lesiones ligamentarias, desgarros de menisco o problemas de alineación. Al ser una articulación que soporta peso, es particularmente susceptible al desgaste. Los problemas biomecánicos pueden afectar toda la cadena cinética de la pierna.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia láser avanzada para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar problemas de alineación que puedan estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes y mejorar la estabilidad articular."
      }
    };

    return content[painPoint] || {
      causes: language === 'en' 
        ? "Pain in this area can have various causes."
        : "El dolor en esta área puede tener varias causas.",
      treatment: language === 'en'
        ? "We offer multiple treatment options to help address your specific condition."
        : "Ofrecemos múltiples opciones de tratamiento para ayudar a tratar su condición específica."
    };
  };

  const pageTitle = language === 'en' 
    ? 'PR Decompression Centers - Expert Chiropractic & Spinal Treatment in Puerto Rico' 
    : 'PR Decompression Centers - Tratamiento Quiropráctico y Espinal en Puerto Rico';
  
  const pageDescription = language === 'en'
    ? 'Specialized chiropractic care and spinal decompression therapy in Puerto Rico. We treat back pain, herniated discs, sciatica and more with advanced non-surgical techniques.'
    : 'Cuidado quiropráctico especializado y terapia de descompresión espinal en Puerto Rico. Tratamos dolor de espalda, hernias discales, ciática y más con técnicas avanzadas no quirúrgicas.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "PR Decompression Centers",
    "image": "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "url": "https://prdecompressioncenters.com",
    "telephone": "+1-787-261-8258",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Toa Baja",
      "addressRegion": "PR",
      "postalCode": "00949",
      "addressCountry": "PR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4447,
      "longitude": -66.1916
    },
    "medicalSpecialty": ["Chiropractic", "Physical Therapy", "Pain Management"],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Spinal Decompression Therapy",
        "description": language === 'en' 
          ? "Non-surgical treatment for herniated discs and back pain" 
          : "Tratamiento no quirúrgico para hernias discales y dolor de espalda"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Treatment",
        "description": language === 'en'
          ? "Advanced chiropractic care for spine and joint issues"
          : "Cuidado quiropráctico avanzado para problemas de columna y articulaciones"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy",
        "description": language === 'en'
          ? "Advanced laser treatment for pain and inflammation"
          : "Tratamiento láser avanzado para dolor e inflamación"
      }
    ]
  };

  return (
    <MainContainer>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="chiropractic, spinal decompression, back pain, herniated disc, Puerto Rico, terapia descompresión, quiropractico, dolor espalda, hernia discal" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prdecompressioncenters.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://prdecompressioncenters.com/images/non-surgical-pain-relief.JPG" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://prdecompressioncenters.com/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://prdecompressioncenters.com/images/non-surgical-pain-relief.JPG" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://prdecompressioncenters.com/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <TitleContainer>
            <Title>{t('mainTitle')}</Title>
            <Subtitle>{t('mainSubtitle')}</Subtitle>
            <HeroButton href="#services">
              {language === 'en' ? 'Discover Our Services' : 'Descubra Nuestros Servicios'}
            </HeroButton>
            <ScrollIndicator />
          </TitleContainer>

          <SectionTitle id="testimonials">{t('testimonialsSectionTitle')}</SectionTitle>
          <TestimonialSection>
            <TestimonialsGrid>
              <TestimonialItem>
                <TestimonialVideo controls>
                  <source src="/videos/Testimonio Decompression.mp4" type="video/mp4" />
                  {language === 'en' 
                    ? 'Your browser does not support the video tag.' 
                    : 'Su navegador no soporta la etiqueta de video.'}
                </TestimonialVideo>
                <TestimonialCaption>
                  {language === 'en' 
                    ? 'Results of Decompression Therapy' 
                    : 'Resultados de Terapia de Descompresión'}
                </TestimonialCaption>
              </TestimonialItem>
              <TestimonialItem>
                <TestimonialVideo controls>
                  <source src="/videos/Testimonio Soluciones Sin Cirugia Dolor De Espalda.mp4" type="video/mp4" />
                  {language === 'en' 
                    ? 'Your browser does not support the video tag.' 
                    : 'Su navegador no soporta la etiqueta de video.'}
                </TestimonialVideo>
                <TestimonialCaption>
                  {language === 'en' 
                    ? 'Non-Surgical Solutions for Back and Neck Pain' 
                    : 'Soluciones Sin Cirugía para el Dolor de Espalda y Cuello'}
                </TestimonialCaption>
              </TestimonialItem>
            </TestimonialsGrid>
            <TestimonialDescription>
              {language === 'en' 
                ? 'Hear directly from our patients about their experience with our decompression therapy and non-surgical solutions for back and neck pain. In these testimonials you can also hear how the decompression machine has helped to improve their quality of life.'
                : 'Escuche directamente de nuestros pacientes sobre su experiencia con nuestra terapia de descompresión y soluciones sin cirugía para el dolor de espalda y para el dolor de cuello. En estos testimonios también puedes escuchar cómo la máquina de descompresión ha ayudado a mejorar su calidad de vida.'}
            </TestimonialDescription>
            <MoreTestimonialsLink href="/reviews" passHref>
              {language === 'en' ? 'See More Testimonials' : 'Ver Más Testimonios'}
            </MoreTestimonialsLink>
          </TestimonialSection>

          <SectionTitle id="services">{t('specializedServices')}</SectionTitle>
          <ServicesGrid>
            <FeatureBox>
              <FeatureImage 
                src="/images/chiropractic-treatment-toa-baja.jpeg" 
                alt="Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico" 
              />
              <FeatureTitle>{t('advancedChiropractic')}</FeatureTitle>
              <Link href="/products#chiropractic" passHref>
                <FeatureButton>{t('learnMoreChiro')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureImage 
                src="/images/spinal-decompression-therapy-pr.png" 
                alt="Non-surgical spinal decompression therapy for herniated discs in Puerto Rico" 
              />
              <FeatureTitle>{t('spinalDecompressionTitle')}</FeatureTitle>
              <Link href="/products#decompression" passHref>
                <FeatureButton>{t('discoverDecompression')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureImage 
                src="/images/advanced-laser-therapy-treatment.png" 
                alt="Advanced laser therapy for pain relief and healing in Puerto Rico" 
              />
              <FeatureTitle>{t('advancedLaserTitle')}</FeatureTitle>
              <Link href="/products#laser" passHref>
                <FeatureButton>{t('exploreLaser')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureImage 
                src="/images/matrix-rehabilitation-therapy.jpeg" 
                alt="Matrix rehabilitation therapy for pain management in Puerto Rico" 
              />
              <FeatureTitle>{t('matrix')}</FeatureTitle>
              <Link href="/products#matrix" passHref>
                <FeatureButton>Learn More About Matrix</FeatureButton>
              </Link>
            </FeatureBox>
          </ServicesGrid>

          <BodyImageContainer>
            <SectionTitle>{t('herniatedDiscTitle')}</SectionTitle>
            <ContentWrapper>
              <ImageSection>
                <InstructionBox>
                  {language === 'en' 
                    ? 'Click where you feel pain!'
                    : '¡Haga clic donde siente dolor!'}
                </InstructionBox>
                <InteractiveImage 
                  src="/images/interactive-pain-diagram.jpeg" 
                  alt="Interactive body diagram for pain point selection and treatment options" 
                />
                <PainPoint $top="23%" $left="48.7%" title={t('neckPain')} onClick={() => setSelectedPainPoint('neckPain')} />
                <PainPoint $top="36%" $left="48.7%" title={t('midBackPain')} onClick={() => setSelectedPainPoint('midBackPain')} />
                <PainPoint $top="47.5%" $left="48.7%" title={t('lowerBackPain')} onClick={() => setSelectedPainPoint('lowerBackPain')} />
                <PainPoint $top="29%" $left="38%" title={t('leftShoulderPain')} onClick={() => setSelectedPainPoint('leftShoulderPain')} />
                <PainPoint $top="29%" $left="59%" title={t('rightShoulderPain')} onClick={() => setSelectedPainPoint('rightShoulderPain')} />
                <PainPoint $top="72%" $left="38.5%" title={t('leftKneePain')} onClick={() => setSelectedPainPoint('leftKneePain')} />
                <PainPoint $top="72%" $left="60.5%" title={t('rightKneePain')} onClick={() => setSelectedPainPoint('rightKneePain')} />
              </ImageSection>

              <PopupSection $visible={selectedPainPoint !== null}>
                {selectedPainPoint && (
                  <>
                    <BackButton onClick={() => setSelectedPainPoint(null)}>{t('back')}</BackButton>
                    <Popup $visible={true}>
                      <PopupTitle>{t(selectedPainPoint)}</PopupTitle>
                      <PopupSubtitle>{t('commonCauses')}</PopupSubtitle>
                      <PopupContent>{getPainPointContent(t(selectedPainPoint)).causes}</PopupContent>
                      <PopupSubtitle>{t('howWeCanHelp')}</PopupSubtitle>
                      <PopupContent>{getPainPointContent(t(selectedPainPoint)).treatment}</PopupContent>
                      <CloseButton onClick={() => setSelectedPainPoint(null)}>{t('close')}</CloseButton>
                    </Popup>
                  </>
                )}
              </PopupSection>
            </ContentWrapper>
          </BodyImageContainer>

          {/* Video Section */}
          <SectionTitle>{t('videoSectionTitle')}</SectionTitle>
          <VideosContainer>
            {/* Video Section 1 */}
            <VideoSection>
              <VideoTitle>{t('spinalDecompressionVideo')}</VideoTitle>
              <VideoWrapper>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tJahlOwwuGM"
                  title="Spinal Decompression Therapy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoSection>

            {/* Video Section 2 */}
            <VideoSection>
              <VideoTitle>{t('chiropracticVideo')}</VideoTitle>
              <VideoWrapper>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iWwJeSb7Dh4"
                  title="Chiropractic Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoSection>

            {/* Video Section 3 */}
            <VideoSection>
              <VideoTitle>{t('clinicVideo')}</VideoTitle>
              <VideoWrapper>
                <video
                  width="100%"
                  height="100%"
                  controls
                  style={{ backgroundColor: 'black' }}
                >
                  <source src="/videos/Centro-Quiropractico-Dra.-Morales.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoWrapper>
            </VideoSection>
          </VideosContainer>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Index;

// Styled Components

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow-x: hidden;
  padding: 0;
  margin-top: 0;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  position: relative;
`;

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
`;

const Content = styled.div`
  flex: 1;
  padding: 0;
  width: 100%;
  margin: 0;
  overflow-x: hidden;
  position: relative;
  top: 0;
`;

const TitleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("/images/non-surgical-pain-relief.JPG");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: -70px;
  padding-top: 70px;
  top: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 2;
  }

  @media (max-width: 1024px) {
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
    background-position: center center;
    height: 100vh;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-position: center center;
    background-size: cover;
    height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 24px;
  color: white;
  text-align: center;
  z-index: 3;
  padding: 0 20px;
  letter-spacing: -1px;
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 1000px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 42px;
    padding: 0 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-align: center;
  z-index: 3;
  padding: 0 20px;
  max-width: 800px;
  line-height: 1.4;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards 0.3s;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0 24px;
  }
`;

const HeroButton = styled.a`
  background: transparent;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  margin-top: 40px;
  z-index: 3;
  transition: all 0.3s ease;
  border: 2px solid white;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards 0.6s;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    color: #000033;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    margin-top: 30px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0;
  animation: fadeIn 1s ease forwards 1s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid white;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
    animation: scrollBounce 2s infinite;
  }

  @keyframes scrollBounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }

  @media (max-width: 768px) {
    bottom: 20px;
    
    &::before {
      width: 20px;
      height: 20px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  color: white;
  margin: 80px 0 50px;
  text-align: center;
  width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  font-weight: 800;
  letter-spacing: -1px;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #00f2fe, #4facfe, #b465da);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 60px 0 40px;
    padding: 0 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto 80px;
  width: 100%;
  perspective: 1000px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 0 20px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
    margin-bottom: 40px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 15px;
  margin: 0;
  padding: 20px;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 200px;
    padding: 15px;
  }
`;

const FeatureButton = styled.a`
  background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none !important;
  font-weight: 600;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  width: fit-content;
  margin-top: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  display: inline-block;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  
  &:hover, &:focus, &:active, &:visited {
    background: linear-gradient(135deg, #ec2f4b 0%, #009fff 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(236, 47, 75, 0.4);
    text-decoration: none !important;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    margin-top: 20px;
  }
`;

const FeatureBox = styled.div`
  background: black;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  height: auto;
  min-height: 500px;
  overflow: hidden;
  transform-style: preserve-3d;
  gap: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 159, 255, 0.2), 0 0 20px rgba(236, 47, 75, 0.2);
    
    ${FeatureButton} {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(236, 47, 75, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    min-height: 400px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 28px;
  background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 30px;
  text-align: center;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
    min-height: 60px;
    margin-bottom: 25px;
  }
`;

const BodyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
    margin: 40px auto 20px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  max-width: 500px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 600px;
    margin: 0 auto;
    aspect-ratio: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const InstructionBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    order: -1;
    font-size: 20px;
    padding: 12px 20px;
    width: 90%;
    margin: 0 auto 30px;
  }
`;

const InteractiveImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: none;
  }
`;

const BackButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 20px;
    left: 20px;
    background: #000033;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2001;
  }
`;

const PainPoint = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  border-radius: 50%;
  cursor: pointer;
  top: ${props => props.$top};
  left: ${props => props.$left};
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    top: ${props => {
      const numericTop = parseFloat(props.$top);
      // Desktop -> Mobile conversion for top positions:
      // Neck: 23% -> needs adjustment
      // Mid back: 36% -> needs adjustment
      // Lower back: 47.5% -> needs adjustment
      // Shoulders: 29% -> needs adjustment
      // Knees: 72% -> needs adjustment
      // Add your custom percentages here to match the mobile image
      if (numericTop === 23) return '20.5%';     // neck - adjust this
      if (numericTop === 36) return '36%';     // mid back - adjust this
      if (numericTop === 47.5) return '47.5%'; // lower back - adjust this
      if (numericTop === 29) return '29%';     // shoulders - adjust this
      if (numericTop === 72) return '72%';     // knees - adjust this
      return props.$top;
    }};
    left: ${props => {
      const numericLeft = parseFloat(props.$left);
      // Desktop -> Mobile conversion for left positions:
      // Spine points: 48.7% -> might need adjustment
      // Left shoulder: 38% -> needs adjustment
      // Right shoulder: 59% -> needs adjustment
      // Left knee: 38.5% -> needs adjustment
      // Right knee: 60.5% -> needs adjustment
      // Add your custom percentages here to match the mobile image
      if (numericLeft === 48.7) return '48.7%';  // spine - adjust if needed
      if (numericLeft === 38) return '38%';      // left shoulder - adjust this
      if (numericLeft === 59) return '59%';      // right shoulder - adjust this
      if (numericLeft === 38.5) return '38.5%';  // left knee - adjust this
      if (numericLeft === 60.5) return '60.5%';  // right knee - adjust this
      return props.$left;
    }};
  }

  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    70% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const PopupSection = styled.div`
  flex: 1;
  max-width: 500px;
  position: sticky;
  top: 100px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 2000;
    display: ${props => props.$visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
  }
`;

const Popup = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: ${props => props.$visible ? 'block' : 'none'};
  margin-top: 72px;

  @media (max-width: 768px) {
    margin: 20px;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 20px;
    padding: 25px;
  }
`;

const PopupTitle = styled.h3`
  color: #000033;
  font-size: 24px;
  margin-bottom: 15px;
`;

const PopupSubtitle = styled.h4`
  color: #000033;
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const PopupContent = styled.p`
  color: #333;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: #000033;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background: #000066;
  }
`;

const FeatureLink = styled.a`
  text-decoration: none;
  color: #00d9ff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const GetStartedButton = styled.a`
  background-color: rgb(0, 161, 189);
  color: white;
  padding: 12px 24px;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  margin-top: 24px;
  z-index: 2;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(0, 141, 169);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    gap: 20px;
    padding: 10px;
  }
`;

const VideoSection = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(0, 217, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 15px;
  }
`;

const VideoTitle = styled.h3`
  font-size: 24px;
  color: white;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  background: black;
  
  iframe, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialCaption = styled.p`
  color: white;
  margin: 15px 0 0;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`;

const TestimonialVideo = styled.video`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  aspect-ratio: 16/9;
  object-fit: contain;
  background-color: black;
`;

const TestimonialDescription = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 800px;
`;

const MoreTestimonialsLink = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;