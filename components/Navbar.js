import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { FaPhone, FaMapMarkerAlt, FaClock, FaTimes, FaWhatsapp, FaChevronDown } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
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
  
  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
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
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
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
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 20px;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease;
  z-index: 999;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: block;
    background: #000000;
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

const MenuButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  background: #040f16;
  color: #f5f5f5;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  .icon {
    position: absolute;
    height: 40px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .text {
    transform: translateX(55px);
  }

  &:hover .icon {
    width: 175px;
  }

  &:hover .text {
    transition: all 0.5s;
    opacity: 0;
  }

  &:focus {
    outline: none;
  }

  &:active .icon {
    transform: scale(0.85);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PopupContent = styled.div`
  background: black;
  border-radius: 20px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  position: relative;
  border: 2px solid transparent;
  background-clip: padding-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    color: #ec2f4b;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    color: #009fff;
  }
`;

const PopupTitle = styled.h2`
  font-size: 28px;
  background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
`;

const PopupSection = styled.div`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OfficeHours = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 15px;
`;

const Day = styled.div`
  color: #f5f5f5;
  font-weight: 600;
`;

const Hours = styled.div`
  color: #f5f5f5;
  text-align: right;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #009fff 0%, #ec2f4b 100%);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #ec2f4b 0%, #009fff 100%);
  }
`;

const MobileHeaderButtons = styled.div`
  display: none;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const PageDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    margin-left: 5px;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  max-height: ${props => props.$isOpen ? '300px' : '0'};
  transition: max-height 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DropdownLink = styled.a`
  display: block;
  color: white;
  text-decoration: none !important;
  padding: 12px 16px;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none !important;
    color: white;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenuPopup = () => {
    setIsMenuPopupOpen(!isMenuPopupOpen);
  };
  
  const togglePageDropdown = () => {
    setIsPageDropdownOpen(!isPageDropdownOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPageDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <Link href="/discos-herniados" passHref>
              <NavLink>{language === 'en' ? 'Herniated Discs' : 'Discos Herniados'}</NavLink>
            </Link>
            <Link href="/reviews" passHref>
              <NavLink>{language === 'en' ? 'Reviews' : 'Testimonios'}</NavLink>
            </Link>
            <Link href="/locate" passHref>
              <NavLink>{language === 'en' ? 'Location' : 'Ubicación'}</NavLink>
            </Link>
            <LanguageButton onClick={toggleLanguage}>
              {language === 'en' ? 'Español' : 'English'}
            </LanguageButton>
            <MenuButton onClick={toggleMenuPopup}>
              <div className="icon">
                <svg height="24" width="24" fill="#f5f5f5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                </svg>
              </div>
              <span className="text">{language === 'en' ? 'Menu' : 'Menú'}</span>
            </MenuButton>
          </NavLinks>
          
          <MobileHeaderButtons>
            <DropdownContainer ref={dropdownRef}>
              <PageDropdownButton 
                onClick={togglePageDropdown}
                $isOpen={isPageDropdownOpen}
              >
                {language === 'en' ? 'Pages' : 'Páginas'}
                <FaChevronDown />
              </PageDropdownButton>
              
              <DropdownMenu $isOpen={isPageDropdownOpen}>
                <Link href="/" passHref>
                  <DropdownLink onClick={() => setIsPageDropdownOpen(false)}>
                    {language === 'en' ? 'Home' : 'Inicio'}
                  </DropdownLink>
                </Link>
                <Link href="/products" passHref>
                  <DropdownLink onClick={() => setIsPageDropdownOpen(false)}>
                    {language === 'en' ? 'Services' : 'Servicios'}
                  </DropdownLink>
                </Link>
                <Link href="/discos-herniados" passHref>
                  <DropdownLink onClick={() => setIsPageDropdownOpen(false)}>
                    {language === 'en' ? 'Herniated Discs' : 'Discos Herniados'}
                  </DropdownLink>
                </Link>
                <Link href="/reviews" passHref>
                  <DropdownLink onClick={() => setIsPageDropdownOpen(false)}>
                    {language === 'en' ? 'Reviews' : 'Testimonios'}
                  </DropdownLink>
                </Link>
                <Link href="/locate" passHref>
                  <DropdownLink onClick={() => setIsPageDropdownOpen(false)}>
                    {language === 'en' ? 'Location' : 'Ubicación'}
                  </DropdownLink>
                </Link>
              </DropdownMenu>
            </DropdownContainer>
            
            <LanguageButton onClick={toggleLanguage} style={{ height: '36px', padding: '8px 12px' }}>
              {language === 'en' ? 'Español' : 'English'}
            </LanguageButton>
          </MobileHeaderButtons>
          
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
        <Link href="/" passHref>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
            {language === 'en' ? 'Home' : 'Inicio'}
          </MobileNavLink>
        </Link>
        <Link href="/products" passHref>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
            {language === 'en' ? 'Services' : 'Servicios'}
          </MobileNavLink>
        </Link>
        <Link href="/discos-herniados" passHref>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
            {language === 'en' ? 'Herniated Discs' : 'Discos Herniados'}
          </MobileNavLink>
        </Link>
        <Link href="/reviews" passHref>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
            {language === 'en' ? 'Reviews' : 'Testimonios'}
          </MobileNavLink>
        </Link>
        <Link href="/locate" passHref>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
            {language === 'en' ? 'Location' : 'Ubicación'}
          </MobileNavLink>
        </Link>
        <LanguageButton onClick={toggleLanguage} style={{ marginTop: '20px' }}>
          {language === 'en' ? 'Español' : 'English'}
        </LanguageButton>
      </MobileMenu>

      <MenuPopup $isOpen={isMenuPopupOpen}>
        <PopupContent>
          <BackButton onClick={toggleMenuPopup}>
            <FaTimes /> {language === 'en' ? 'Back' : 'Atrás'}
          </BackButton>
          <PopupTitle>{language === 'en' ? 'Contact Information' : 'Información de Contacto'}</PopupTitle>
          
          <PopupSection>
            <SectionTitle>
              <FaClock /> {language === 'en' ? 'Office Hours' : 'Horario de Oficina'}
            </SectionTitle>
            <OfficeHours>
              <Day>{language === 'en' ? 'Monday' : 'Lunes'}</Day>
              <Hours>9:00 AM - 11:30 AM</Hours>
              
              <Day></Day>
              <Hours>1:30 PM - 4:00 PM</Hours>
              
              <Day>{language === 'en' ? 'Tuesday' : 'Martes'}</Day>
              <Hours>9:00 AM - 11:30 AM</Hours>
              
              <Day></Day>
              <Hours>1:30 PM - 4:00 PM</Hours>
              
              <Day>{language === 'en' ? 'Wednesday' : 'Miércoles'}</Day>
              <Hours>9:00 AM - 11:30 AM</Hours>
              
              <Day></Day>
              <Hours>1:30 PM - 4:00 PM</Hours>
              
              <Day>{language === 'en' ? 'Thursday' : 'Jueves'}</Day>
              <Hours>9:00 AM - 11:30 AM</Hours>
              
              <Day></Day>
              <Hours>1:30 PM - 4:00 PM</Hours>
              
              <Day>{language === 'en' ? 'Friday' : 'Viernes'}</Day>
              <Hours>9:00 AM - 11:30 AM</Hours>
              
              <Day>{language === 'en' ? 'Saturday' : 'Sábado'}</Day>
              <Hours>{language === 'en' ? 'Closed' : 'Cerrado'}</Hours>
              
              <Day>{language === 'en' ? 'Sunday' : 'Domingo'}</Day>
              <Hours>{language === 'en' ? 'Closed' : 'Cerrado'}</Hours>
            </OfficeHours>
          </PopupSection>
          
          <PopupSection>
            <SectionTitle>
              <FaPhone style={{ transform: 'scaleX(-1)' }} /> {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </SectionTitle>
            <ActionButton href="tel:7872618258">
              <FaPhone style={{ transform: 'scaleX(-1)' }} /> {language === 'en' ? 'Call Our Office' : 'Llamar a Nuestra Oficina'}
            </ActionButton>
          </PopupSection>
          
          <PopupSection>
            <SectionTitle>
              <FaMapMarkerAlt /> {language === 'en' ? 'Directions' : 'Direcciones'}
            </SectionTitle>
            <ActionButton href="https://www.google.com/maps/dir/?api=1&destination=PR+Decompression+Centers+Toa+Baja" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt /> {language === 'en' ? 'Get Directions' : 'Obtener Direcciones'}
            </ActionButton>
          </PopupSection>
        </PopupContent>
      </MenuPopup>
    </>
  );
};

export default Navbar;