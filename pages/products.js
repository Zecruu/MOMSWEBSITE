import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown, FaStethoscope, FaHeartbeat, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";

const Products = () => {
  const { t, language } = useLanguage();
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (product) => {
    setOpenProduct(openProduct === product ? null : product);
  };

  const pageTitle = language === 'en' 
    ? 'Chiropractic Services Puerto Rico | Spinal Decompression & Laser Therapy Toa Baja | PR Decompression Centers'
    : 'Servicios Quiroprácticos Puerto Rico | Descompresión Espinal y Terapia Láser Toa Baja | PR Decompression Centers';
  
  const pageDescription = language === 'en'
    ? 'Comprehensive chiropractic services in Puerto Rico including spinal decompression therapy, advanced laser treatment, and matrix rehabilitation. Expert care for herniated discs, back pain, and sciatica in Toa Baja.'
    : 'Servicios quiroprácticos integrales en Puerto Rico incluyendo terapia de descompresión espinal, tratamiento láser avanzado y rehabilitación matrix. Atención especializada para hernias discales, dolor de espalda y ciática en Toa Baja.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "PR Decompression Centers",
    "url": "https://prdecompressioncenters.com/products",
    "telephone": "+1-787-261-8258",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Toa Baja",
      "addressRegion": "PR",
      "postalCode": "00949",
      "addressCountry": "PR"
    },
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Treatment",
        "description": language === 'en' 
          ? "Professional chiropractic adjustments and spinal alignment therapy"
          : "Ajustes quiroprácticos profesionales y terapia de alineación espinal"
      },
      {
        "@type": "MedicalTherapy", 
        "name": "Spinal Decompression Therapy",
        "description": language === 'en'
          ? "Non-surgical treatment for herniated discs and spinal compression"
          : "Tratamiento no quirúrgico para hernias discales y compresión espinal"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy",
        "description": language === 'en'
          ? "Advanced laser treatment for pain relief and tissue healing"
          : "Tratamiento láser avanzado para alivio del dolor y sanación de tejidos"
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
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="chiropractic services Puerto Rico, servicios quiroprácticos, spinal decompression therapy, terapia descompresión espinal, laser therapy Toa Baja, matrix rehabilitation, herniated disc treatment, tratamiento hernia discal, back pain relief Puerto Rico, dolor espalda" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prdecompressioncenters.com/products" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://prdecompressioncenters.com/images/chiropractic-treatment-toa-baja.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://prdecompressioncenters.com/products" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://prdecompressioncenters.com/images/chiropractic-treatment-toa-baja.jpeg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://prdecompressioncenters.com/products" />

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
          <Title>{t('services')}</Title>

          <ProductsContainer>
            {/* Chiropractic Section */}
            <AnimatedCard
              id="chiropractic"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #00d9ff66' }}
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
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #00ffd966' }}
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
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #ff990066' }}
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
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #00ff9966' }}
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

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  text-align: center;
  padding: 120px 60px 250px 60px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    max-width: 1200px;
    padding: 120px 40px 250px 40px;
  }

  @media (max-width: 768px) {
    padding: 100px 20px 60px 20px;
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
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
  margin-bottom: 20px;

  &:hover {
    border-color: #00d9ff;
    box-shadow: 0 0 40px #00d9ff44;
    transform: translateY(-4px) scale(1.025);
  }

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
  color: #00d9ff;
  font-size: 20px;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);

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
  color: #00d9ff;
  text-decoration: none !important;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 5px;
  border-bottom: none;

  &:hover, &:focus, &:active {
    color: #000033;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
    transform: translateY(-1px);
    text-decoration: none;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0;
    padding: 5px 0;
  }
`;