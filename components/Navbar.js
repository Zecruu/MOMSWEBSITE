import styled from "styled-components";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from 'next/router';

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const router = useRouter();

  return (
    <NavContainer>
      <NavLinks>
        <NavButton onClick={() => router.push('/')}>
          {t('home')}
        </NavButton>
        <NavButton onClick={() => router.push('/products')}>
          {t('products')}
        </NavButton>
        <NavButton onClick={() => router.push('/reviews')}>
          {t('reviews')}
        </NavButton>
        <NavButton onClick={() => router.push('/videos')}>
          {t('videos')}
        </NavButton>
        <NavButton onClick={() => router.push('/locate')}>
          {language === 'en' ? 'Locate Us' : 'Ubicación'}
        </NavButton>
      </NavLinks>
      <RightSection>
        <LanguageButton onClick={toggleLanguage}>{t('languageButton')}</LanguageButton>
        <IconContainer>
          <SocialLink 
            href="https://www.facebook.com/centro.morales" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <FaFacebook />
          </SocialLink>
          <SocialLink 
            href="https://www.instagram.com/prdecompressioncenter/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink 
            href="https://wa.me/7872618258" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp />
          </SocialLink>
        </IconContainer>
      </RightSection>
    </NavContainer>
  );
};

export default Navbar;

// Styled Components
const NavContainer = styled.nav`
  width: 80%;
  max-width: 1400px;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(24, 27, 38, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  margin-left: 130px;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    margin-left: 0;
    padding: 12px 15px;
    top: 80px;
    border-radius: 15px;
    left: 50%;
    transform: translateX(-50%);
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 5px;
    width: 100%;
    justify-content: center;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);

  &:hover {
    text-shadow: 0 0 15px rgba(0, 217, 255, 0.5);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    width: 100%;
    justify-content: center;
    padding-top: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const LanguageButton = styled.button`
  background: #3E517A;
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(62, 81, 122, 0.3);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(62, 81, 122, 0.4);
    background: #4a6191;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    svg {
      font-size: 18px;
    }
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
  
  &:hover {
    text-shadow: 0 0 15px rgba(0, 217, 255, 0.5);
    transform: scale(1.1);
  }
`;