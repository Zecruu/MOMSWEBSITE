import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';

const SEOHead = ({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage = "https://www.prdecompressioncenters.com/images/non-surgical-pain-relief.JPG",
  canonicalUrl,
  schema
}) => {
  const { language } = useLanguage();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Mobile Web App Capability */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="PR Decompression Centers" />
      <meta name="application-name" content="PR Decompression Centers" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/images/pr-decompression-centers-logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/pr-decompression-centers-logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/pr-decompression-centers-logo.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#4facfe" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PR Decompression Centers" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}?lang=en`} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Schema Markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead; 