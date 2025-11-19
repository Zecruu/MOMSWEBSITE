import '../styles/globals.css';
import { StyleSheetManager } from 'styled-components';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from '../components/FloatingButtons';
import CookieConsent from '../components/CookieConsent';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

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
        
        <div className="min-h-screen flex flex-col font-sans antialiased bg-gradient-to-r from-[#009fff] to-[#ec2f4b] text-white">
          <Navbar />
          <main className="flex-grow w-full flex flex-col min-h-screen pt-[70px]">
             {mounted && <Component {...pageProps} />}
             <Footer />
          </main>
          {mounted && <FloatingButtons />}
          {mounted && <CookieConsent />}
        </div>
      </LanguageProvider>
    </StyleSheetManager>
  );
}

export default MyApp;
