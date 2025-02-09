import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

const Index = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);
  const { t, language } = useLanguage();

  const getPainPointContent = (painPoint) => {
    const content = {
      [t('neckPain')]: {
        causes: language === 'en' 
          ? "Neck pain often results from poor posture, prolonged screen use, whiplash injuries, or degenerative conditions. This can lead to muscle tension, pinched nerves, and cervical spine misalignment."
          : "El dolor de cuello suele ser resultado de una mala postura, uso prolongado de pantallas, lesiones por latigazo cervical o condiciones degenerativas. Esto puede causar tensión muscular, nervios pinzados y desalineación de la columna cervical.",
        treatment: language === 'en'
          ? "Our chiropractic adjustments and decompression therapy can help realign your cervical spine, reduce nerve pressure, and relax tense muscles. Laser therapy can also help reduce inflammation and accelerate healing in the affected area."
          : "Nuestros ajustes quiroprácticos y terapia de descompresión pueden ayudar a realinear su columna cervical, reducir la presión nerviosa y relajar los músculos tensos. La terapia con láser también puede ayudar a reducir la inflamación y acelerar la curación en el área afectada."
      },
      [t('midBackPain')]: {
        causes: language === 'en'
          ? "Mid back pain typically stems from poor posture, repetitive movements, muscle strain, or spinal disc issues. This area is particularly affected by prolonged sitting and workplace ergonomics."
          : "El dolor de espalda media generalmente proviene de mala postura, movimientos repetitivos, tensión muscular o problemas de disco espinal. Esta área se ve particularmente afectada por estar sentado prolongadamente y la ergonomía del lugar de trabajo.",
        treatment: language === 'en'
          ? "We offer targeted chiropractic care to improve thoracic spine mobility, combined with matrix therapy to address muscle tension. Our decompression techniques can help relieve pressure on spinal discs and nerves in this region."
          : "Ofrecemos atención quiropráctica específica para mejorar la movilidad de la columna torácica, combinada con terapia matrix para tratar la tensión muscular. Nuestras técnicas de descompresión pueden ayudar a aliviar la presión en los discos espinales y nervios en esta región."
      },
      [t('lowerBackPain')]: {
        causes: language === 'en'
          ? "Lower back pain can be caused by herniated discs, sciatica, muscle strains, or degenerative conditions. Lifestyle factors like heavy lifting, prolonged sitting, or lack of exercise can worsen the condition."
          : "El dolor de espalda baja puede ser causado por discos herniados, ciática, tensiones musculares o condiciones degenerativas. Los factores de estilo de vida como levantar pesos pesados, sentarse durante mucho tiempo o falta de ejercicio pueden empeorar la condición.",
        treatment: language === 'en'
          ? "Our comprehensive approach includes spinal decompression to relieve disc pressure, chiropractic adjustments for proper alignment, and laser therapy to reduce inflammation. Matrix therapy helps address muscle imbalances and promotes faster healing."
          : "Nuestro enfoque integral incluye descompresión espinal para aliviar la presión en el disco, ajustes quiroprácticos para alineación adecuada y terapia con láser para reducir la inflamación. La terapia matrix ayuda a abordar los desequilibrios musculares y promueve una curación más rápida."
      },
      [t('leftShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor del hombro puede deberse a lesiones del codo rotador, hombro congelado, artritis o dolor de referencia de la columna cervical. La mala postura y los movimientos repetitivos a menudo contribuyen al problema.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación de atención quiropráctica y terapia con láser para abordar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar la amplitud de movimiento y reducir la tensión muscular."
      },
      [t('rightShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor del hombro puede deberse a lesiones del codo rotador, hombro congelado, artritis o dolor de referencia de la columna cervical. La mala postura y los movimientos repetitivos a menudo contribuyen al problema.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación de atención quiropráctica y terapia con láser para abordar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar la amplitud de movimiento y reducir la tensión muscular."
      },
      [t('leftKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede deberse a artritis de osteoartrógrafo, lesiones de ligamentos, roturas de menisco o problemas de alineación. Como articulación de carga, es particularmente susceptible al desgaste y desgaste.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia con láser para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar cualquier problema de alineación que pueda estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes."
      },
      [t('rightKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede deberse a artritis de osteoartrógrafo, lesiones de ligamentos, roturas de menisco o problemas de alineación. Como articulación de carga, es particularmente susceptible al desgaste y desgaste.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia con láser para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar cualquier problema de alineación que pueda estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes."
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

  return (
    <MainContainer>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <TitleContainer>
            <Title>{t('mainTitle')}</Title>
            <Subtitle>{t('mainSubtitle')}</Subtitle>
          </TitleContainer>

          <SectionTitle>{t('specializedServices')}</SectionTitle>
          <ServicesGrid>
            <FeatureBox>
              <FeatureTitle>{t('advancedChiropractic')}</FeatureTitle>
              <FeatureImage 
                src="/images/chiropractic-treatment-toa-baja.jpeg" 
                alt="Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico" 
              />
              <Link href="/products#chiropractic" passHref>
                <FeatureButton>{t('learnMoreChiro')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('spinalDecompressionTitle')}</FeatureTitle>
              <FeatureImage 
                src="/images/spinal-decompression-therapy-pr.png" 
                alt="Non-surgical spinal decompression therapy for herniated discs in Puerto Rico" 
              />
              <Link href="/products#decompression" passHref>
                <FeatureButton>{t('discoverDecompression')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('advancedLaserTitle')}</FeatureTitle>
              <FeatureImage 
                src="/images/advanced-laser-therapy-treatment.png" 
                alt="Advanced laser therapy for pain relief and healing in Puerto Rico" 
              />
              <Link href="/products#laser" passHref>
                <FeatureButton>{t('exploreLaser')}</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('matrix')}</FeatureTitle>
              <FeatureImage 
                src="/images/matrix-rehabilitation-therapy.jpeg" 
                alt="Matrix rehabilitation therapy for pain management in Puerto Rico" 
              />
              <Link href="/products#matrix" passHref>
                <FeatureButton>Learn More About Matrix</FeatureButton>
              </Link>
            </FeatureBox>
          </ServicesGrid>

          <BodyImageContainer>
            <SectionTitle>Herniated Disc Treatment & Pain Management</SectionTitle>
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
                <PainPoint $top="23%" $left="48.7%" title={t('neckPain')} onClick={() => setSelectedPainPoint(t('neckPain'))} />
                <PainPoint $top="36%" $left="48.7%" title={t('midBackPain')} onClick={() => setSelectedPainPoint(t('midBackPain'))} />
                <PainPoint $top="47.5%" $left="48.7%" title={t('lowerBackPain')} onClick={() => setSelectedPainPoint(t('lowerBackPain'))} />
                <PainPoint $top="29%" $left="38%" title={t('leftShoulderPain')} onClick={() => setSelectedPainPoint(t('leftShoulderPain'))} />
                <PainPoint $top="29%" $left="59%" title={t('rightShoulderPain')} onClick={() => setSelectedPainPoint(t('rightShoulderPain'))} />
                <PainPoint $top="72%" $left="38.5%" title={t('leftKneePain')} onClick={() => setSelectedPainPoint(t('leftKneePain'))} />
                <PainPoint $top="72%" $left="60.5%" title={t('rightKneePain')} onClick={() => setSelectedPainPoint(t('rightKneePain'))} />
              </ImageSection>

              <PopupSection $visible={selectedPainPoint !== null}>
                {selectedPainPoint && (
                  <>
                    <BackButton onClick={() => setSelectedPainPoint(null)}>{t('back')}</BackButton>
                    <Popup $visible={true}>
                      <PopupTitle>{selectedPainPoint}</PopupTitle>
                      <PopupSubtitle>{t('commonCauses')}</PopupSubtitle>
                      <PopupContent>{getPainPointContent(selectedPainPoint).causes}</PopupContent>
                      <PopupSubtitle>{t('howWeCanHelp')}</PopupSubtitle>
                      <PopupContent>{getPainPointContent(selectedPainPoint).treatment}</PopupContent>
                      <CloseButton onClick={() => setSelectedPainPoint(null)}>{t('close')}</CloseButton>
                    </Popup>
                  </>
                )}
              </PopupSection>
            </ContentWrapper>
          </BodyImageContainer>
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
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 60vh;
  background-image: url("/images/decompression-therapy-hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 50vh;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 16px;
  color: white;
  text-align: center;
  z-index: 2;
  padding: 0 20px;
  letter-spacing: -0.5px;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 0 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  text-align: center;
  z-index: 2;
  padding: 0 20px;
  max-width: 600px;
  line-height: 1.4;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 24px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: white;
  margin: 60px 0 40px;
  text-align: center;
  width: 100%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 40px 0 30px;
    padding: 0 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 0 20px;
  max-width: 1400px;
  margin: 0 auto 60px;
  width: 100%;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    margin-bottom: 40px;
  }
`;

const FeatureBox = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  height: auto;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-height: 450px;
    padding: 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 20px;
    min-height: 50px;
    margin-bottom: 15px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FeatureButton = styled.a`
  background: #3E517A;
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none !important;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  width: fit-content;
  margin-top: auto;
  box-shadow: 0 4px 15px rgba(62, 81, 122, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(62, 81, 122, 0.4);
    background: #4a6191;
  }

  &:visited, &:active, &:focus {
    text-decoration: none !important;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin-top: 10px;
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