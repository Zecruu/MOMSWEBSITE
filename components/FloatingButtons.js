import React from 'react';
import styled from 'styled-components';
import { FaClipboardCheck, FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";
import { useRouter } from 'next/router';
import { useLanguage } from '../context/LanguageContext';

const FloatingButtons = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const openQuestionnaire = () => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event('open-questionnaire'));
  };
  
  return (
    <ButtonContainer>
      <QuestionnaireButton 
        type="button"
        onClick={openQuestionnaire}
        aria-label={isEn ? 'Check if treatment may fit your symptoms' : 'Ver si el tratamiento puede ajustarse a tus sintomas'}
      >
        <FaClipboardCheck />
        <span>{isEn ? 'Check symptoms' : 'Revisar sintomas'}</span>
      </QuestionnaireButton>
      <WhatsAppLink 
        href="https://wa.me/7872618258" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={isEn ? 'Contact us on WhatsApp' : 'Contactanos por WhatsApp'}
      >
        <FaWhatsapp />
      </WhatsAppLink>
      <MapButton 
        onClick={() => router.push('/locate')}
        aria-label={isEn ? 'View our location' : 'Ver nuestra ubicacion'}
      >
        <FaMapMarkedAlt />
      </MapButton>
    </ButtonContainer>
  );
};

export default FloatingButtons;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  z-index: 1001;

  @media (max-width: 768px) {
    bottom: 14px;
    right: 14px;
    gap: 8px;
  }
`;

const WhatsAppLink = styled.a`
  padding: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: #25D366;
  color: white;
  
  &:hover {
    transform: scale(1.05);
    background-color: #1EBE5C;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 20px;
  }
`;

const QuestionnaireButton = styled.button`
  min-height: 46px;
  padding: 0 16px;
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 33, 56, 0.94);
  color: white;
  backdrop-filter: blur(10px);

  svg {
    color: #00f2fe;
    font-size: 18px;
    flex: 0 0 auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(15, 33, 56, 1);
    border-color: rgba(0, 242, 254, 0.44);
  }

  @media (max-width: 768px) {
    min-height: 42px;
    padding: 0 12px;
    font-size: 13px;
  }
`;

const MapButton = styled.button`
  padding: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  background-color: #4285F4;
  color: white;
  
  &:hover {
    transform: scale(1.05);
    background-color: #3367D6;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 20px;
  }
`; 
