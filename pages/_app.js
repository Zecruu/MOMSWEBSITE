import { createGlobalStyle } from 'styled-components';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styled from "styled-components";
import FloatingButtons from '../components/FloatingButtons';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1B1F3B;
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <LanguageProvider>
      <GlobalStyle />
      <AppContainer>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MainContent>
          <PageWrapper>
            {mounted && <Component {...pageProps} />}
          </PageWrapper>
          <Footer />
        </MainContent>
        {mounted && <FloatingButtons />}
      </AppContainer>
    </LanguageProvider>
  );
}

export default MyApp;

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SidebarWrapper = styled.div`
  width: 260px;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1001;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: fixed;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 260px;
  width: calc(100% - 260px);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-top: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 60px;
    padding-top: 80px;
  }
`;

const PageWrapper = styled.div`
  padding: 20px;
  flex: 1 0 auto;
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: calc(100% - 260px);
  margin-left: 260px;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    top: 60px;
    padding: 0 15px;
  }
`; 