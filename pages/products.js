import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown } from "react-icons/fa";

const Products = () => {
  const { t } = useLanguage();
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (product) => {
    setOpenProduct(openProduct === product ? null : product);
  };

  return (
    <MainContainer>
      <Sidebar />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <Title>{t('services')}</Title>

          <ProductsContainer>
            {/* Chiropractic Section */}
            <ProductSection id="chiropractic">
              <ProductImage src="/images/Chiropractic.jpeg" alt={t('chiropractic')} />
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
              <ProductImage src="/images/Decompression.png" alt={t('decompression')} />
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
              <ProductImage src="/images/Laser.png" alt={t('laserTherapy')} />
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
              <ProductImage src="/images/Matrix.jpeg" alt={t('matrix')} />
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
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: calc(100% - 260px);
  margin-left: 260px;
  top: 0;
  z-index: 1000;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - 260px);
  margin-left: 260px;
  padding: 0;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 50px 0 250px 0;
  margin: 0 auto;
  position: relative;
  left: -200px;

  @media (max-width: 768px) {
    left: 0;
    padding: 80px 0 60px;
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
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

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
  color: #000033;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DropdownButton = styled.button`
  background: #000033;
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
  transition: background-color 0.3s ease;

  &:hover {
    background: #000066;
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
  color: #000033;
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoText = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PhoneLink = styled.a`
  color: #000033;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: #00d9ff;
  }

  @media (max-width: 768px) {
    text-decoration: underline;
  }
`;
