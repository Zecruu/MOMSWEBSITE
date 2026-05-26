import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight, FaCalendarAlt, FaQuoteLeft, FaStar } from "react-icons/fa";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

const Reviews = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const reviews = [
    {
      name: "Isa Marielys Santaella Dones",
      rating: 5,
      text: isEn
        ? "I am eternally grateful because when everyone told me no, she told me yes, it is possible. Thank you Aivin, you are the best."
        : "Estoy eternamente agradecida porque cuando todos me dijeron que no, ella me dijo que si se puede. Gracias Aivin, eres la dura.",
    },
    {
      name: "Jose Enrique",
      rating: 5,
      text: isEn
        ? "Excellent professional with vast experience. I recommend her. A chiropractor should be your other primary doctor."
        : "Excelente profesional, con vasta experiencia. La recomiendo. Un quiropractico deberia ser tu otro medico primario.",
    },
    {
      name: "Sandy Rosado",
      rating: 5,
      text: isEn
        ? "The best. I visited many chiropractors without success. I never got better until I went to Aivin."
        : "La mejor. Visite muchos quiropracticos sin exito. Nunca pude mejorar hasta que fui donde Aivin.",
    },
  ];

  const pageTitle = isEn
    ? "Patient Reviews | Best Chiropractor Levittown & Toa Baja PR | PR Decompression Centers"
    : "Resenas de Pacientes | Quiropractico Levittown y Toa Baja PR | PR Decompression Centers";

  const pageDescription = isEn
    ? "Read real patient reviews about chiropractic care and spinal decompression therapy at PR Decompression Centers in Levittown and Toa Baja, Puerto Rico."
    : "Lea resenas reales de pacientes sobre cuidado quiropractico y terapia de descompresion espinal en PR Decompression Centers en Levittown y Toa Baja, Puerto Rico.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: "https://prdecompressioncenters.com/reviews",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: reviews.map((review, index) => ({
        "@type": "Review",
        position: index + 1,
        itemReviewed: {
          "@type": "MedicalBusiness",
          name: "PR Decompression Centers",
          sameAs: "https://prdecompressioncenters.com",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewBody: review.text,
      })),
    },
  };

  return (
    <Page>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="patient reviews Puerto Rico, testimonials chiropractor, resenas pacientes, testimonios quiropractico, spinal decompression reviews, patient testimonials Levittown"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/reviews"
        schema={structuredData}
      />

      <Hero>
        <HeroOverlay />
        <HeroInner>
          <Eyebrow>{isEn ? "Patient testimonials" : "Testimonios de pacientes"}</Eyebrow>
          <HeroTitle>{isEn ? "Real relief stories from our patients." : "Historias reales de alivio de nuestros pacientes."}</HeroTitle>
          <HeroText>
            {isEn
              ? "Hear from people who chose non-surgical care, decompression therapy, and chiropractic treatment at PR Decompression Centers."
              : "Escucha a pacientes que eligieron cuidado sin cirugia, terapia de descompresion y tratamiento quiropractico en PR Decompression Centers."}
          </HeroText>
        </HeroInner>
      </Hero>

      <Section>
        <Container>
          <FeatureGrid>
            <FeatureCopy>
              <Eyebrow>{isEn ? "Featured story" : "Historia destacada"}</Eyebrow>
              <SectionTitle>{isEn ? "Decompression therapy experience" : "Experiencia con terapia de descompresion"}</SectionTitle>
              <Lead>
                {isEn
                  ? "Patients often arrive after months or years of trying to manage pain. These testimonials show the kind of functional progress patients are looking for when they choose a non-surgical path."
                  : "Muchos pacientes llegan despues de meses o anos tratando de manejar dolor. Estos testimonios muestran el progreso funcional que buscan al escoger una alternativa sin cirugia."}
              </Lead>
            </FeatureCopy>
            <VideoFrame>
              <video controls preload="metadata">
                <source src="/videos/Testimonio Decompression.mp4" type="video/mp4" />
              </video>
            </VideoFrame>
          </FeatureGrid>
        </Container>
      </Section>

      <LightSection>
        <Container>
          <CenteredHeader>
            <Eyebrow>{isEn ? "Patient feedback" : "Opiniones de pacientes"}</Eyebrow>
            <DarkTitle>{isEn ? "What our patients say" : "Lo que dicen nuestros pacientes"}</DarkTitle>
          </CenteredHeader>

          <ReviewsGrid>
            {reviews.map((review) => (
              <ReviewCard key={review.name}>
                <QuoteIcon />
                <Stars aria-label={`${review.rating} stars`}>
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </Stars>
                <ReviewText>{review.text}</ReviewText>
                <ReviewerName>{review.name}</ReviewerName>
              </ReviewCard>
            ))}
          </ReviewsGrid>
        </Container>
      </LightSection>

      <Section>
        <Container>
          <VideoGrid>
            <VideoCard>
              <video controls preload="metadata">
                <source src="/videos/Testimonio Soluciones Sin Cirugia Dolor De Espalda.mp4" type="video/mp4" />
              </video>
              <h3>{isEn ? "Non-surgical solutions for back and neck pain" : "Soluciones sin cirugia para dolor de espalda y cuello"}</h3>
            </VideoCard>
            <CTABox>
              <Eyebrow>{isEn ? "Ready to talk?" : "Listo para hablar?"}</Eyebrow>
              <SectionTitle>{isEn ? "Start with a consultation." : "Comienza con una consulta."}</SectionTitle>
              <Lead>
                {isEn
                  ? "We will review your symptoms and explain which treatment options make sense for your condition."
                  : "Revisamos tus sintomas y explicamos que opciones de tratamiento tienen sentido para tu condicion."}
              </Lead>
              <CTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
                <FaCalendarAlt />
                {isEn ? "Schedule an appointment" : "Agendar una cita"}
                <FaArrowRight />
              </CTA>
            </CTABox>
          </VideoGrid>
        </Container>
      </Section>
    </Page>
  );
};

