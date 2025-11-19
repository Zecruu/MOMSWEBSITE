import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  ogTitle, 
  ogDescription, 
  ogImage = "https://www.prdecompressioncenters.com/images/non-surgical-pain-relief.JPG",
  canonicalUrl,
  schema
}) => {
  const { language } = useLanguage();

  const defaultKeywords = "decompression, decompression Puerto Rico, Chiropractor, Chiropractor Puerto Rico, Chiropractor Levittown, Toa Baja, Quiropráctico, Quiropráctico Puerto Rico, Quiropráctico Levittown, Quiropráctico Toa Baja, Herniated Discs, Back Pain, Descompresión, Discos Herniados, Dolor de Espalda, Spinal Decompression, Terapia de Descompresión";
  
  const combinedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    "name": "PR Decompression Centers",
    "url": "https://www.prdecompressioncenters.com",
    "logo": "https://www.prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "image": "https://www.prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Toa Baja",
      "addressRegion": "PR",
      "postalCode": "00949",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.4425",
      "longitude": "-66.1946" 
    },
    "telephone": "+17872618258",
    "priceRange": "$$"
  };

  // Merge passed schema with organization schema
  let finalSchema = schema;
  if (!finalSchema) {
    finalSchema = organizationSchema;
  } else if (Array.isArray(finalSchema)) {
     finalSchema = [...finalSchema, organizationSchema];
  } else {
     finalSchema = [finalSchema, organizationSchema];
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />
      
      {/* Mobile Web App Capability */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
      <meta property="og:locale" content={language === 'es' ? 'es_PR' : 'en_US'} />
      
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalSchema)
        }}
      />
    </Head>
  );
};

export default SEOHead;
