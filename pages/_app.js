import { createGlobalStyle } from 'styled-components';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import FloatingButtons from '../components/FloatingButtons';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(to right, #009fff, #ec2f4b);
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none !important;
  }

  a:hover, a:focus, a:active, a:visited {
    text-decoration: none !important;
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
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
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-top: 0;

  @media (max-width: 768px) {
    padding-top: 0;
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