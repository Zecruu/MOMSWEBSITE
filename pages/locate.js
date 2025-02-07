import React from "react";
import Map from "../components/Map";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Head from 'next/head';

const Locate = () => {
  const { t, language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "PR Decompression Centers",
    "alternateName": "Centro Quiropráctico Dra. Morales",
    "image": "/images/LOGO.png",
    "url": "https://prdecompressioncenters.com",
    "telephone": "+1-787-261-8258",
    "email": "aivinmorales@gmail.com",
    "description": {
      "@type": "Text",
      "en": "Expert spinal decompression therapy & chiropractic care in Puerto Rico. Advanced treatment for back pain, herniated discs, and sciatica.",
      "es": "Terapia de descompresión espinal y cuidado quiropráctico en Puerto Rico. Tratamiento avanzado para dolor de espalda y hernias discales."
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Toa Baja",
      "addressRegion": "Levittown",
      "postalCode": "00949",
      "addressCountry": "PR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4233,
      "longitude": -66.2013
    },
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
        "name": "Spinal Decompression Therapy",
        "alternateName": "Terapia de Descompresión Espinal"
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
      },
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Adjustment",
        "alternateName": "Ajuste Quiropráctico"
      }
    ],
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8876712478387!2d-66.19061492412567!3d18.448931982636723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036b68d4b339d9%3A0x6c296dac41fc7f5f!2sPR%20Decompression%20Centers!5e0!3m2!1sen!2spr!4v1689127608595!5m2!1sen!2spr",
    "sameAs": [
      "https://www.facebook.com/centro.morales",
      "https://www.instagram.com/prdecompressioncenter/"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 18.4233,
        "longitude": -66.2013
      },
      "geoRadius": "20000"
    }
  };

  const handleDirections = () => {
    window.open('https://www.google.com/maps/dir//18.4432748,-66.1755745/@18.4432164,-66.2168675,13z', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
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
              <PhoneIcon />
            </IconWrapper>
            <InfoTitle>{language === 'en' ? 'Phone' : 'Teléfono'}</InfoTitle>
            <InfoLink href="tel:7872618258">787-261-8258</InfoLink>
          </InfoCard>

          <InfoCard>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <InfoTitle>Email</InfoTitle>
            <InfoLink href="mailto:aivinmorales@gmail.com">
              aivinmorales@gmail.com
            </InfoLink>
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
    </>
  );
};

export default Locate;

// Styled Components
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
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

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  color: #00d9ff;
  margin-bottom: 10px;
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
  color: white;
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

const InfoLink = styled.a`
  color: #00d9ff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const DirectionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #00d9ff;
  color: #000033;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;

  &:hover {
    background: white;
    transform: translateY(-2px);
  }

  svg {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`; 