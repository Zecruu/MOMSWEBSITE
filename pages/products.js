import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown, FaStethoscope, FaHeartbeat, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

const Products = () => {
  const { t, language } = useLanguage();
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (product) => {
    setOpenProduct(openProduct === product ? null : product);
  };

  const pageTitle = language === 'en' 
    ? 'Chiropractic Services Levittown PR | Spinal Decompression & Laser Therapy Levittown Puerto Rico | PR Decompression Centers'
    : 'Servicios Quiroprácticos Levittown PR | Descompresión Espinal y Terapia Láser Levittown Puerto Rico | PR Decompression Centers';
  
  const pageDescription = language === 'en'
    ? 'Best chiropractic services in Levittown, Puerto Rico. Spinal decompression therapy, laser treatment, chiropractic adjustments. Expert care for herniated discs, back pain, sciatica in Levittown PR. Call 787-261-8258.'
    : 'Los mejores servicios quiroprácticos en Levittown, Puerto Rico. Terapia de descompresión espinal, tratamiento láser, ajustes quiroprácticos. Atención experta para hernias discales, dolor de espalda, ciática en Levittown PR. Llame 787-261-8258.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "name": "PR Decompression Centers - Chiropractic Services Levittown",
    "alternateName": ["Chiropractor Levittown Services", "Servicios Quiroprácticos Levittown"],
    "url": "https://prdecompressioncenters.com/products",
    "telephone": "+1-787-261-8258",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Levittown",
      "addressRegion": "PR",
      "postalCode": "00949",
      "addressCountry": "US"
    },
    "areaServed": [
      {"@type": "City", "name": "Levittown"},
      {"@type": "City", "name": "Toa Baja"},
      {"@type": "City", "name": "Bayamón"}
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Treatment Levittown",
        "description": language === 'en' 
          ? "Professional chiropractic adjustments and spinal alignment therapy in Levittown PR"
          : "Ajustes quiroprácticos profesionales y terapia de alineación espinal en Levittown PR"
      },
      {
        "@type": "MedicalTherapy", 
        "name": "Spinal Decompression Therapy Levittown",
        "description": language === 'en'
          ? "Non-surgical treatment for herniated discs and spinal compression in Levittown Puerto Rico"
          : "Tratamiento no quirúrgico para hernias discales y compresión espinal en Levittown Puerto Rico"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy Levittown",
        "description": language === 'en'
          ? "Advanced laser treatment for pain relief and tissue healing in Levittown"
          : "Tratamiento láser avanzado para alivio del dolor y sanación de tejidos en Levittown"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Matrix Rehabilitation",
        "description": language === 'en'
          ? "Matrix therapy for muscle recovery and pain management"
          : "Terapia matrix para recuperación muscular y manejo del dolor"
      }
    ]
  };

  return (
    <MainContainer>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="chiropractic services Levittown, chiropractor services Levittown PR, spinal decompression Levittown, laser therapy Levittown Puerto Rico, chiropractic treatment Levittown, servicios quiroprácticos Levittown, herniated disc treatment Levittown, back pain treatment Levittown PR, sciatica treatment Levittown, matrix therapy Levittown"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/products"
        schema={structuredData}
      />
      
      <PageContainer>
        <Content>
          <Title>{t('services')}</Title>

          <ProductsContainer>
            {/* Chiropractic Section */}
            <AnimatedCard
              id="chiropractic"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <MedicalBadge color="#00d9ff">
                <StethoscopeIcon />
              </MedicalBadge>
              <ProductImage 
                src="/images/chiropractic-treatment-toa-baja.jpeg" 
                alt="Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico" 
              />
              <ProductTitle>{t('chiropractic')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('chiropractic')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'chiropractic'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'chiropractic'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('chiropracticDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>
                    {t('insuranceChiro')}
                    <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
                    {t('callToVerify')}
                  </InfoText>
                </InfoSection>
              </DropdownContent>
            </AnimatedCard>

            {/* Decompression Section */}
            <AnimatedCard
              id="decompression"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <MedicalBadge color="#00ffd9">
                <SpineIcon />
              </MedicalBadge>
              <ProductImage 
                src="/images/spinal-decompression-therapy-pr.png" 
                alt="Non-surgical spinal decompression therapy for herniated discs in Puerto Rico" 
              />
              <ProductTitle>{t('decompression')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('decompression')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'decompression'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'decompression'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('decompressionDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>{t('insuranceNotCovered')}</InfoText>
                </InfoSection>
              </DropdownContent>
            </AnimatedCard>

            {/* Laser Therapy Section */}
            <AnimatedCard
              id="laser"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MedicalBadge color="#ff9900">
                <LaserIcon />
              </MedicalBadge>
              <ProductImage 
                src="/images/advanced-laser-therapy-treatment.png" 
                alt="Advanced laser therapy for pain relief and healing in Puerto Rico" 
              />
              <ProductTitle>{t('laserTherapy')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('laser')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'laser'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'laser'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('laserDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>
                    {t('insuranceLaser')}
                    <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
                    {t('callToVerify')}
                  </InfoText>
                </InfoSection>
              </DropdownContent>
            </AnimatedCard>

            {/* Matrix Section */}
            <AnimatedCard
              id="matrix"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <MedicalBadge color="#00ff99">
                <MatrixIcon />
              </MedicalBadge>
              <ProductImage 
                src="/images/matrix-rehabilitation-therapy.jpeg" 
                alt="Matrix rehabilitation therapy for muscle recovery and pain management" 
              />
              <ProductTitle>{t('matrix')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('matrix')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'matrix'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'matrix'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('matrixDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>{t('insuranceNotCovered')}</InfoText>
                </InfoSection>
              </DropdownContent>
            </AnimatedCard>
          </ProductsContainer>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Products;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  text-align: center;
  padding: 40px 60px 80px 60px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    max-width: 1200px;
    padding: 40px 40px 80px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 60px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    width: 95%;
    gap: 30px;
    padding: 10px;
    max-width: 800px;
  }
`;

const AnimatedCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.13);
  border-radius: 20px;
  padding: 56px 28px 28px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(0, 217, 255, 0.25);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 24px 10px 18px 10px;
    border-radius: 15px;
  }
`;

// Medical badge for icons
const MedicalBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
  background: ${({ color }) => color || '#00d9ff'};
  color: white;
  border-radius: 18px;
  box-shadow: 0 4px 16px ${({ color }) => color || '#00d9ff'}44;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  font-size: 28px;
  z-index: 2;
  border: 2px solid #fff;
  animation: badge-pop 0.7s cubic-bezier(.7,-0.25,.6,1.5);

  @keyframes badge-pop {
    0% { transform: scale(0.6); opacity: 0; }
    70% { transform: scale(1.12); opacity: 1; }
    100% { transform: scale(1); }
  }
`;

const StethoscopeIcon = styled(FaStethoscope)`
  font-size: 28px;
  filter: drop-shadow(0 0 8px #00d9ff88);
`;
const SpineIcon = styled(FaHeartbeat)`
  font-size: 28px;
  filter: drop-shadow(0 0 8px #00ffd988);
`;
const LaserIcon = styled(FaBolt)`
  font-size: 28px;
  filter: drop-shadow(0 0 8px #ff990088);
`;

const MatrixIcon = styled(FaHeartbeat)`
  font-size: 28px;
  filter: drop-shadow(0 0 8px #00ff9988);
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const ProductTitle = styled.h2`
  font-size: 32px;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DropdownButton = styled.button`
  background: #3E517A;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(62, 81, 122, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(62, 81, 122, 0.4);
    background: #4a6191;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const ChevronIcon = styled.span`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

const DropdownContent = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  width: 100%;
`;

const InfoSection = styled.div`
  text-align: left;
  margin: 15px 0;
  padding: 0 10px;
`;

const InfoTitle = styled.h3`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PhoneLink = styled.a`
  color: #ffffff;
  text-decoration: none !important;
  font-weight: bold;
  display: inline-block;
  margin: 0 5px;
  border-bottom: none;

  &:hover, &:focus, &:active {
    text-decoration: none;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0;
    padding: 5px 0;
  }
`;
