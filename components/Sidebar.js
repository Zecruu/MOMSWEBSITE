import React, { useState } from "react";
import styled from "styled-components";
import { FaHome, FaClock, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Link from 'next/link';

const Sidebar = () => {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <MobileHeader>
        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <MobileLogo $isOpen={isMobileMenuOpen}>PR Decompression Centers</MobileLogo>
      </MobileHeader>

      <SidebarContainer $isOpen={isMobileMenuOpen}>
        <Logo $isOpen={isMobileMenuOpen}>PR Decompression Centers</Logo>
        <SidebarLink>
          <FaHome />
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            {t('home')}
          </Link>
        </SidebarLink>
        <NavItemDropdown>
          <DropdownHeader onClick={() => setIsHoursOpen(!isHoursOpen)}>
            <IconWrapper>
              <FaClock />
              {t('officeHours')}
            </IconWrapper>
            <ChevronIcon $isOpen={isHoursOpen}>
              <FaChevronDown />
            </ChevronIcon>
          </DropdownHeader>
          <DropdownContent $isOpen={isHoursOpen}>
            <HoursText>{t('monday')}</HoursText>
            <HoursDetail>{t('hours1')}</HoursDetail>
            <HoursDetail>{t('hours2')}</HoursDetail>
            <HoursText>{t('friday')}</HoursText>
            <HoursDetail>{t('hours1')}</HoursDetail>
          </DropdownContent>
        </NavItemDropdown>
        <SidebarLink>
          <FaWhatsapp />
          <a href="https://wa.me/7872618258" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            {t('whatsappUs')}
          </a>
        </SidebarLink>
        <SidebarLink>
          <FaPhoneAlt />
          <a href="tel:7872618258" style={{ color: 'inherit', textDecoration: 'none' }}>
            {t('callUs')}
          </a>
        </SidebarLink>
        <SidebarLink>
          <FaEnvelope />
          <a href="mailto:aivinmorales@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            {t('emailUs')}
          </a>
        </SidebarLink>
      </SidebarContainer>
      {isMobileMenuOpen && <Overlay onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
};

export default Sidebar;

// Styled Components
const MobileHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #181b26;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1002;
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  }
`;

const MobileLogo = styled.h1`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    color: #00d9ff;
    margin: 0;
    opacity: ${props => props.$isOpen ? '0' : '1'};
    transition: opacity 0.3s ease;
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1001;
    backdrop-filter: blur(4px);
  }
`;

const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #181b26;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1002;

  @media (max-width: 768px) {
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    top: 0;
    height: 100vh;
    width: 280px;
    padding: 80px 20px 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Logo = styled.h1`
  font-size: 22px;
  color: #00d9ff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    margin-top: -40px;
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const NavItemDropdown = styled.div`
  margin: 5px 0;
`;

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 0;
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  color: white;
  &:hover {
    color: #00d9ff;
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
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  margin-top: ${props => props.$isOpen ? '5px' : '0'};
  padding: ${props => props.$isOpen ? '10px' : '0'};
`;

const HoursText = styled.div`
  color: #00d9ff;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 4px;
  padding-left: 25px;
`;

const HoursDetail = styled.div`
  color: white;
  font-size: 14px;
  padding-left: 25px;
  opacity: 0.8;
`;