import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  max-width: 100%;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  & > div {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  img {
    height: 50px;
    width: auto;
    filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.3));
    transition: all 0.3s ease;

    &:hover {
      filter: drop-shadow(0 0 15px rgba(0, 217, 255, 0.5));
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none !important;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  border-bottom: none !important;
  outline: none !important;
  
  &:hover, &:focus, &:active, &:visited {
    text-decoration: none !important;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    border-bottom: none !important;
    outline: none !important;
  }

  &::before, &::after {
    display: none !important;
    content: none !important;
  }
  
  /* Additional specificity to override any other styles */
  &&& {
    text-decoration: none !important;
    border-bottom: none !important;
  }
`;

const LanguageButton = styled.button`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
    transform-origin: 1px;
    box-shadow: 0 0 5px rgba(0, 217, 255, 0.5);

    &:first-child {
      transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
      transform: ${props => props.$isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 20px;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease;
  z-index: 99;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  color: white;
  text-decoration: none !important;
  font-weight: 600;
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border-bottom: none !important;
  outline: none !important;
  
  &:hover, &:focus, &:active, &:visited {
    text-decoration: none !important;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    border-bottom: none !important;
    outline: none !important;
  }

  &::before, &::after {
    display: none !important;
    content: none !important;
  }
  
  /* Additional specificity to override any other styles */
  &&& {
    text-decoration: none !important;
    border-bottom: none !important;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <NavContainer>
        <div>
          <Link href="/" passHref>
            <Logo>
              <img 
                src="/images/pr-decompression-centers-logo.png" 
                alt="PR Decompression Centers - Specialized Spinal Treatment in Toa Baja" 
              />
            </Logo>
          </Link>
          
          <NavLinks>
            <Link href="/" passHref>
              <NavLink>{language === 'en' ? 'Home' : 'Inicio'}</NavLink>
            </Link>
            <Link href="/products" passHref>
              <NavLink>{language === 'en' ? 'Services' : 'Servicios'}</NavLink>
            </Link>
            <Link href="/reviews" passHref>
              <NavLink>{language === 'en' ? 'Reviews' : 'Reseñas'}</NavLink>
            </Link>
            <Link href="/locate" passHref>
              <NavLink>{language === 'en' ? 'Location' : 'Ubicación'}</NavLink>
            </Link>
            <LanguageButton onClick={toggleLanguage}>
              {language === 'en' ? 'Español' : 'English'}
            </LanguageButton>
          </NavLinks>
          
          <HamburgerButton 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            $isOpen={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </div>
      </NavContainer>
      
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink href="/">
          {language === 'en' ? 'Home' : 'Inicio'}
        </MobileNavLink>
        <MobileNavLink href="/products">
          {language === 'en' ? 'Services' : 'Servicios'}
        </MobileNavLink>
        <MobileNavLink href="/reviews">
          {language === 'en' ? 'Reviews' : 'Reseñas'}
        </MobileNavLink>
        <MobileNavLink href="/locate">
          {language === 'en' ? 'Location' : 'Ubicación'}
        </MobileNavLink>
        <LanguageButton onClick={toggleLanguage} style={{ width: '100%', marginTop: '10px' }}>
          {language === 'en' ? 'Español' : 'English'}
        </LanguageButton>
      </MobileMenu>
    </>
  );
};

export default Navbar;