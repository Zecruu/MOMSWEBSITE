import styled from "styled-components";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Link from 'next/link';

const Navbar = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <NavContainer>
      <NavLinks>
        <Link href="/" passHref legacyBehavior>
          <NavItem>{t('home')}</NavItem>
        </Link>
        <Link href="/products" passHref legacyBehavior>
          <NavItem>{t('products')}</NavItem>
        </Link>
        <Link href="/reviews" passHref legacyBehavior>
          <NavItem>{t('reviews')}</NavItem>
        </Link>
        <Link href="/videos" passHref legacyBehavior>
          <NavItem>{t('videos')}</NavItem>
        </Link>
      </NavLinks>
      <RightSection>
        <LanguageButton onClick={toggleLanguage}>{t('languageButton')}</LanguageButton>
        <IconContainer>
          <a href="https://www.facebook.com/centro.morales" target="_blank" style={{ color: 'inherit' }}>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/prdecompressioncenter/" target="_blank" style={{ color: 'inherit' }}>
            <FaInstagram />
          </a>
          <a href="https://wa.me/7872618258" target="_blank" style={{ color: 'inherit' }}>
            <FaWhatsapp />
          </a>
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

const NavItem = styled.a`
  color: #00d9ff;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: white;
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
  background: transparent;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #00d9ff;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
    border-width: 1px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;

  a {
    color: #00d9ff;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }

  svg {
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 18px;
    }
  }
`;