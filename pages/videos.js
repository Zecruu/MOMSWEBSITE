import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const Videos = () => {
  const { t } = useLanguage();

  return (
    <MainContainer>
      <Sidebar />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <Title>{t('videos')}</Title>

          <VideosContainer>
            {/* Video Section 1 */}
            <VideoSection>
              <VideoTitle>Spinal Decompression Therapy</VideoTitle>
              <VideoWrapper>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tJahlOwwuGM"
                  title="Spinal Decompression Therapy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoSection>

            {/* Video Section 2 */}
            <VideoSection>
              <VideoTitle>Chiropractic Treatment</VideoTitle>
              <VideoWrapper>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iWwJeSb7Dh4"
                  title="Chiropractic Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoSection>

            {/* Video Section 3 */}
            <VideoSection>
              <VideoTitle>Centro Quiropráctico Dra. Morales</VideoTitle>
              <VideoWrapper>
                <video
                  width="100%"
                  height="100%"
                  controls
                  style={{ backgroundColor: 'black' }}
                >
                  <source src="/videos/Centro-Quiropractico-Dra.-Morales.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoWrapper>
            </VideoSection>
          </VideosContainer>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default Videos;

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
  left: -300px;

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

const VideosContainer = styled.div`
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

const VideoSection = styled.div`
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

const VideoTitle = styled.h2`
  font-size: 32px;
  color: #000033;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  background: black;
  
  iframe, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
