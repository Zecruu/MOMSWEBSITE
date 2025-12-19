import React, { useState } from 'react';
import styled from 'styled-components';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown, FaChevronUp, FaBookOpen, FaStethoscope, FaExclamationTriangle, FaHeartbeat } from 'react-icons/fa';

const DiscosHerniados = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);
  const isEnglish = language === 'en';

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const pageTitle = language === 'en' 
    ? 'Herniated Disc Treatment Puerto Rico | #1 Non-Surgical Spinal Decompression Toa Baja | PR Decompression Centers' 
    : 'Tratamiento Discos Herniados Puerto Rico | #1 Descompresión Espinal No Quirúrgica Toa Baja | PR Decompression Centers';
  
  const pageDesc = language === 'en'
    ? 'Expert herniated disc treatment in Puerto Rico using advanced spinal decompression therapy. Serving Toa Baja, Levittown, Bayamón. Learn symptoms, causes, and non-surgical solutions. Free consultation available.'
    : 'Tratamiento experto para discos herniados en Puerto Rico usando terapia avanzada de descompresión espinal. Sirviendo Toa Baja, Levittown, Bayamón. Conozca síntomas, causas y soluciones no quirúrgicas. Consulta gratuita disponible.';

  const ogTitle = language === 'en'
    ? 'Herniated Disc Treatment | PR Decompression Centers' 
    : 'Tratamiento de Discos Herniados | PR Decompression Centers';
  
  const ogDesc = language === 'en'
    ? 'Non-surgical treatment for herniated discs in Puerto Rico. Our spinal decompression therapy helps relieve pain and restore mobility. Schedule your consultation today.'
    : 'Tratamiento no quirúrgico para discos herniados en Puerto Rico. Nuestra terapia de descompresión espinal ayuda a aliviar el dolor y restaurar la movilidad. Programe su consulta hoy.';

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": isEnglish ? "Herniated Disc Treatment Puerto Rico | PR Decompression Centers" : "Tratamiento Discos Herniados Puerto Rico | PR Decompression Centers",
    "description": isEnglish ?
      "Expert herniated disc treatment in Puerto Rico using advanced spinal decompression therapy. Serving Toa Baja, Levittown, Bayamón with non-surgical solutions." :
      "Tratamiento experto para discos herniados en Puerto Rico usando terapia avanzada de descompresión espinal. Sirviendo Toa Baja, Levittown, Bayamón con soluciones no quirúrgicas.",
    "url": "https://prdecompressioncenters.com/discos-herniados",
    "inLanguage": isEnglish ? "en-US" : "es-PR",
    "keywords": isEnglish ? 
      "herniated disc treatment, spinal decompression, Puerto Rico, Toa Baja, non-surgical, back pain relief" :
      "tratamiento discos herniados, descompresión espinal, Puerto Rico, Toa Baja, no quirúrgico, alivio dolor espalda",
    "about": {
      "@type": "MedicalBusiness",
      "name": "PR Decompression Centers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "RH-16 Ave. Building, Los Dominicos",
        "addressLocality": "Toa Baja",
        "addressRegion": "PR",
        "postalCode": "00949",
        "addressCountry": "PR"
      },
      "telephone": "+1-787-261-8258"
    },
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": isEnglish ? "Herniated Disc" : "Disco Herniado",
      "description": isEnglish ?
        "A herniated disc occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior casing, causing pain and nerve compression." :
        "Un disco herniado ocurre cuando el centro blando de un disco espinal empuja a través de una grieta en la cubierta exterior más dura, causando dolor y compresión nerviosa.",
      "symptom": [
        isEnglish ? "Lower back pain" : "Dolor lumbar",
        isEnglish ? "Sciatica" : "Ciática", 
        isEnglish ? "Numbness in legs" : "Entumecimiento en piernas",
        isEnglish ? "Muscle weakness" : "Debilidad muscular"
      ],
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": isEnglish ? "Non-surgical Spinal Decompression Therapy" : "Terapia de Descompresión Espinal No Quirúrgica",
        "description": isEnglish ?
          "Advanced non-invasive treatment that gently stretches the spine to relieve pressure on herniated discs and compressed nerves, promoting natural healing." :
          "Tratamiento avanzado no invasivo que estira suavemente la columna vertebral para aliviar la presión en discos herniados y nervios comprimidos, promoviendo la curación natural."
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        ogTitle={ogTitle}
        ogDescription={ogDesc}
        schema={schema}
      />

      <ArticleContainer>
        {/* Article Header */}
        <ArticleHeader>
          <MainTitle>{t('whatIsHerniatedDisc')}</MainTitle>
          <ArticleSubtitle>
            Guía completa sobre discos herniados: síntomas, causas y tratamientos efectivos en Puerto Rico
          </ArticleSubtitle>
        </ArticleHeader>

        {/* Table of Contents */}
        <TableOfContents>
          <TOCTitle>
            <FaBookOpen />
            Contenido del Artículo
          </TOCTitle>
          <TOCList>
            <TOCItem><TOCLink href="#que-es">¿Qué es un Disco Herniado?</TOCLink></TOCItem>
            <TOCItem><TOCLink href="#sintomas">Síntomas Principales</TOCLink></TOCItem>
            <TOCItem><TOCLink href="#causas">Causas Comunes</TOCLink></TOCItem>
            <TOCItem><TOCLink href="#tratamientos">Opciones de Tratamiento</TOCLink></TOCItem>
            <TOCItem><TOCLink href="#preguntas">Preguntas Frecuentes</TOCLink></TOCItem>
          </TOCList>
        </TableOfContents>

        {/* Section 1: ¿Qué es un Disco Herniado? */}
        <Section id="que-es">
          <SectionTitle>
            <FaStethoscope />
            {t('whatIsHerniatedDisc')}
          </SectionTitle>

          <ContentRow>
            <ContentColumn>
              <SectionText>
                {t('herniatedDiscDefinition')}
              </SectionText>
              <SectionText>
                {t('discFunction')}
              </SectionText>
            </ContentColumn>
            <ContentColumn>
              <ImageContainer>
                <img
                  src="/images/Herniated Disks.PNG"
                  alt={t('herniatedDiscDiagram')}
                  loading="lazy"
                  style={{ width: '100%', maxWidth: '220px' }}
                />
                <ImageCaption>{t('diagramCaption')}</ImageCaption>
              </ImageContainer>
            </ContentColumn>
          </ContentRow>

          <SectionSubtitle>{t('differenceTitle')}</SectionSubtitle>

          <InfoBox>
            <InfoTitle>
              <FaExclamationTriangle />
              Diferencias Importantes
            </InfoTitle>
            <InfoText>
              <strong>{t('bulgingDisc')}</strong> {t('bulgingDiscDefinition')}
            </InfoText>
            <InfoText>
              <strong>{t('herniatedDiscTerm')}</strong> {t('herniatedDiscDefinitionShort')}
            </InfoText>
          </InfoBox>

          <CTAButton href="https://wa.me/17872618258">
            📱 ¡Escríbenos para sacar tu cita!
          </CTAButton>
        </Section>

        {/* Section 2: Síntomas de los Discos Herniados */}
        <Section id="sintomas">
          <SectionTitle>
            <FaHeartbeat />
            {t('symptomsTitle')}
          </SectionTitle>

          <SectionText>
            {t('symptomsIntro')}
          </SectionText>

          <SymptomsList>
            <SymptomItem>
              <SymptomIcon>🔴</SymptomIcon>
              <SymptomText>{t('symptomLowerBack')}</SymptomText>
            </SymptomItem>
            <SymptomItem>
              <SymptomIcon>🔴</SymptomIcon>
              <SymptomText>{t('symptomSciatica')}</SymptomText>
            </SymptomItem>
            <SymptomItem>
              <SymptomIcon>🔴</SymptomIcon>
              <SymptomText>{t('symptomNumbness')}</SymptomText>
            </SymptomItem>
            <SymptomItem>
              <SymptomIcon>🔴</SymptomIcon>
              <SymptomText>{t('symptomWeakness')}</SymptomText>
            </SymptomItem>
            <SymptomItem>
              <SymptomIcon>🔴</SymptomIcon>
              <SymptomText>{t('symptomMovement')}</SymptomText>
            </SymptomItem>
          </SymptomsList>

          <InfoBox>
            <InfoTitle>
              <FaExclamationTriangle />
              {t('earlySymptomsFAQ')}
            </InfoTitle>
            <InfoText>
              {t('earlySymptomsFAQAnswer1')}
            </InfoText>
            <InfoText>
              {t('earlySymptomsFAQAnswer2')}
            </InfoText>
          </InfoBox>
        </Section>

        {/* Section 3: Causas de los Discos Herniados */}
        <Section id="causas">
          <SectionTitle>
            <FaExclamationTriangle />
            {t('causesTitle')}
          </SectionTitle>

          <CausesList>
            <CauseItem>
              <CauseIcon>⚠️</CauseIcon>
              <CauseContent>
                <CauseTitle>{t('causeAging')}</CauseTitle>
                <CauseText>{t('causeAgingDesc')}</CauseText>
              </CauseContent>
            </CauseItem>
            <CauseItem>
              <CauseIcon>⚠️</CauseIcon>
              <CauseContent>
                <CauseTitle>{t('causeLifting')}</CauseTitle>
                <CauseText>{t('causeLiftingDesc')}</CauseText>
              </CauseContent>
            </CauseItem>
            <CauseItem>
              <CauseIcon>⚠️</CauseIcon>
              <CauseContent>
                <CauseTitle>{t('causeRepetitive')}</CauseTitle>
                <CauseText>{t('causeRepetitiveDesc')}</CauseText>
              </CauseContent>
            </CauseItem>
            <CauseItem>
              <CauseIcon>⚠️</CauseIcon>
              <CauseContent>
                <CauseTitle>{t('causeSedentary')}</CauseTitle>
                <CauseText>{t('causeSedentaryDesc')}</CauseText>
              </CauseContent>
            </CauseItem>
          </CausesList>
        </Section>

        {/* Section 4: Tratamientos para Discos Herniados en Puerto Rico */}
        <Section id="tratamientos">
          <SectionTitle>
            <FaStethoscope />
            {t('treatmentsTitle')}
          </SectionTitle>

          <SectionText>
            {t('treatmentsIntro')}
          </SectionText>

          <TreatmentContainer>
            <TreatmentCard>
              <TreatmentHeader>
                <TreatmentIcon>💊</TreatmentIcon>
                <TreatmentTitle>{t('conventionalTreatments')}</TreatmentTitle>
              </TreatmentHeader>
              <TreatmentList>
                <TreatmentItem>{t('medicationTreatment')}</TreatmentItem>
                <TreatmentItem>{t('physicalTherapy')}</TreatmentItem>
                <TreatmentItem>{t('steroidInjections')}</TreatmentItem>
                <TreatmentItem>{t('surgery')}</TreatmentItem>
              </TreatmentList>
            </TreatmentCard>

            <TreatmentCard highlight>
              <TreatmentHeader>
                <TreatmentIcon highlight>⭐</TreatmentIcon>
                <TreatmentTitle>{t('ourSpecialty')}</TreatmentTitle>
              </TreatmentHeader>
              <TreatmentSubtitle>{t('howItWorks')}</TreatmentSubtitle>
              <SectionText style={{ color: '#2c3e50', fontSize: '16px' }}>
                {t('decompressionExplanation')}
              </SectionText>
              <TreatmentSubtitle>{t('benefits')}</TreatmentSubtitle>
              <TreatmentList>
                <TreatmentItem>{t('benefitNoninvasive')}</TreatmentItem>
                <TreatmentItem>{t('benefitRootCause')}</TreatmentItem>
                <TreatmentItem>{t('benefitSuccessRate')}</TreatmentItem>
              </TreatmentList>
              <CTAButton href="https://wa.me/17872618258">
                📱 {t('contactUsWhatsapp')}
              </CTAButton>
            </TreatmentCard>
          </TreatmentContainer>
        </Section>

        {/* Section 5: Preguntas Frecuentes (FAQ) */}
        <Section id="preguntas">
          <SectionTitle>
            <FaBookOpen />
            {t('faqTitle')}
          </SectionTitle>

          <FAQContainer>
            <FAQ>
              <FAQQuestion onClick={() => toggleFaq(0)} active={openFaq === 0}>
                {t('faqSafety')}
                <FAQIcon active={openFaq === 0}>
                  {openFaq === 0 ? <FaChevronUp /> : <FaChevronDown />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer active={openFaq === 0}>
                {t('faqSafetyAnswer')}
              </FAQAnswer>
            </FAQ>

            <FAQ>
              <FAQQuestion onClick={() => toggleFaq(1)} active={openFaq === 1}>
                {t('faqDuration')}
                <FAQIcon active={openFaq === 1}>
                  {openFaq === 1 ? <FaChevronUp /> : <FaChevronDown />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer active={openFaq === 1}>
                {t('faqDurationAnswer')}
              </FAQAnswer>
            </FAQ>

            <FAQ>
              <FAQQuestion onClick={() => toggleFaq(2)} active={openFaq === 2}>
                {t('faqSessions')}
                <FAQIcon active={openFaq === 2}>
                  {openFaq === 2 ? <FaChevronUp /> : <FaChevronDown />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer active={openFaq === 2}>
                {t('faqSessionsAnswer')}
              </FAQAnswer>
            </FAQ>

            <FAQ>
              <FAQQuestion onClick={() => toggleFaq(3)} active={openFaq === 3}>
                {t('faqInsurance')}
                <FAQIcon active={openFaq === 3}>
                  {openFaq === 3 ? <FaChevronUp /> : <FaChevronDown />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer active={openFaq === 3}>
                {t('faqInsuranceAnswer')}
              </FAQAnswer>
            </FAQ>
          </FAQContainer>
        </Section>

        {/* Final CTA */}
        <CTAContainer>
          <CTATitle>{t('readyForRelief')}</CTATitle>
          <CTAText>{t('teamReady')}</CTAText>
          <CTAButton href="https://wa.me/17872618258">
            📱 {t('contactUsWhatsapp')}
          </CTAButton>
        </CTAContainer>
      </ArticleContainer>
    </div>
  );
};

export default DiscosHerniados;

// Main Article Container
const ArticleContainer = styled.article`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 60px;
  background: transparent;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #333;
  line-height: 1.8;

  @media (max-width: 1200px) {
    max-width: 1000px;
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    max-width: 900px;
    margin: 30px 10px 20px;
    padding: 30px 15px;
  }
`;

// Article Header
const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 3px solid #4facfe;
`;

const MainTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ArticleSubtitle = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// Table of Contents
const TableOfContents = styled.nav`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 40px;
  border-left: 5px solid #4facfe;
`;

const TOCTitle = styled.h3`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 8px;
`;

const TOCLink = styled.a`
  color: #4facfe;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #00f2fe;
    text-decoration: underline;
  }
`;

// Section Styling
const Section = styled.section`
  margin-bottom: 50px;
  scroll-margin-top: 100px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin: 30px 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

// Content Layout
const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// Image Styling
const ImageContainer = styled.div`
  text-align: center;
  margin: 30px 0;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  border: 2px solid #dee2e6;

  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ImageCaption = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-top: 15px;
  text-align: center;
  font-style: italic;
`;

// Information Boxes
const InfoBox = styled.div`
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-left: 5px solid #4facfe;
  padding: 25px;
  border-radius: 12px;
  margin: 25px 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.1);
`;

const InfoTitle = styled.h4`
  font-size: 20px;
  color: #1565c0;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.7;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Lists Styling
const SymptomsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 15px;
  padding: 25px;
  border-left: 5px solid #ff9800;
`;

const SymptomItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SymptomIcon = styled.span`
  font-size: 20px;
  margin-right: 15px;
  margin-top: 2px;
  color: #e65100;
`;

const SymptomText = styled.span`
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.6;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

// Causes Styling
const CausesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
`;

const CauseItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border-radius: 12px;
  border-left: 5px solid #f44336;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(244, 67, 54, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const CauseIcon = styled.span`
  font-size: 24px;
  margin-right: 20px;
  margin-top: 5px;
  color: #c62828;
`;

const CauseContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CauseTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
  color: #c62828;
  font-weight: 600;
`;

const CauseText = styled.p`
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.7;
  margin: 0;
`;

// Treatment Styling
const TreatmentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TreatmentCard = styled.div`
  background: ${props => props.highlight
    ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
    : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'};
  padding: 30px;
  border-radius: 15px;
  border: ${props => props.highlight ? '3px solid #4caf50' : '2px solid #bdbdbd'};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  ${props => props.highlight && `
    &::before {
      content: "⭐ RECOMENDADO";
      position: absolute;
      top: -10px;
      right: 20px;
      background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
    }
  `}
`;

const TreatmentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TreatmentIcon = styled.span`
  font-size: 28px;
  margin-right: 15px;
  color: ${props => props.highlight ? '#4caf50' : '#757575'};
`;

const TreatmentTitle = styled.h3`
  font-size: 22px;
  color: #2c3e50;
  font-weight: 600;
`;

const TreatmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const TreatmentItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.6;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
    font-size: 18px;
  }
