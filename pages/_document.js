import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#00f2fe" />
          <meta name="title" content="PR Decompression Centers - Tratamiento Experto para Dolor de Espalda" />
          <meta name="description" content="Centro líder en Puerto Rico en terapia de descompresión espinal, tratamiento quiropráctico y manejo del dolor. Especialistas en hernias discales, dolor de espalda y problemas de columna." />
          <meta name="keywords" content="descompresión espinal, quiropráctico Puerto Rico, dolor de espalda, hernia discal, terapia láser, tratamiento quiropráctico, dolor cervical, dolor lumbar, Toa Baja, Levittown" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://prdecompressioncenters.com/" />
          <meta property="og:title" content="PR Decompression Centers - Tratamiento Experto para Dolor de Espalda" />
          <meta property="og:description" content="Centro líder en Puerto Rico en terapia de descompresión espinal, tratamiento quiropráctico y manejo del dolor. Especialistas en hernias discales y problemas de columna." />
          <meta property="og:image" content="https://prdecompressioncenters.com/images/decompression-therapy-hero-bg.png" />
          <meta property="og:locale" content="es_PR" />
          <meta property="og:locale:alternate" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://prdecompressioncenters.com/" />
          <meta name="twitter:title" content="PR Decompression Centers - Tratamiento Experto para Dolor de Espalda" />
          <meta name="twitter:description" content="Centro líder en Puerto Rico en terapia de descompresión espinal, tratamiento quiropráctico y manejo del dolor. Especialistas en hernias discales y problemas de columna." />
          <meta name="twitter:image" content="https://prdecompressioncenters.com/images/decompression-therapy-hero-bg.png" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://prdecompressioncenters.com/" />

          {/* Favicon */}
          <link rel="icon" type="image/png" href="/images/pr-decompression-centers-logo.png" />
          <link rel="shortcut icon" type="image/png" href="/images/pr-decompression-centers-logo.png" />
          <link rel="apple-touch-icon" href="/images/pr-decompression-centers-logo.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "PR Decompression Centers",
                "image": "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
                "url": "https://prdecompressioncenters.com",
                "telephone": "+1-787-261-8258",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "RH-16 Ave. Building, Los Dominicos",
                  "addressLocality": "Toa Baja",
                  "addressRegion": "PR",
                  "postalCode": "00949",
                  "addressCountry": "PR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 18.4447,
                  "longitude": -66.1916
                },
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
                "priceRange": "$$",
                "medicalSpecialty": ["Chiropractic", "Physical Therapy"],
                "availableService": [
                  {
                    "@type": "MedicalTherapy",
                    "name": "Spinal Decompression Therapy",
                    "description": "Non-surgical treatment for herniated discs and back pain"
                  },
                  {
                    "@type": "MedicalTherapy",
                    "name": "Chiropractic Treatment",
                    "description": "Advanced chiropractic care for spine and joint issues"
                  },
                  {
                    "@type": "MedicalTherapy",
                    "name": "Laser Therapy",
                    "description": "Advanced laser treatment for pain and inflammation"
                  }
                ]
              })
            }}
          />

          {/* Preconnect to important third-party domains */}
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://www.facebook.com" />
          <link rel="preconnect" href="https://www.instagram.com" />

          {/* Additional Meta Tags */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="PR Decompression Centers" />
          <meta name="application-name" content="PR Decompression Centers" />

          {/* Security Headers */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} 