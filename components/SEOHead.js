import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';

const SITE_URL = "https://prdecompressioncenters.com";

const SEOHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = `${SITE_URL}/images/non-surgical-pain-relief.JPG`,
  canonicalUrl,
  schema,
  noindex = false
}) => {
  const { language } = useLanguage();

  // Bilingual default keywords targeting all requested search terms
  const defaultKeywordsEN = "chiropractor near me, chiropractor Levittown, chiropractor Toa Baja, chiropractor Levittown PR, chiropractor Levittown Puerto Rico, chiropractor in Toa Baja, chiropractor in Levittown, best chiropractor Levittown, spinal decompression, spinal decompression therapy, decompression therapy, decompression therapy near me, spinal decompression Levittown, spinal decompression Puerto Rico, herniated disc treatment, sciatica treatment, back pain treatment, neck pain chiropractor, chiropractic care Puerto Rico, non-surgical back pain relief";

  const defaultKeywordsES = "quiropráctico cerca de mí, quiropráctico Levittown, quiropráctico Toa Baja, quiropráctico en Toa Baja, quiropráctico en Levittown, mejor quiropráctico Levittown, descompresión espinal, terapia de descompresión, descompresión espinal Levittown, descompresión espinal Puerto Rico, tratamiento hernia discal, tratamiento ciática, dolor de espalda tratamiento, dolor de cuello quiropráctico, cuidado quiropráctico Puerto Rico, alivio dolor de espalda sin cirugía, quiropráctico Bayamón, descompresión Toa Baja";

  const defaultKeywords = `${defaultKeywordsEN}, ${defaultKeywordsES}`;
  const combinedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Primary Local Business Schema for Chiropractor
  const chiropractorSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": `${SITE_URL}/#chiropractor`,
    "name": "PR Decompression Centers",
    "alternateName": [
      "PR Decompression Centers - Chiropractor Levittown",
      "Centro Quiropráctico Levittown",
      "Chiropractor Levittown PR",
      "Quiropráctico Toa Baja",
      "Centro de Descompresión Espinal PR"
    ],
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/pr-decompression-centers-logo.png`,
    "image": [
      `${SITE_URL}/images/non-surgical-pain-relief.JPG`,
      `${SITE_URL}/images/chiropractic-treatment-toa-baja.jpeg`,
      `${SITE_URL}/images/spinal-decompression-therapy-pr.png`
    ],
    "description": language === 'es'
      ? "El mejor quiropráctico en Levittown y Toa Baja, Puerto Rico. Especialistas en descompresión espinal, tratamiento de hernias discales y alivio del dolor de espalda. Sirviendo Levittown, Toa Baja, Bayamón y áreas cercanas."
      : "Best chiropractor in Levittown and Toa Baja, Puerto Rico. Specialists in spinal decompression, herniated disc treatment, and back pain relief. Serving Levittown, Toa Baja, Bayamón and surrounding areas.",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Levittown",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Puerto Rico"
        }
      },
      { "@type": "City", "name": "Toa Baja" },
      { "@type": "City", "name": "Bayamón" },
      { "@type": "City", "name": "Cataño" },
      { "@type": "City", "name": "Dorado" },
      { "@type": "City", "name": "Guaynabo" },
      { "@type": "City", "name": "San Juan" }
    ],
    "telephone": "+1-787-261-8258",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Insurance",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "16:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "11:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/centro.morales",
      "https://www.instagram.com/prdecompressioncenter/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chiropractic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spinal Decompression Therapy",
            "description": "Non-surgical spinal decompression treatment for herniated discs and back pain"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chiropractic Adjustment",
            "description": "Professional spinal adjustments and chiropractic care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laser Therapy",
            "description": "Advanced laser treatment for pain and inflammation relief"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Matrix Rehabilitation Therapy",
            "description": "Muscle recovery and pain management rehabilitation"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Patient Review"
        },
        "reviewBody": "Best chiropractor in Levittown! The spinal decompression therapy changed my life."
      }
    ]
  };

  // Merge passed schema with chiropractor schema
  let finalSchema;
  if (!schema) {
    finalSchema = chiropractorSchema;
  } else if (Array.isArray(schema)) {
    finalSchema = [...schema, chiropractorSchema];
  } else {
    finalSchema = [schema, chiropractorSchema];
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />

      {/* Robots directive - explicitly tell search engines to index */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Language Links - use proper Next.js i18n paths */}
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en${new URL(canonicalUrl).pathname === '/' ? '' : new URL(canonicalUrl).pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PR Decompression Centers" />
      <meta property="og:locale" content={language === 'es' ? 'es_PR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'es' ? 'en_US' : 'es_PR'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Array.isArray(finalSchema) ? finalSchema : finalSchema)
        }}
      />
    </Head>
  );
};

export default SEOHead;
