import React, { useState } from "react";
import styled from "styled-components";
import { FaHome, FaClock, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaChevronDown, FaBars, FaTimes, FaMapMarkedAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const router = useRouter();

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <MobileHeader>
        <MenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <MobileLogo $isOpen={isMobileMenuOpen}>PR Decompression Centers</MobileLogo>
      </MobileHeader>

      <SidebarContainer $isOpen={isMobileMenuOpen}>
        <LogoButton onClick={() => router.push('/')} aria-label="Go to homepage">
          PR Decompression Centers
        </LogoButton>

        <NavSection>
          <SidebarButton onClick={() => router.push('/')} aria-label="Go to homepage">
            <FaHome />
            <span>{t('home')}</span>
          </SidebarButton>

          <SidebarButton onClick={() => router.push('/locate')} aria-label="View location">
            <FaMapMarkedAlt />
            <span>{language === 'en' ? 'Locate Us' : 'Ubicación'}</span>
          </SidebarButton>

          <NavItemDropdown>
            <DropdownHeader 
              onClick={() => setIsHoursOpen(!isHoursOpen)}
              aria-expanded={isHoursOpen}
              aria-controls="hours-content"
            >
              <IconWrapper>
                <FaClock />
                <span>{t('officeHours')}</span>
              </IconWrapper>
              <ChevronIcon $isOpen={isHoursOpen}>
                <FaChevronDown />
              </ChevronIcon>
            </DropdownHeader>
            <DropdownContent $isOpen={isHoursOpen} id="hours-content">
              <HoursText>{t('monday')}</HoursText>
              <HoursDetail>{t('hours1')}</HoursDetail>
              <HoursDetail>{t('hours2')}</HoursDetail>
              <HoursText>{t('friday')}</HoursText>
              <HoursDetail>{t('hours1')}</HoursDetail>
            </DropdownContent>
          </NavItemDropdown>

          <ContactLinks>
            <ExternalLink 
              href="https://wa.me/7872618258" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp />
              <span>{t('whatsappUs')}</span>
            </ExternalLink>

            <ExternalLink 
              href="tel:7872618258"
              aria-label="Call us"
            >
              <FaPhoneAlt />
              <span>{t('callUs')}</span>
            </ExternalLink>

            <ExternalLink 
              href="mailto:aivinmorales@gmail.com"
              aria-label="Email us"
            >
              <FaEnvelope />
              <span>{t('emailUs')}</span>
            </ExternalLink>
          </ContactLinks>
        </NavSection>
      </SidebarContainer>

      {isMobileMenuOpen && (
        <Overlay 
          onClick={handleMobileMenuClose}
          aria-label="Close mobile menu"
        />
      )}
    </>
  );
};

export default Sidebar;

// Styled Components
const MobileHeader = styled.header`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 217, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1002;
    height: 60px;
  }
`;

const MenuButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #00d9ff;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    margin-right: 15px;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  }
`;

const MobileLogo = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    color: #00d9ff;
    margin: 0;
    opacity: ${props => props.$isOpen ? '0' : '1'};
    transition: opacity 0.3s ease;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  }
`;

const SidebarContainer = styled.nav`
  width: 260px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(0, 217, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1002;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 0, 255, 0.1));
    pointer-events: none;
  }

  @media (max-width: 768px) {
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    top: 0;
    height: 100vh;
    width: 280px;
    padding: 80px 20px 20px;
  }
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 20px 0;
  cursor: pointer;
  text-align: left;
  color: #00d9ff;
  font-size: 22px;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    margin-top: -40px;
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NavItemDropdown = styled.div`
  margin: 5px 0;
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #00d9ff;
    transform: translateX(5px);
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 0;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #00d9ff;
    transform: translateX(5px);
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 0;
  }
`;

const DropdownHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  color: white;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #00d9ff;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChevronIcon = styled.span`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

const DropdownContent = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  margin-top: ${props => props.$isOpen ? '5px' : '0'};
  padding: ${props => props.$isOpen ? '10px' : '0'};
  border: 1px solid rgba(0, 217, 255, 0.1);
  position: relative;
  z-index: 1;
`;

const HoursText = styled.div`
  color: #00d9ff;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 4px;
  padding-left: 25px;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
`;

const HoursDetail = styled.div`
  color: white;
  font-size: 14px;
  padding-left: 25px;
  opacity: 0.8;
`;

const Overlay = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 1001;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;