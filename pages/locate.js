import React from "react";
import Map from "../components/Map";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import SEOHead from '../components/SEOHead';

const Locate = () => {
  const { t, language } = useLanguage();

  const pageTitle = language === 'en' 
    ? 'Chiropractor Levittown PR Location | Best Chiropractor Near Me Levittown Puerto Rico | PR Decompression Centers' 
    : 'Ubicación Quiropráctico Levittown PR | Mejor Quiropráctico Cerca de Mí Levittown Puerto Rico | PR Decompression Centers';
  const pageDescription = language === 'en'
    ? 'Visit the #1 chiropractor in Levittown, Puerto Rico. Located in Toa Baja serving Levittown, Bayamón, Cataño, Dorado. Best spinal decompression & chiropractic care. Call 787-261-8258 for appointments.'
    : 'Visite el #1 quiropráctico en Levittown, Puerto Rico. Ubicado en Toa Baja sirviendo Levittown, Bayamón, Cataño, Dorado. Mejor descompresión espinal y cuidado quiropráctico. Llame 787-261-8258.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "name": "PR Decompression Centers - Chiropractor Levittown",
    "alternateName": ["Chiropractor Levittown PR", "Centro Quiropráctico Levittown", "Quiropráctico Levittown Puerto Rico"],
    "image": "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "url": "https://prdecompressioncenters.com",
    "telephone": "+1-787-261-8258",
    "description": language === 'en'
      ? "Best chiropractor in Levittown, Puerto Rico. Expert spinal decompression therapy & chiropractic care. #1 rated for back pain, herniated discs, and sciatica treatment in Levittown PR."
      : "El mejor quiropráctico en Levittown, Puerto Rico. Terapia de descompresión espinal y cuidado quiropráctico experto. #1 en tratamiento de dolor de espalda, hernias discales y ciática en Levittown PR.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Levittown",
      "addressRegion": "PR",
      "postalCode": "00949",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4233,
      "longitude": -66.2013
    },
    "areaServed": [
      {"@type": "City", "name": "Levittown"},
      {"@type": "City", "name": "Toa Baja"},
      {"@type": "City", "name": "Bayamón"},
      {"@type": "City", "name": "Cataño"},
      {"@type": "City", "name": "Dorado"},
      {"@type": "City", "name": "Guaynabo"},
      {"@type": "City", "name": "San Juan"}
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "16:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "11:30"
      }
    ],
    "medicalSpecialty": [
      "Chiropractic",
      "Physical Therapy",
      "Pain Management"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Adjustment Levittown",
        "alternateName": "Ajuste Quiropráctico Levittown"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Spinal Decompression Therapy Levittown",
        "alternateName": "Terapia de Descompresión Espinal Levittown"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy",
        "alternateName": "Terapia Láser"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Matrix Therapy",
        "alternateName": "Terapia Matrix"
      }
    ],
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8876712478387!2d-66.19061492412567!3d18.448931982636723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036b68d4b339d9%3A0x6c296dac41fc7f5f!2sPR%20Decompression%20Centers!5e0!3m2!1sen!2spr!4v1689127608595!5m2!1sen!2spr",
    "sameAs": [
      "https://www.facebook.com/centro.morales",
      "https://www.instagram.com/prdecompressioncenter/"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  const handleDirections = () => {
    const address = encodeURIComponent('Dra. Aivin Morales, Quiropráctica, RH 16, Av. Los Dominicos, Toa Baja, 00949');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <MainContainer>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="chiropractor Levittown location, chiropractor Levittown PR address, chiropractor near me Levittown, quiropráctico Levittown ubicación, chiropractor Levittown Puerto Rico directions, best chiropractor Levittown contact, Levittown chiropractic center, chiropractor Toa Baja, chiropractor Bayamón, spine doctor Levittown PR"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/locate"
        schema={structuredData}
      />
      
      <PageContainer>
        <Content>
          <Title>{language === 'en' ? 'Locate Us' : 'Ubicación'}</Title>
          
          <InfoSection>
            <InfoCard>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <InfoTitle>{language === 'en' ? 'Address' : 'Dirección'}</InfoTitle>
              <InfoText>RH-16 Ave. Building, Los Dominicos,</InfoText>
              <InfoText>Toa Baja, Levittown, Puerto Rico (PR)</InfoText>
              <DirectionsButton onClick={handleDirections}>
                {language === 'en' ? 'Take Me There' : 'Cómo Llegar'} <FaExternalLinkAlt />
              </DirectionsButton>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <InfoTitle>{language === 'en' ? 'Phone' : 'Teléfono'}</InfoTitle>
              <InfoLink href="tel:7872618258">787-261-8258</InfoLink>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <FaClock />
              </IconWrapper>
              <InfoTitle>{t('officeHours')}</InfoTitle>
              <InfoText>{t('monday')}-{t('thursday')}:</InfoText>
              <InfoText>{t('hours1')}</InfoText>
              <InfoText>{t('hours2')}</InfoText>
              <InfoText>{t('friday')}: {t('hours1')}</InfoText>
            </InfoCard>
          </InfoSection>

          <Map />
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Locate;

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
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 50px;
  padding: 0;

  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
    padding: 0 10px;
    max-width: 600px;
  }
`;

const InfoCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 25px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 217, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 200px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 180px;
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #b465da 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.3));
`;

const PhoneIcon = styled(FaPhone)`
  transform: scaleX(-1);
`;

const InfoTitle = styled.h3`
  color: white;
  font-size: 20px;
  margin: 0;
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

const InfoLink = styled.a`
  color: #00d9ff;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
    transform: translateY(-1px);
  }
`;

const DirectionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3E517A;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(62, 81, 122, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(62, 81, 122, 0.4);
    background: #4a6191;
  }

  svg {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
