import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaClock } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <LogoSection>
            <img src="/images/LOGO.png" alt="Logo" />
          </LogoSection>
          <MainContent>
            <FooterSection>
              <SectionTitle>{t('contactUs')}</SectionTitle>
              <FooterLink href="tel:7872618258">787-261-8258</FooterLink>
              <FooterLink href="mailto:aivinmorales@gmail.com">aivinmorales@gmail.com</FooterLink>
              <FooterText>RH-16 Ave. Building, Los Dominicos,</FooterText>
              <FooterText>Toa Baja, Levittown, Puerto Rico (PR)</FooterText>
            </FooterSection>

            <FooterSection>
              <SectionTitle>{t('officeHours')}</SectionTitle>
              <FooterText>{t('monday')}-{t('thursday')}:</FooterText>
              <FooterText>{t('hours1')}</FooterText>
              <FooterText>{t('hours2')}</FooterText>
              <FooterText>{t('friday')} {t('hours1')}</FooterText>
            </FooterSection>

            <FooterSection>
              <SectionTitle>{t('services')}</SectionTitle>
              <FooterLink href="/chiropractic">{t('chiropractic')}</FooterLink>
              <FooterLink href="/decompression">{t('decompression')}</FooterLink>
              <FooterLink href="/laser-therapy">{t('laserTherapy')}</FooterLink>
              <FooterLink href="/matrix">{t('matrix')}</FooterLink>
            </FooterSection>
          </MainContent>
        </FooterContent>

        <BottomBar>
          <Copyright>©{currentYear} PR Decompression Centers</Copyright>
        </BottomBar>
      </FooterContainer>

      <WhatsAppButton href="https://wa.me/7872618258" target="_blank">
        <FaWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: calc(100% - 300px);
  max-width: 1400px;
  margin: 0;
  margin-left: 150px;
  background: rgba(24, 27, 38, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  margin-bottom: 30px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 30px 0;
    border-radius: 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  gap: 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 80px;
  flex: 1;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    align-items: stretch;
    padding: 0 20px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    gap: 12px;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const SectionTitle = styled.h3`
  color: #8A8F98;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
  padding: 5px 0;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 0;
  }
`;

const FooterText = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
  padding: 2px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 25px;
    margin-top: 5px;
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 22px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 24px;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px auto 0;
  padding: 20px 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
`;

const Copyright = styled.p`
  color: #8A8F98;
  font-size: 14px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: flex-start;
  
  img {
    width: 200px;
    height: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    
    img {
      width: 150px;
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 1001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #1EBE5C;
    transform: scale(1.05);
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 12px;
    font-size: 20px;
  }
`;