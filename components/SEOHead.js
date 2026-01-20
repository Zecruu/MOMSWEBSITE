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

  const defaultKeywords = "chiropractor Levittown, chiropractor Levittown PR, chiropractor Levittown Puerto Rico, quiropráctico Levittown, best chiropractor Levittown, Levittown chiropractor, chiropractor near me Levittown, chiropractic Levittown PR, spine doctor Levittown, back pain Levittown, chiropractor Toa Baja, quiropráctico Toa Baja, chiropractor Puerto Rico, quiropráctico Puerto Rico, spinal decompression Levittown, spinal decompression Puerto Rico, herniated disc treatment Levittown, sciatica treatment Levittown, back pain treatment Levittown PR, neck pain chiropractor Levittown, decompression therapy Puerto Rico, discos herniados Levittown, dolor de espalda Levittown, ciática tratamiento Levittown";
  
  const combinedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Primary Local Business Schema for Chiropractor
  const chiropractorSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": "https://www.prdecompressioncenters.com/#chiropractor",
    "name": "PR Decompression Centers - Chiropractor Levittown",
    "alternateName": ["PR Decompression Centers", "Centro Quiropráctico Levittown", "Chiropractor Levittown PR"],
    "url": "https://www.prdecompressioncenters.com",
    "logo": "https://www.prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "image": [
      "https://www.prdecompressioncenters.com/images/non-surgical-pain-relief.JPG",
      "https://www.prdecompressioncenters.com/images/chiropractic-treatment-toa-baja.jpeg",
      "https://www.prdecompressioncenters.com/images/spinal-decompression-therapy-pr.png"
    ],
    "description": language === 'es' 
      ? "El mejor quiropráctico en Levittown, Puerto Rico. Especialistas en descompresión espinal, tratamiento de hernias discales y alivio del dolor de espalda. Sirviendo Levittown, Toa Baja, Bayamón y áreas cercanas."
      : "Best chiropractor in Levittown, Puerto Rico. Specialists in spinal decompression, herniated disc treatment, and back pain relief. Serving Levittown, Toa Baja, Bayamón and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RH-16 Ave. Building, Los Dominicos",
      "addressLocality": "Levittown",
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
      {
        "@type": "City",
        "name": "Toa Baja"
      },
      {
        "@type": "City",
        "name": "Bayamón"
      },
      {
        "@type": "City",
        "name": "Cataño"
      },
      {
        "@type": "City",
        "name": "Dorado"
      },
      {
        "@type": "City",
        "name": "Guaynabo"
      },
      {
        "@type": "City",
        "name": "San Juan"
      }
    ],
    "telephone": "+1-787-261-8258",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Insurance",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/prdecompressioncenters",
      "https://www.instagram.com/prdecompressioncenters"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chiropractic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chiropractic Adjustment",
            "description": "Professional spinal adjustments for pain relief"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spinal Decompression Therapy",
            "description": "Non-surgical treatment for herniated discs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laser Therapy",
            "description": "Advanced laser treatment for pain and inflammation"
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
  let finalSchema = schema;
  if (!finalSchema) {
    finalSchema = chiropractorSchema;
  } else if (Array.isArray(finalSchema)) {
     finalSchema = [...finalSchema, chiropractorSchema];
  } else {
     finalSchema = [finalSchema, chiropractorSchema];
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
