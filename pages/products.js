import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown } from "react-icons/fa";

const Products = () => {
  const { t, language } = useLanguage();
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (product) => {
    setOpenProduct(openProduct === product ? null : product);
  };

  return (
    <MainContainer>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <Title>{t('services')}</Title>

          <ProductsContainer>
            {/* Chiropractic Section */}
            <ProductSection id="chiropractic">
              <ProductImage 
                src="/images/chiropractic-treatment-toa-baja.jpeg" 
                alt="Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico" 
              />
              <ProductTitle>{t('chiropractic')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('chiropractic')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'chiropractic'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'chiropractic'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('chiropracticDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>
                    {t('insuranceChiro')}
                    <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
                    {t('callToVerify')}
                  </InfoText>
                </InfoSection>
              </DropdownContent>
            </ProductSection>

            {/* Decompression Section */}
            <ProductSection id="decompression">
              <ProductImage 
                src="/images/spinal-decompression-therapy-pr.png" 
                alt="Non-surgical spinal decompression therapy for herniated discs in Puerto Rico" 
              />
              <ProductTitle>{t('decompression')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('decompression')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'decompression'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'decompression'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('decompressionDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>{t('insuranceNotCovered')}</InfoText>
                </InfoSection>
              </DropdownContent>
            </ProductSection>

            {/* Laser Therapy Section */}
            <ProductSection id="laser">
              <ProductImage 
                src="/images/advanced-laser-therapy-treatment.png" 
                alt="Advanced laser therapy for pain relief and healing in Puerto Rico" 
              />
              <ProductTitle>{t('laserTherapy')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('laser')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'laser'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'laser'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('laserDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>
                    {t('insuranceLaser')}
                    <PhoneLink href="tel:7872618258">787-261-8258</PhoneLink>
                    {t('callToVerify')}
                  </InfoText>
                </InfoSection>
              </DropdownContent>
            </ProductSection>

            {/* Matrix Section */}
            <ProductSection id="matrix">
              <ProductImage 
                src="/images/matrix-rehabilitation-therapy.jpeg" 
                alt="Matrix rehabilitation therapy for muscle recovery and pain management" 
              />
              <ProductTitle>{t('matrix')}</ProductTitle>
              <DropdownButton onClick={() => toggleProduct('matrix')}>
                {t('moreInfo')}
                <ChevronIcon $isOpen={openProduct === 'matrix'}>
                  <FaChevronDown />
                </ChevronIcon>
              </DropdownButton>
              <DropdownContent $isOpen={openProduct === 'matrix'}>
                <InfoSection>
                  <InfoTitle>{t('whatIsThis')}</InfoTitle>
                  <InfoText>{t('matrixDesc')}</InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>{t('insuranceCover')}</InfoTitle>
                  <InfoText>{t('insuranceNotCovered')}</InfoText>
                </InfoSection>
              </DropdownContent>
            </ProductSection>
          </ProductsContainer>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Products;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 120px 0 250px 0;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 100px 0 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95%;
    gap: 30px;
    padding: 10px;
  }
`;

const ProductSection = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 15px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const ProductTitle = styled.h2`
  font-size: 32px;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DropdownButton = styled.button`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #b465da 100%);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 242, 254, 0.4);
    background: linear-gradient(135deg, #4facfe 0%, #b465da 50%, #00f2fe 100%);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const ChevronIcon = styled.span`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

const DropdownContent = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  width: 100%;
`;

const InfoSection = styled.div`
  text-align: left;
  margin: 15px 0;
  padding: 0 10px;
`;

const InfoTitle = styled.h3`
  color: #00d9ff;
  font-size: 20px;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PhoneLink = styled.a`
  color: #00d9ff;
  text-decoration: none !important;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 5px;
  border-bottom: none;

  &:hover, &:focus, &:active {
    color: #000033;
    text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
    transform: translateY(-1px);
    text-decoration: none;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0;
    padding: 5px 0;
  }
`;