`;

const TreatmentSubtitle = styled.h4`
  font-size: 18px;
  margin: 25px 0 15px;
  color: #2c3e50;
  font-weight: 600;
`;

// CTA Styling
const CTAButton = styled.a`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #ffffff;
  padding: 18px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 20px 0;
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(79, 172, 254, 0.4);
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }

  @media (max-width: 768px) {
    padding: 15px 25px;
    font-size: 15px;
    width: 100%;
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 40px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 20px;
  border: 2px solid #4facfe;
`;

const CTATitle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  color: #1565c0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CTAText = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
  color: #2c3e50;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// FAQ Styling
const FAQContainer = styled.div`
  margin: 40px 0;
`;

const FAQ = styled.div`
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const FAQQuestion = styled.div`
  padding: 20px 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #2c3e50;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    color: #1565c0;
  }

  ${props => props.active && `
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;

    &:hover {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
    }
  `}
`;

const FAQIcon = styled.span`
  color: inherit;
  font-size: 16px;
  transition: transform 0.3s ease;

  ${props => props.active && `
    transform: rotate(180deg);
  `}
`;

const FAQAnswer = styled.div`
  padding: ${props => props.active ? '25px' : '0 25px'};
  max-height: ${props => props.active ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.7;
  font-size: 16px;
  color: #2c3e50;
  background: white;
`;
