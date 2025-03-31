import { createGlobalStyle, StyleSheetManager } from 'styled-components';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import FloatingButtons from '../components/FloatingButtons';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

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
    <StyleSheetManager shouldComponentUpdate>
      <LanguageProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </Head>
        {/* Google Analytics tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-F4DPRG35X0`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4DPRG35X0');
          `}
        </Script>
        {/* Google Ads tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16853281502`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16853281502');
          `}
        </Script>
        {/* Event snippet for Page view conversion */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-16853281502/o2m1CPfAqKwaEN7VouQ-'});
          `}
        </Script>
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
    </StyleSheetManager>
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