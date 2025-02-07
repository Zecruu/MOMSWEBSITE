import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaClock } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from 'next/router';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <LogoButton onClick={() => router.push('/')}>
            <img src="/images/LOGO.png" alt="PR Decompression Centers Logo" />
          </LogoButton>
        </LogoSection>
        <MainContent>
          <FooterSection>
            <SectionTitle>{t('contactUs')}</SectionTitle>
            <FooterLink href="tel:7872618258" rel="noopener">787-261-8258</FooterLink>
            <FooterLink href="mailto:aivinmorales@gmail.com" rel="noopener">aivinmorales@gmail.com</FooterLink>
            <AddressButton onClick={() => router.push('/locate')}>
              <AddressText>RH-16 Ave. Building, Los Dominicos,</AddressText>
              <AddressText>Toa Baja, Levittown, Puerto Rico (PR)</AddressText>
            </AddressButton>
          </FooterSection>

          <FooterSection>
            <SectionTitle>{t('officeHours')}</SectionTitle>
            <FooterText>{t('monday')}-{t('thursday')}:</FooterText>
            <FooterText>{t('hours1')}</FooterText>
            <FooterText>{t('hours2')}</FooterText>
            <FooterText>{t('friday')} {t('hours1')}</FooterText>
            <FooterButton onClick={() => router.push('/locate')}>
              {t('directions')}
            </FooterButton>
          </FooterSection>

          <FooterSection>
            <SectionTitle>{t('services')}</SectionTitle>
            <FooterButton onClick={() => router.push('/products#chiropractic')}>
              {t('chiropractic')}
            </FooterButton>
            <FooterButton onClick={() => router.push('/products#decompression')}>
              {t('decompression')}
            </FooterButton>
            <FooterButton onClick={() => router.push('/products#laser')}>
              {t('laserTherapy')}
            </FooterButton>
            <FooterButton onClick={() => router.push('/products#matrix')}>
              {t('matrix')}
            </FooterButton>
          </FooterSection>

          <FooterSection>
            <SectionTitle>{t('quickLinks')}</SectionTitle>
            <FooterButton onClick={() => router.push('/reviews')}>
              {t('reviews')}
            </FooterButton>
            <FooterButton onClick={() => router.push('/videos')}>
              {t('videos')}
            </FooterButton>
            <FooterButton onClick={() => router.push('/locate')}>
              {t('locateUs')}
            </FooterButton>
          </FooterSection>
        </MainContent>
      </FooterContent>

      <BottomBar>
        <Copyright>©{currentYear} PR Decompression Centers</Copyright>
      </BottomBar>
    </FooterContainer>
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
    padding: 30px 15px;
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
    padding: 0;
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
  display: inline-block;
  width: fit-content;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 0;
    text-align: center;
  }
`;

const FooterButton = styled.button`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
  padding: 5px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 0;
    text-align: center;
    width: 100%;
  }
`;

const FooterText = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
  padding: 2px 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px 0;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex-shrink: 0;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: block;

  img {
    height: 80px;
    width: auto;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    
    img {
      height: 60px;
    }
  }
`;

const AddressButton = styled.button`
  background: none;
  border: none;
  padding: 5px 0;
  cursor: pointer;
  text-align: left;
  color: white;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const AddressText = styled.p`
  margin: 0;
  padding: 2px 0;
  font-size: 16px;
  line-height: 1.5;
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

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 15px 10px 0;
  }
`;

const Copyright = styled.p`
  color: #8A8F98;
  font-size: 14px;
  margin: 0;
  text-align: center;
`;