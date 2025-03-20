import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/non-surgical-pain-relief.JPG');
  background-size: cover;
  background-position: center;
  padding: 120px 20px;
  text-align: center;
  color: white;
  margin-top: 70px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroCTA = styled.a`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

const Section = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  border-radius: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SectionText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.6;
  color: white;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ImageCaption = styled.p`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  text-align: center;
`;

const SymptomsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SymptomItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SymptomIcon = styled.span`
  font-size: 18px;
  margin-right: 15px;
`;

const SymptomText = styled.span`
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const FAQBox = styled.div`
  background-color: rgba(247, 247, 247, 0.1);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FAQTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: white;
`;

const CausesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CauseItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const CauseIcon = styled.span`
  font-size: 20px;
  margin-right: 15px;
  margin-top: 2px;
`;

const CauseContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CauseTitle = styled.h4`
  font-size: 17px;
  margin-bottom: 5px;
  color: white;
`;

const CauseText = styled.p`
  font-size: 15px;
  color: white;
  line-height: 1.5;
`;

const TreatmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TreatmentCard = styled.div`
  background-color: ${props => props.highlight ? '#f0f9ff' : '#ffffff'};
  padding: 30px;
  border-radius: 15px;
  margin: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  border: ${props => props.highlight ? '2px solid #4facfe' : 'none'};

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const TreatmentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TreatmentIcon = styled.span`
  font-size: 24px;
  margin-right: 15px;
`;

const TreatmentTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const TreatmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TreatmentItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  font-size: 15px;
  color: #444;
  line-height: 1.5;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4facfe;
    font-weight: bold;
  }
`;

const TreatmentSubtitle = styled.h4`
  font-size: 17px;
  margin: 20px 0 10px;
  color: #333;
`;