export default Reviews;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  width: 100%;
  background: #0b1220;
  color: #ffffff;
  overflow-x: hidden;
`;

const Hero = styled.section`
  position: relative;
  min-height: 58vh;
  display: flex;
  align-items: center;
  background: url('/images/hero-lumbar-decompression.png') center/cover no-repeat, #07111f;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 17, 31, 0.96) 0%, rgba(7, 17, 31, 0.76) 54%, rgba(7, 17, 31, 0.42) 100%),
    radial-gradient(circle at 72% 36%, rgba(0, 242, 254, 0.18), transparent 34%);
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 86px 24px 72px;
  animation: ${fadeUp} 0.65s ease both;
`;

const Eyebrow = styled.div`
  color: #00f2fe;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const HeroTitle = styled.h1`
  max-width: 860px;
  margin: 0 0 20px;
  color: #ffffff;
  font-size: clamp(42px, 7vw, 78px);
  line-height: 0.98;
  font-weight: 900;
`;

const HeroText = styled.p`
  max-width: 680px;
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 20px;
  line-height: 1.65;
`;

const Section = styled.section`
  padding: 86px 0;
  background: #0b1220;
`;

const LightSection = styled.section`
  padding: 86px 0;
  background: #f5f8fb;
  color: #0b1220;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(420px, 1.15fr);
  gap: 42px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCopy = styled.div``;

const SectionTitle = styled.h2`
  max-width: 760px;
  margin: 0 0 20px;
  color: #ffffff;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.08;
  font-weight: 900;
`;

const DarkTitle = styled(SectionTitle)`
  color: #0b1220;
`;

const Lead = styled.p`
  margin: 0 0 26px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.75;
`;

const VideoFrame = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.38);

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    background: #000;
  }
`;

const CenteredHeader = styled.div`
  text-align: center;
  margin-bottom: 34px;

  ${DarkTitle} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.article`
  position: relative;
  min-height: 310px;
  padding: 30px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dce8f2;
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.1);
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: #00c7d8;
  font-size: 28px;
  opacity: 0.28;
  margin-bottom: 18px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: #00c7d8;
  margin-bottom: 18px;
`;

const ReviewText = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 24px;
`;

const ReviewerName = styled.h3`
  color: #0b1220;
  font-size: 18px;
  font-weight: 900;
  margin: 0;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 28px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.article`
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    background: #000;
  }

  h3 {
    margin: 0;
    padding: 18px 20px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 900;
  }
`;

const CTABox = styled.div`
  border-radius: 8px;
  padding: 36px;
  background:
    linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(79, 172, 254, 0.05)),
    #07111f;
  border: 1px solid rgba(0, 242, 254, 0.18);
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #06101f;
  font-weight: 900;
  text-decoration: none;
`;
