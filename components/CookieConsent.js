import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { hasConsent, acceptCookies, declineCookies } from '../utils/cookies';
import { useRouter } from 'next/router';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t, language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = hasConsent();
    if (consentStatus === null) {
      // No consent decision made yet, show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    acceptCookies();
    setShowBanner(false);
  };

  const handleDecline = () => {
    declineCookies();
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    router.push('/cookie-policy');
  };

  if (!showBanner) return null;

  return (
    <CookieBanner>
      <CookieContent>
        <CookieIcon>🍪</CookieIcon>
        <CookieText>
          <CookieTitle>
            {language === 'en' ? 'We use cookies' : 'Usamos cookies'}
          </CookieTitle>
          <CookieDescription>
            {language === 'en' 
              ? 'We use cookies to improve your experience on our website and to analyze traffic. By continuing to use our site, you agree to our use of cookies.'
              : 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web y analizar el tráfico. Al continuar usando nuestro sitio, acepta nuestro uso de cookies.'
            }
          </CookieDescription>
        </CookieText>
        <CookieActions>
          <LearnMoreButton onClick={handleLearnMore}>
            {language === 'en' ? 'Learn More' : 'Más Información'}
          </LearnMoreButton>
          <DeclineButton onClick={handleDecline}>
            {language === 'en' ? 'Decline' : 'Rechazar'}
          </DeclineButton>
          <AcceptButton onClick={handleAccept}>
            {language === 'en' ? 'Accept' : 'Aceptar'}
          </AcceptButton>
        </CookieActions>
      </CookieContent>
    </CookieBanner>
  );
};

export default CookieConsent;

const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 217, 255, 0.3);
  padding: 20px;
  z-index: 10000;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.5s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CookieContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const CookieIcon = styled.div`
  font-size: 32px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CookieText = styled.div`
  flex: 1;
  color: white;
`;

const CookieTitle = styled.h3`
  color: #00d9ff;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CookieDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CookieActions = styled.div`
  display: flex;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`;

const BaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 12px 20px;
    width: 100%;
  }
`;

const AcceptButton = styled(BaseButton)`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 242, 254, 0.4);
  }
`;

const DeclineButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const LearnMoreButton = styled(BaseButton)`
  background: transparent;
  color: #00d9ff;
  border: 1px solid #00d9ff;

  &:hover {
    background: rgba(0, 217, 255, 0.1);
    transform: translateY(-2px);
  }
`;
