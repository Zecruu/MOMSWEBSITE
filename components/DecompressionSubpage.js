import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import SEOHead from './SEOHead';
import { useLanguage } from '../context/LanguageContext';
import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaStethoscope,
  FaBolt,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa';

/**
 * Shared sub-page layout for /lumbar-decompression and /cervical-decompression.
 *
 * Props:
 *   heroImage            string  - hero background image path
 *   anatomyImage         string  - illustration of the spinal region
 *   accuSpinaImage       string  - photo / render of the Accu-SPINA in use
 *   region               'lumbar' | 'cervical' - used for translation key prefixes
 *   seo: { title, description, canonical, schema }
 *   faqs: Array<{ q: string, a: string }>
 */
const DecompressionSubpage = ({
  heroImage,
  anatomyImage,
  accuSpinaImage,
  region,
  seo,
  faqs = [],
}) => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const conditions = [
    t(`${region}Cond1`),
    t(`${region}Cond2`),
    t(`${region}Cond3`),
    t(`${region}Cond4`),
    t(`${region}Cond5`),
    t(`${region}Cond6`),
  ];

  const symptoms = [
    t(`${region}Sym1`),
    t(`${region}Sym2`),
    t(`${region}Sym3`),
    t(`${region}Sym4`),
    t(`${region}Sym5`),
  ];

  const benefits = [
    t('benefitItem1'),
    t('benefitItem2'),
    t('benefitItem3'),
    t('benefitItem4'),
    t('benefitItem5'),
  ];

  const protocolSteps = [
    t('protocolStep1'),
    t('protocolStep2'),
    t('protocolStep3'),
    t('protocolStep4'),
    t('protocolStep5'),
  ];

  return (
    <Page>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalUrl={seo.canonical}
        schema={seo.schema}
      />

      {/* HERO */}
      <Hero $img={heroImage}>
        <HeroOverlay />
        <HeroInner>
          <HeroEyebrow>{t('accuSpinaTitle')}</HeroEyebrow>
          <HeroTitle>{t(`${region}Hero`)}</HeroTitle>
          <HeroSub>{t(`${region}HeroSub`)}</HeroSub>
          <HeroActions>
            <PrimaryCTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              📱 {t('bookConsult')}
            </PrimaryCTA>
            <GhostCTA href="#how-it-works">
              {t('howAccuSpinaHelps')} <FaArrowRight />
            </GhostCTA>
          </HeroActions>
        </HeroInner>
      </Hero>

      {/* CONDITIONS TREATED */}
      <Section>
        <Container>
          <SectionEyebrow><FaStethoscope /> {t('treatedConditions')}</SectionEyebrow>
          <SectionTitle>{t(`${region}WhatTreats`)}</SectionTitle>
          <ConditionGrid>
            {conditions.map((c, i) => (
              <ConditionCard key={i}>
                <FaCheckCircle />
                <span>{c}</span>
              </ConditionCard>
            ))}
          </ConditionGrid>
        </Container>
      </Section>

      {/* HOW THE ACCU-SPINA HELPS */}
      <Section id="how-it-works" $alt>
        <Container>
          <SplitGrid>
            <SplitText>
              <SectionEyebrow><FaBolt /> {t('accuSpinaTitle')}</SectionEyebrow>
              <SectionTitle>{t(`${region}HowItHelps`)}</SectionTitle>
              <Paragraph>{t(`${region}HowItHelps1`)}</Paragraph>
              <Paragraph>{t(`${region}HowItHelps2`)}</Paragraph>
              <Paragraph><strong>{t('accuSpinaOscillation')}</strong></Paragraph>
            </SplitText>
            <SplitImage>
              <img src={accuSpinaImage} alt={t('accuSpinaTitle')} loading="lazy" />
            </SplitImage>
          </SplitGrid>
        </Container>
      </Section>

      {/* SYMPTOMS CHECK */}
      <Section>
        <Container>
          <SectionEyebrow>{t('whatToExpect')}</SectionEyebrow>
          <SectionTitle>{t(`${region}SymptomsCheck`)}</SectionTitle>
          <SymptomList>
            {symptoms.map((s, i) => (
              <SymptomRow key={i}>
                <Dot />
                <span>{s}</span>
              </SymptomRow>
            ))}
          </SymptomList>
        </Container>
      </Section>

      {/* PROTOCOL */}
      <Section $alt>
        <Container>
          <SectionEyebrow><FaShieldAlt /> {t('treatmentProtocol')}</SectionEyebrow>
          <SectionTitle>{t('whatToExpect')}</SectionTitle>
          <Paragraph style={{ maxWidth: 760 }}>{t('accuSpinaProtocol')}</Paragraph>
          <StepList>
            {protocolSteps.map((step, i) => (
              <Step key={i}>
                <StepNum>{i + 1}</StepNum>
                <span>{step}</span>
              </Step>
            ))}
          </StepList>
        </Container>
      </Section>

      {/* BENEFITS */}
      <Section>
        <Container>
          <SectionEyebrow>{t('benefitsTitle')}</SectionEyebrow>
          <SectionTitle>{t('benefitsTitle')}</SectionTitle>
          <BenefitGrid>
            {benefits.map((b, i) => (
              <BenefitCard key={i}>
                <FaCheckCircle />
                <span>{b}</span>
              </BenefitCard>
            ))}
          </BenefitGrid>
        </Container>
      </Section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <Section $alt>
          <Container>
            <SectionEyebrow>{t('faqTitle')}</SectionEyebrow>
            <SectionTitle>{t('faqTitle')}</SectionTitle>
            <FAQList>
              {faqs.map((f, i) => (
                <FAQ key={i}>
                  <FAQQ onClick={() => setOpenFaq(openFaq === i ? null : i)} $open={openFaq === i}>
                    <span>{f.q}</span>
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                  </FAQQ>
                  <FAQA $open={openFaq === i}>{f.a}</FAQA>
                </FAQ>
              ))}
            </FAQList>
          </Container>
        </Section>
      )}

      {/* CTA */}
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

export default DecompressionSubpage;

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
  min-height: 70vh;
  background: ${(p) => `url(${p.$img}) center/cover no-repeat`}, #0b1220;
  display: flex;
  align-items: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(11, 18, 32, 0.92) 0%, rgba(11, 18, 32, 0.65) 55%, rgba(11, 18, 32, 0.3) 100%);
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  animation: ${fadeUp} 0.7s ease both;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
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
  max-width: 820px;
  background: linear-gradient(135deg, #ffffff 0%, #4facfe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSub = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 680px;
  margin: 0 0 32px;

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
  margin: 0 0 36px;
  max-width: 820px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 28px;
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

const ConditionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

const ConditionCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 22px 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  svg {
    color: #00f2fe;
    font-size: 22px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  span {
    font-size: 16px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.92);
  }

  &:hover {
    border-color: rgba(0, 242, 254, 0.4);
    transform: translateY(-3px);
  }
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

const SymptomList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
  max-width: 820px;
`;

const SymptomRow = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
`;

const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  margin-top: 9px;
  flex-shrink: 0;
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: grid;
  gap: 14px;
  counter-reset: step;
`;

const Step = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 18px 22px;
  border-radius: 14px;
  font-size: 16px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
`;

const StepNum = styled.span`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  color: #0b1220;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
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

  svg {
    color: #00f2fe;
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  span {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const FAQList = styled.div`
  display: grid;
  gap: 12px;
  max-width: 880px;
`;

const FAQ = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
`;

const FAQQ = styled.button`
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

  svg {
    color: #00f2fe;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
`;

const FAQA = styled.div`
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
