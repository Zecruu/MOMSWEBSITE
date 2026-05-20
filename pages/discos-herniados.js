import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import {
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCheckCircle,
  FaStethoscope,
  FaBolt,
  FaShieldAlt,
} from 'react-icons/fa';

const DiscosHerniados = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);
  const isEn = language === 'en';

  const pageTitle = isEn
    ? 'Herniated Disc Treatment | Accu-SPINA Decompression Puerto Rico | PR Decompression Centers'
    : 'Tratamiento Discos Herniados | Descompresión Accu-SPINA Puerto Rico | PR Decompression Centers';

  const pageDesc = isEn
    ? 'Non-surgical herniated disc treatment in Puerto Rico using the Accu-SPINA IDD Therapy system. Lumbar and cervical decompression in Levittown & Toa Baja.'
    : 'Tratamiento no quirúrgico para discos herniados en Puerto Rico con el sistema Accu-SPINA IDD. Descompresión lumbar y cervical en Levittown y Toa Baja.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: pageTitle,
    description: pageDesc,
    url: 'https://prdecompressioncenters.com/discos-herniados',
    inLanguage: isEn ? 'en-US' : 'es-PR',
    mainEntity: {
      '@type': 'MedicalCondition',
      name: isEn ? 'Herniated Disc' : 'Disco Herniado',
      possibleTreatment: {
        '@type': 'MedicalTherapy',
        name: 'Accu-SPINA IDD Therapy Spinal Decompression',
      },
    },
  };

  const faqItems = [
    { q: t('faqSafety'), a: t('faqSafetyAnswer') },
    { q: t('faqDuration'), a: t('faqDurationAnswer') },
    { q: t('faqSessions'), a: t('faqSessionsAnswer') },
    { q: t('faqInsurance'), a: t('faqInsuranceAnswer') },
  ];

  return (
    <Page>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonicalUrl="https://prdecompressioncenters.com/discos-herniados"
        schema={schema}
      />

      {/* HERO */}
      <Hero>
        <HeroOverlay />
        <HeroInner>
          <HeroEyebrow>{t('accuSpinaTitle')}</HeroEyebrow>
          <HeroTitle>{t('whatIsHerniatedDisc')}</HeroTitle>
          <HeroSub>{t('herniatedDiscSubtitle')}</HeroSub>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              📱 {t('bookConsult')}
            </PrimaryCTA>
            <GhostCTA href="#pick-area">
              {t('pickYourArea')} <FaArrowRight />
            </GhostCTA>
          </HeroActions>
        </HeroInner>
      </Hero>

      {/* WHAT IS IT */}
      <Section>
        <Container>
          <TwoCol>
            <div>
              <SectionEyebrow><FaStethoscope /> {t('whatIsHerniatedDisc')}</SectionEyebrow>
              <SectionTitle>{t('whatIsHerniatedDisc')}</SectionTitle>
              <Paragraph>{t('herniatedDiscDefinition')}</Paragraph>
              <Paragraph>{t('discFunction')}</Paragraph>
              <InlineCallout>
                <strong>{t('bulgingDisc')}</strong> {t('bulgingDiscDefinition')}
              </InlineCallout>
              <InlineCallout>
                <strong>{t('herniatedDiscTerm')}</strong> {t('herniatedDiscDefinitionShort')}
              </InlineCallout>
            </div>
            <DiagramWrap>
              <img
                src="/images/lumbar-anatomy.png"
                alt={t('herniatedDiscDiagram')}
                loading="lazy"
              />
              <DiagramCaption>{t('diagramCaption')}</DiagramCaption>
            </DiagramWrap>
          </TwoCol>
        </Container>
      </Section>

      {/* PICK YOUR AREA */}
      <Section id="pick-area" $alt>
        <Container>
          <Centered>
            <SectionEyebrow>{t('pickYourArea')}</SectionEyebrow>
            <SectionTitle style={{ textAlign: 'center', margin: '0 auto 14px' }}>
              {t('pickYourArea')}
            </SectionTitle>
            <CenteredSub>{t('pickYourAreaSubtitle')}</CenteredSub>
          </Centered>

          <AreaGrid>
            <AreaCard href="/cervical-decompression">
              <AreaIcon>
                <img src="/images/icon-cervical-area.png" alt="" aria-hidden="true" />
              </AreaIcon>
              <AreaTitle>{t('cardCervicalTitle')}</AreaTitle>
              <AreaDesc>{t('cardCervicalDesc')}</AreaDesc>
              <AreaCTA>
                {t('learnMore')} <FaArrowRight />
              </AreaCTA>
            </AreaCard>
            <AreaCard href="/lumbar-decompression">
              <AreaIcon>
                <img src="/images/icon-lumbar-area.png" alt="" aria-hidden="true" />
              </AreaIcon>
              <AreaTitle>{t('cardLumbarTitle')}</AreaTitle>
              <AreaDesc>{t('cardLumbarDesc')}</AreaDesc>
              <AreaCTA>
                {t('learnMore')} <FaArrowRight />
              </AreaCTA>
            </AreaCard>
          </AreaGrid>
        </Container>
      </Section>

      {/* ACCU-SPINA EXPLAINER */}
      <Section>
        <Container>
          <SplitGrid>
            <SplitText>
              <SectionEyebrow><FaBolt /> {t('howAccuSpinaHelps')}</SectionEyebrow>
              <SectionTitle>{t('accuSpinaTitle')}</SectionTitle>
              <Paragraph>{t('accuSpinaIntro')}</Paragraph>
              <Paragraph><strong>{t('accuSpinaOscillation')}</strong></Paragraph>
              <Paragraph>{t('accuSpinaProtocol')}</Paragraph>
            </SplitText>
            <SplitImage>
              <img
                src="/images/accu-spina-spinal-decompression-system-landscape.png"
                alt={t('accuSpinaTitle')}
                loading="lazy"
              />
            </SplitImage>
          </SplitGrid>
        </Container>
      </Section>

      {/* SYMPTOMS */}
      <Section $alt>
        <Container>
          <SectionEyebrow>{t('symptomsTitle')}</SectionEyebrow>
          <SectionTitle>{t('symptomsTitle')}</SectionTitle>
          <Paragraph style={{ maxWidth: 760 }}>{t('symptomsIntro')}</Paragraph>
          <SymptomGrid>
            <SymptomItem><FaCheckCircle /><span>{t('symptomLowerBack')}</span></SymptomItem>
            <SymptomItem><FaCheckCircle /><span>{t('symptomSciatica')}</span></SymptomItem>
            <SymptomItem><FaCheckCircle /><span>{t('symptomNumbness')}</span></SymptomItem>
            <SymptomItem><FaCheckCircle /><span>{t('symptomWeakness')}</span></SymptomItem>
            <SymptomItem><FaCheckCircle /><span>{t('symptomMovement')}</span></SymptomItem>
          </SymptomGrid>
        </Container>
      </Section>

      {/* CAUSES */}
      <Section>
        <Container>
          <SectionEyebrow>{t('causesTitle')}</SectionEyebrow>
          <SectionTitle>{t('causesTitle')}</SectionTitle>
          <CauseGrid>
            <CauseCard>
              <CauseTitle>{t('causeAging')}</CauseTitle>
              <CauseText>{t('causeAgingDesc')}</CauseText>
            </CauseCard>
            <CauseCard>
              <CauseTitle>{t('causeLifting')}</CauseTitle>
              <CauseText>{t('causeLiftingDesc')}</CauseText>
            </CauseCard>
            <CauseCard>
              <CauseTitle>{t('causeRepetitive')}</CauseTitle>
              <CauseText>{t('causeRepetitiveDesc')}</CauseText>
            </CauseCard>
            <CauseCard>
              <CauseTitle>{t('causeSedentary')}</CauseTitle>
              <CauseText>{t('causeSedentaryDesc')}</CauseText>
            </CauseCard>
          </CauseGrid>
        </Container>
      </Section>

      {/* BENEFITS */}
      <Section $alt>
        <Container>
          <SectionEyebrow><FaShieldAlt /> {t('benefitsTitle')}</SectionEyebrow>
          <SectionTitle>{t('benefitsTitle')}</SectionTitle>
          <BenefitGrid>
            <BenefitCard><FaCheckCircle /><span>{t('benefitItem1')}</span></BenefitCard>
            <BenefitCard><FaCheckCircle /><span>{t('benefitItem2')}</span></BenefitCard>
            <BenefitCard><FaCheckCircle /><span>{t('benefitItem3')}</span></BenefitCard>
            <BenefitCard><FaCheckCircle /><span>{t('benefitItem4')}</span></BenefitCard>
            <BenefitCard><FaCheckCircle /><span>{t('benefitItem5')}</span></BenefitCard>
          </BenefitGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionEyebrow>{t('faqTitle')}</SectionEyebrow>
          <SectionTitle>{t('faqTitle')}</SectionTitle>
          <FAQList>
            {faqItems.map((f, i) => (
              <FAQItem key={i}>
                <FAQButton onClick={() => setOpenFaq(openFaq === i ? null : i)} $open={openFaq === i}>
                  <span>{f.q}</span>
                  {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </FAQButton>
                <FAQAnswer $open={openFaq === i}>{f.a}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <CTASection>
        <Container>
          <CTATitle>{t('readyForRelief')}</CTATitle>
          <CTASub>{t('teamReady')}</CTASub>
          <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
            📱 {t('contactUsWhatsapp')}
          </PrimaryCTA>
        </Container>
      </CTASection>
    </Page>
  );
};

export default DiscosHerniados;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  width: 100%;
  background: #0b1220;
  color: #ffffff;
`;

const Hero = styled.section`
  position: relative;
  min-height: 60vh;
  background:
    radial-gradient(ellipse at 75% 50%, rgba(0, 159, 255, 0.18) 0%, transparent 60%),
    url('/images/hero-lumbar-decompression.png') center right/cover no-repeat,
    #0b1220;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(100deg, rgba(11, 18, 32, 0.98) 0%, rgba(11, 18, 32, 0.92) 35%, rgba(11, 18, 32, 0.65) 65%, rgba(11, 18, 32, 0.45) 100%);
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  width: 100%;
  animation: ${fadeUp} 0.7s ease both;
`;

const HeroEyebrow = styled.div`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00f2fe;
  padding: 6px 14px;
  border: 1px solid rgba(0, 242, 254, 0.4);
  border-radius: 999px;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 20px;
  max-width: 640px;
  color: #ffffff;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSub = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 560px;
  margin: 0 0 32px;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #0b1220;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(0, 242, 254, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(0, 242, 254, 0.45);
  }
`;

const GhostCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${(p) => (p.$alt ? '#0f172a' : '#0b1220')};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTASection = styled.section`
  padding: 90px 0;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #009fff 100%);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00f2fe;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 28px;
  max-width: 820px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 18px;

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const DiagramWrap = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 28px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const DiagramCaption = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 14px;
  font-style: italic;
`;

const InlineCallout = styled.p`
  background: rgba(0, 242, 254, 0.08);
  border-left: 3px solid #00f2fe;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 14px;

  strong { color: #00f2fe; }
`;

const Centered = styled.div`
  text-align: center;
  margin-bottom: 40px;

  ${SectionEyebrow} { justify-content: center; }
`;

const CenteredSub = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  max-width: 640px;
  margin: 0 auto;
`;

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

const AreaCard = styled(Link)`
  display: block;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 36px 32px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 242, 254, 0.5);
    box-shadow: 0 20px 50px rgba(0, 242, 254, 0.15);
  }
`;

const AreaIcon = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 18px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

const AreaTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px;
`;

const AreaDesc = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 22px;
`;

const AreaCTA = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #00f2fe;
`;

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const SplitText = styled.div``;

const SplitImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const SymptomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin-top: 20px;
`;

const SymptomItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  svg { color: #00f2fe; font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  span { font-size: 16px; line-height: 1.5; }
`;

const CauseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`;

const CauseCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
`;

const CauseTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #00f2fe;
  margin: 0 0 10px;
`;

const CauseText = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 22px;
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(79, 172, 254, 0.08));
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 14px;

  svg { color: #00f2fe; font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  span { font-size: 16px; line-height: 1.5; }
`;

const FAQList = styled.div`
  display: grid;
  gap: 12px;
  max-width: 880px;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
`;

const FAQButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: #ffffff;
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  svg { color: #00f2fe; flex-shrink: 0; }
`;

const FAQAnswer = styled.div`
  max-height: ${(p) => (p.$open ? '600px' : '0')};
  padding: ${(p) => (p.$open ? '0 24px 22px' : '0 24px')};
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #0b1220;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTASub = styled.p`
  font-size: 18px;
  color: rgba(11, 18, 32, 0.85);
  max-width: 600px;
  margin: 0 auto 28px;
  line-height: 1.6;
`;
