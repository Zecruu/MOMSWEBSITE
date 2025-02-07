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
            <Title>Welcome to PR Decompression Centers</Title>
            <Subtitle>Where Advanced Technology Meets Compassionate Care</Subtitle>
          </TitleContainer>

          <FeatureContainer>
            <FeatureBox>
              <FeatureTitle>{t('weOffer')} {t('chiropractic')}</FeatureTitle>
              <FeatureImage 
                src="/images/Chiropractic.jpeg" 
                alt={t('chiropractic')} 
              />
              <Link href="/products#chiropractic" passHref>
                <FeatureButton>Information Here!</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('weOffer')} {t('decompression')}</FeatureTitle>
              <FeatureImage 
                src="/images/Decompression.png" 
                alt={t('decompression')} 
              />
              <Link href="/products#decompression" passHref>
                <FeatureButton>Information Here!</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('weOffer')} {t('laserTherapy')}</FeatureTitle>
              <FeatureImage 
                src="/images/Laser.png" 
                alt={t('laserTherapy')} 
              />
              <Link href="/products#laser" passHref>
                <FeatureButton>Information Here!</FeatureButton>
              </Link>
            </FeatureBox>
            <FeatureBox>
              <FeatureTitle>{t('weOffer')} {t('matrix')}</FeatureTitle>
              <FeatureImage 
                src="/images/Matrix.jpeg" 
                alt={t('matrix')} 
              />
              <Link href="/products#matrix" passHref>
                <FeatureButton>Information Here!</FeatureButton>
              </Link>
            </FeatureBox>
          </FeatureContainer>

          <BodyImageContainer>
            <ContentWrapper>
              <ImageSection>
                <InstructionBox>
                  {language === 'en' 
                    ? 'Click where you feel pain!'
                    : '¡Haga clic donde siente dolor!'}
                </InstructionBox>
                <InteractiveImage 
                  src="/images/human-body.jpeg" 
                  alt="Human Body" 
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
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: calc(100% - 260px);
  margin-left: 260px;
  top: 0;
  z-index: 1000;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - 260px);
  margin-left: 260px;
  padding: 0;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 50px 0 250px 0;
  margin: 0 auto;
  position: relative;
  left: -300px;

  @media (max-width: 768px) {
    left: 0;
    padding: 80px 0 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  background-image: url("/images/Title Background Image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 300px;
    margin: 0 auto;
    padding: 40px 20px;
    border-radius: 0;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Title = styled.h1`
  font-size: 52px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7),
               0 0 20px rgba(0, 0, 0, 0.4);
  max-width: 1000px;
  width: 100%;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0 15px;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 32px;
  color: white;
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7),
               0 0 20px rgba(0, 0, 0, 0.4);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 15px;
  }
`;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 30px;
    width: 90%;
  }
`;

const FeatureBox = styled.div`
  background: black;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    aspect-ratio: auto;
    min-height: auto;
  }
`;

const FeatureTitle = styled.h3`
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
    margin: 10px auto;
  }
`;

const FeatureButton = styled.a`
  background: #000033;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  text-align: center;
  width: 80%;

  &:hover {
    background: #00d9ff;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
    width: 90%;
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