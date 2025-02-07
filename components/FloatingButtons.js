import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";
import { useRouter } from 'next/router';

const FloatingButtons = () => {
  const router = useRouter();
  
  return (
    <ButtonContainer>
      <WhatsAppLink 
        href="https://wa.me/7872618258" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp />
      </WhatsAppLink>
      <MapButton 
        onClick={() => router.push('/locate')}
        aria-label="View our location"
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
  gap: 10px;
  z-index: 1001;
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