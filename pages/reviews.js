import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SEOHead from "../components/SEOHead";

const Reviews = () => {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: "Isa Marielys Santaella Dones",
      rating: 5,
      text: language === 'en' 
        ? "I am eternally grateful because when everyone told me no, she told me yes it's possible! Thank you Aivin, you're the best!"
        : "Estoy eternamente agradecida por que cuando todos me dijeron que no, ella me dijo que si se puede! Gracias Aivin, eres la dura!",
    },
    {
      name: "José Enrique",
      rating: 5,
      text: language === 'en'
        ? "Excellent Professional with vast experience, I recommend her. A Chiropractor should be your other primary doctor..."
        : "Excelente Profesional!, con vasta experiencia la recomiendo, Un Quiropráctico deberia ser tu otro médico primario...",
    },
    {
      name: "Sandy Rosado",
      rating: 5,
      text: language === 'en'
        ? "The best. I visited many chiropractors without success. I never got better until I went to Aivin."
        : "La mejor. Visité muchos quiroprácticos y el fondo. Nunca pude mejorar hasta que fui donde Aivin.",
    }
  ];

  const pageTitle = language === 'en' 
    ? 'Patient Reviews & Testimonials Puerto Rico | Best Chiropractor Toa Baja | PR Decompression Centers' 
    : 'Reseñas y Testimonios de Pacientes Puerto Rico | Mejor Quiropráctico Toa Baja | PR Decompression Centers';
  const pageDescription = language === 'en' 
    ? 'Read authentic patient testimonials and reviews about our chiropractic care and spinal decompression therapy in Puerto Rico. See why we are the top-rated chiropractor in Toa Baja, serving Levittown and Bayamón.'
    : 'Lea testimonios auténticos y reseñas de pacientes sobre nuestro cuidado quiropráctico y terapia de descompresión espinal en Puerto Rico. Vea por qué somos el quiropráctico mejor calificado en Toa Baja, sirviendo Levittown y Bayamón.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": "https://prdecompressioncenters.com/reviews",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": reviews.map((review, index) => ({
        "@type": "Review",
        "position": index + 1,
        "itemReviewed": {
          "@type": "MedicalBusiness",
          "name": "PR Decompression Centers",
          "sameAs": "https://prdecompressioncenters.com"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewBody": review.text
      }))
    }
  };

  return (
    <MainContainer>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="patient reviews Puerto Rico, testimonials chiropractor, reseñas pacientes, testimonios quiropráctico, best chiropractor Toa Baja, mejor quiropráctico, spinal decompression reviews, patient testimonials Levittown, Bayamón chiropractic reviews"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/reviews"
        schema={structuredData}
      />
      
      <PageContainer>
        <Content>
          <Title>{language === 'en' ? 'Testimonials' : 'Testimonios'}</Title>

          <TestimonialVideoSection>
            <VideoContainer>
              <TestimonialVideo controls>
                <source src="/videos/Testimonio Decompression.mp4" type="video/mp4" />
                {language === 'en' 
                  ? 'Your browser does not support the video tag.' 
                  : 'Su navegador no soporta la etiqueta de video.'}
              </TestimonialVideo>
            </VideoContainer>
            <TestimonialDescription>
              {language === 'en' 
                ? 'Hear directly from our patients about their experience with our decompression therapy and how it has helped improve their quality of life.'
                : 'Escuche directamente de nuestros pacientes sobre su experiencia con nuestra terapia de descompresión y cómo ha ayudado a mejorar su calidad de vida.'}
            </TestimonialDescription>
          </TestimonialVideoSection>

          <SectionTitle>
            {language === 'en' ? 'What Our Patients Say' : 'Lo Que Dicen Nuestros Pacientes'}
          </SectionTitle>

          <ReviewsContainer>
            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <ReviewHeader>
                  <ReviewerInfo>
                    <ReviewerName>{review.name}</ReviewerName>
                  </ReviewerInfo>
                  <RatingContainer>
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </RatingContainer>
                </ReviewHeader>
                <ReviewContent>
                  <QuoteIcon />
                  <ReviewText>{review.text}</ReviewText>
                </ReviewContent>
              </ReviewCard>
            ))}
          </ReviewsContainer>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Reviews;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  text-align: center;
  padding: 40px 60px 80px 60px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1400px) {
    max-width: 1200px;
    padding: 40px 40px 80px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 60px 20px;
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`;

const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    gap: 20px;
    padding: 10px;
    max-width: 600px;
  }
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ReviewerInfo = styled.div`
  text-align: left;
`;

const ReviewerName = styled.h3`
  color: #000033;
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const StarIcon = styled(FaStar)`
  color: #FFD700;
  font-size: 18px;
`;

const ReviewContent = styled.div`
  position: relative;
  padding-top: 10px;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: #00d9ff;
  font-size: 24px;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
`;

const ReviewText = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  padding-left: 35px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TestimonialVideoSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const TestimonialVideo = styled.video`
  width: 100%;
  display: block;
  aspect-ratio: 16/9;
  background: black;
`;

const TestimonialDescription = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: white;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #00f2fe, #4facfe, #b465da);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;