const CTAButton = styled.a`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  margin-top: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    width: 100%;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQ = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FAQQuestion = styled.div`
  padding: 15px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: white;
  border-bottom: ${props => props.active ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
`;

const FAQIcon = styled.span`
  color: white;
`;

const FAQAnswer = styled.div`
  padding: ${props => props.active ? '15px 20px' : '0 20px'};
  max-height: ${props => props.active ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.6;
  font-size: 15px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(79, 172, 254, 0.1) 100%);
  padding: 30px;
  border-radius: 15px;
`;

const CTATitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CTAText = styled.p`
  font-size: 16px;
  margin-bottom: 25px;
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const DiscosHerniados = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const pageTitle = language === 'en' 
    ? 'Herniated Discs in Puerto Rico | Causes, Symptoms and Treatment' 
    : 'Discos Herniados en Puerto Rico | Causas, Síntomas y Tratamiento';
  
  const pageDesc = language === 'en'
    ? 'Learn about herniated discs, their symptoms and how spinal decompression can relieve pain in PR.'
    : 'Aprende sobre discos herniados, sus síntomas y cómo la descompresión espinal puede aliviar el dolor en PR.';

  const ogTitle = language === 'en'
    ? 'Herniated Discs | PR Decompression Centers'
    : 'Discos Herniados | PR Decompression Centers';
  
  const ogDesc = language === 'en'
    ? 'Discover how we treat herniated discs with spinal decompression in Puerto Rico.'
    : 'Descubre cómo tratamos discos herniados con descompresión espinal en Puerto Rico.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDesc} />
        <meta property="og:image" content="https://www.prdecompressioncenters.com/images/disc-treatment.jpg" />
        <meta property="og:url" content="https://www.prdecompressioncenters.com/discos-herniados" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.prdecompressioncenters.com/discos-herniados" />
        {/* Schema Markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "about": {
                "@type": "MedicalCondition",
                "name": language === 'en' ? "Herniated Disc" : "Disco Herniado",
                "alternateName": language === 'en' ? "Slipped Disc" : "Hernia Discal",
                "description": language === 'en' 
                  ? "A condition where the inner material of an intervertebral disc protrudes outward, causing pain and other symptoms." 
                  : "Una condición donde el material interior de un disco intervertebral se desplaza hacia afuera, causando dolor y otros síntomas.",
                "possibleTreatment": {
                  "@type": "MedicalTherapy",
                  "name": language === 'en' ? "Spinal Decompression Therapy" : "Terapia de Descompresión Espinal",
                  "description": language === 'en' 
                    ? "Non-surgical treatment that relieves pressure on herniated discs." 
                    : "Tratamiento no quirúrgico que alivia la presión en los discos herniados."
                }
              },
              "specialty": {
                "@type": "MedicalSpecialty",
                "name": language === 'en' ? "Chiropractic" : "Quiropráctica"
              },
              "audience": {
                "@type": "MedicalAudience",
                "audienceType": language === 'en' 
                  ? "Patients with back pain and herniated discs" 
                  : "Pacientes con dolor de espalda y discos herniados"
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": t('faqSafety'),
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": t('faqSafetyAnswer')
                    }
                  },
                  {
                    "@type": "Question",
                    "name": t('faqDuration'),
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": t('faqDurationAnswer')
                    }
                  },
                  {
                    "@type": "Question",
                    "name": t('faqSessions'),
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": t('faqSessionsAnswer')
                    }
                  },
                  {
                    "@type": "Question",
                    "name": t('faqInsurance'),
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": t('faqInsuranceAnswer')
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>{t('herniatedDiscHero')}</HeroTitle>
            <HeroSubtitle>{t('herniatedDiscSubtitle')}</HeroSubtitle>
            <HeroCTA href="https://wa.me/17872618258">
              📱 {t('contactUsWhatsapp')}
            </HeroCTA>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <div style={{ marginTop: '50px' }}></div>

      {/* Section 1: ¿Qué es un Disco Herniado? */}
      <Section>
        <SectionTitle>{t('whatIsHerniatedDisc')}</SectionTitle>
        <ContentRow>
          <ContentColumn>
            <SectionText>
              {t('herniatedDiscDefinition')}
            </SectionText>
            <SectionText>
              {t('discFunction')}
            </SectionText>
            <SectionSubtitle>{t('differenceTitle')}</SectionSubtitle>
            <SectionText>
              <strong>{t('bulgingDisc')}</strong> {t('bulgingDiscDefinition')}
            </SectionText>
            <SectionText>
              <strong>{t('herniatedDiscTerm')}</strong> {t('herniatedDiscDefinitionShort')}
            </SectionText>
          </ContentColumn>
          <ContentColumn>
            <ImageContainer>
              <img 
                src="/images/spinal-decompression-therapy-pr.png" 
                alt={t('herniatedDiscDiagram')}
                loading="lazy"
              />
              <ImageCaption>{t('diagramCaption')}</ImageCaption>
            </ImageContainer>
          </ContentColumn>
        </ContentRow>
      </Section>

      {/* Section 2: Síntomas de los Discos Herniados */}
      <Section>
        <SectionTitle>{t('symptomsTitle')}</SectionTitle>
        <ContentRow>
          <ContentColumn>
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
          </ContentColumn>
          <ContentColumn>
            <FAQBox>
              <FAQTitle>{t('earlySymptomsFAQ')}</FAQTitle>
              <SectionText>
                {t('earlySymptomsFAQAnswer1')}
              </SectionText>
              <SectionText>
                {t('earlySymptomsFAQAnswer2')}
              </SectionText>
            </FAQBox>
          </ContentColumn>
        </ContentRow>
      </Section>

      {/* Section 3: Causas de los Discos Herniados */}
      <Section>
        <SectionTitle>{t('causesTitle')}</SectionTitle>
        <ContentRow>
          <ContentColumn>
            <ImageContainer>
              <img 
                src="/images/Herniated Disks.PNG" 
                alt={t('causesImage')}
                loading="lazy"
                style={{ width: '60%', maxWidth: '300px', borderRadius: '8px', margin: '0 auto', display: 'block' }}
              />
            </ImageContainer>
          </ContentColumn>
          <ContentColumn>
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
          </ContentColumn>
        </ContentRow>
      </Section>

      {/* Section 4: Tratamientos para Discos Herniados en Puerto Rico */}
      <Section>
        <SectionTitle style={{ color: '#333' }}>{t('treatmentsTitle')}</SectionTitle>
        <SectionText style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 30px', color: '#444' }}>
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
              <TreatmentIcon>⭐</TreatmentIcon>
              <TreatmentTitle>{t('ourSpecialty')}</TreatmentTitle>
            </TreatmentHeader>
            <TreatmentSubtitle>{t('howItWorks')}</TreatmentSubtitle>
            <SectionText style={{ color: '#444' }}>
              {t('decompressionExplanation')}
            </SectionText>
            <TreatmentSubtitle>{t('benefits')}</TreatmentSubtitle>
            <TreatmentList>
              <TreatmentItem>{t('benefitNoninvasive')}</TreatmentItem>
              <TreatmentItem>{t('benefitFastRelief')}</TreatmentItem>
              <TreatmentItem>{t('benefitNoRecovery')}</TreatmentItem>
              <TreatmentItem>{t('benefitRootCause')}</TreatmentItem>
              <TreatmentItem>{t('benefitSuccessRate')}</TreatmentItem>
            </TreatmentList>
            <CTAButton href="https://wa.me/17872618258">
              📱 {t('contactUsWhatsapp')}
            </CTAButton>
          </TreatmentCard>
        </TreatmentContainer>
      </Section>

      {/* Section 6: Preguntas Frecuentes (FAQ) */}
      <Section>
        <SectionTitle>{t('faqTitle')}</SectionTitle>
        <FAQContainer>
          <FAQ>
            <FAQQuestion onClick={() => toggleFaq(0)} active={openFaq === 0}>
              {t('faqSafety')}
              <FAQIcon>{openFaq === 0 ? <FaChevronUp /> : <FaChevronDown />}</FAQIcon>
            </FAQQuestion>
            <FAQAnswer active={openFaq === 0}>
              {t('faqSafetyAnswer')}
            </FAQAnswer>
          </FAQ>
          
          <FAQ>
            <FAQQuestion onClick={() => toggleFaq(1)} active={openFaq === 1}>
              {t('faqDuration')}
              <FAQIcon>{openFaq === 1 ? <FaChevronUp /> : <FaChevronDown />}</FAQIcon>
            </FAQQuestion>
            <FAQAnswer active={openFaq === 1}>
              {t('faqDurationAnswer')}
            </FAQAnswer>
          </FAQ>
          
          <FAQ>
            <FAQQuestion onClick={() => toggleFaq(2)} active={openFaq === 2}>
              {t('faqSessions')}
              <FAQIcon>{openFaq === 2 ? <FaChevronUp /> : <FaChevronDown />}</FAQIcon>
            </FAQQuestion>
            <FAQAnswer active={openFaq === 2}>
              {t('faqSessionsAnswer')}
            </FAQAnswer>
          </FAQ>
          
          <FAQ>
            <FAQQuestion onClick={() => toggleFaq(3)} active={openFaq === 3}>
              {t('faqInsurance')}
              <FAQIcon>{openFaq === 3 ? <FaChevronUp /> : <FaChevronDown />}</FAQIcon>
            </FAQQuestion>
            <FAQAnswer active={openFaq === 3}>
              {t('faqInsuranceAnswer')}
            </FAQAnswer>
          </FAQ>
        </FAQContainer>
        
        <CTAContainer>
          <CTATitle>{t('readyForRelief')}</CTATitle>
          <CTAText>{t('teamReady')}</CTAText>
          <CTAButton href="https://wa.me/17872618258" style={{ margin: '20px auto' }}>
            📱 {t('contactUsWhatsapp')}
          </CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};

export default DiscosHerniados;
