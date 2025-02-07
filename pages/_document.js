import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Primary Meta Tags - English */}
        <meta charSet="utf-8" />
        <meta name="title" content="PR Decompression Centers | Spinal Treatment Toa Baja" />
        <meta name="description" content="Expert spinal decompression therapy & chiropractic care in Puerto Rico. Advanced treatment for back pain, herniated discs, and sciatica. Serving Toa Baja area." />
        
        {/* Primary Meta Tags - Spanish */}
        <meta name="title" lang="es" content="Centro de Descompresión PR | Terapia Espinal Toa Baja" />
        <meta name="description" lang="es" content="Terapia de descompresión espinal y cuidado quiropráctico en Puerto Rico. Tratamiento avanzado para dolor de espalda y hernias discales. Área de Toa Baja." />

        {/* Primary Meta Tags */}
        <meta name="keywords" content="herniated disc treatment, tratamiento hernia discal, discos herniados, 
        back pain relief, alivio dolor de espalda, 
        neck pain treatment, tratamiento dolor de cuello, 
        sciatica treatment, tratamiento ciática, 
        spinal stenosis, estenosis espinal, 
        degenerative disc disease, enfermedad degenerativa del disco, discos degenerativos, 
        pinched nerve, nervio pinzado, 
        shoulder pain, dolor de hombro, 
        knee pain, dolor de rodilla, 
        joint pain, dolor de articulaciones, 
        muscle strain, tensión muscular, 
        whiplash treatment, tratamiento latigazo cervical, 
        scoliosis treatment, tratamiento escoliosis, 
        sports injury, lesión deportiva, 
        chiropractic adjustment, ajuste quiropráctico, 
        spinal decompression therapy, terapia descompresión espinal, 
        laser therapy, terapia láser, 
        matrix therapy, terapia matrix, 
        chronic pain management, manejo dolor crónico, 
        lower back pain, dolor lumbar, 
        mid back pain, dolor espalda media, 
        upper back pain, dolor espalda superior, 
        headache treatment, tratamiento dolor de cabeza, 
        migraine relief, alivio migraña, 
        posture correction, corrección postura, 
        spinal alignment, alineación espinal, 
        chiropractor toa baja, quiropráctico toa baja, 
        physical therapy levittown, terapia física levittown, 
        pain specialist puerto rico, especialista dolor puerto rico" />
        
        {/* Alternate Language Tags */}
        <link rel="alternate" hrefLang="es" href="https://prdecompressioncenters.com/es" />
        <link rel="alternate" hrefLang="en" href="https://prdecompressioncenters.com" />
        
        {/* Open Graph / Facebook - English */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prdecompressioncenters.com/" />
        <meta property="og:title" content="PR Decompression Centers | Spinal Treatment Toa Baja" />
        <meta property="og:description" content="Expert spinal decompression therapy & chiropractic care in Puerto Rico. Advanced treatment for back pain, herniated discs, and sciatica. Serving Toa Baja area." />
        <meta property="og:image" content="/images/LOGO.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_PR" />

        {/* Open Graph / Facebook - Spanish */}
        <meta property="og:title" lang="es" content="Centro de Descompresión PR | Terapia Espinal Toa Baja" />
        <meta property="og:description" lang="es" content="Terapia de descompresión espinal y cuidado quiropráctico en Puerto Rico. Tratamiento avanzado para dolor de espalda y hernias discales. Área de Toa Baja." />

        {/* Twitter Cards - English */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prdecompressioncenters.com/" />
        <meta property="twitter:title" content="PR Decompression Centers | Spinal Treatment Toa Baja" />
        <meta property="twitter:description" content="Expert spinal decompression therapy & chiropractic care in Puerto Rico. Advanced treatment for back pain, herniated discs, and sciatica." />
        <meta property="twitter:image" content="/images/LOGO.png" />

        {/* Twitter Cards - Spanish */}
        <meta property="twitter:title" lang="es" content="Centro de Descompresión PR | Terapia Espinal Toa Baja" />
        <meta property="twitter:description" lang="es" content="Terapia de descompresión espinal y cuidado quiropráctico en Puerto Rico. Tratamiento avanzado para dolor de espalda y hernias discales." />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="PR Decompression Centers" />
        <meta name="geo.region" content="PR" />
        <meta name="geo.placename" content="Toa Baja, Levittown" />
        <meta name="geo.position" content="18.4233;-66.2013" />
        <meta name="ICBM" content="18.4233, -66.2013" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Chiropractic",
              "name": "PR Decompression Centers",
              "alternateName": "Centro Quiropráctico Dra. Morales",
              "image": "/images/LOGO.png",
              "description": "Professional chiropractic care and treatments in Toa Baja, Puerto Rico | Cuidado quiropráctico profesional en Toa Baja, Puerto Rico",
              "@id": "https://prdecompressioncenters.com",
              "url": "https://prdecompressioncenters.com",
              "telephone": "+1-787-261-8258",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "RH-16 Ave. Building, Los Dominicos",
                "addressLocality": "Toa Baja",
                "addressRegion": "Levittown",
                "postalCode": "00949",
                "addressCountry": "PR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.4233,
                "longitude": -66.2013
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
              ]
            }
          `}
        </script>

        {/* Condition-Specific Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "PR Decompression Centers",
              "alternateName": "Centro Quiropráctico Dra. Morales",
              "@id": "https://prdecompressioncenters.com",
              "url": "https://prdecompressioncenters.com",
              "medicalSpecialty": [
                "Chiropractic",
                "Physical Therapy",
                "Pain Management"
              ],
              "availableService": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Spinal Decompression Therapy",
                  "alternateName": "Terapia de Descompresión Espinal"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Laser Therapy",
                  "alternateName": "Terapia Láser"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Matrix Therapy",
                  "alternateName": "Terapia Matrix"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Chiropractic Adjustment",
                  "alternateName": "Ajuste Quiropráctico"
                }
              ],
              "medicalConditionTreated": [
                "Herniated Disc | Discos Herniados | Hernia Discal",
                "Sciatica | Ciática",
                "Lower Back Pain | Dolor Lumbar",
                "Neck Pain | Dolor de Cuello",
                "Shoulder Pain | Dolor de Hombro",
                "Knee Pain | Dolor de Rodilla",
                "Spinal Stenosis | Estenosis Espinal",
                "Degenerative Disc Disease | Enfermedad Degenerativa del Disco | Discos Degenerativos",
                "Whiplash | Latigazo Cervical",
                "Scoliosis | Escoliosis",
                "Sports Injuries | Lesiones Deportivas",
                "Muscle Strain | Tensión Muscular",
                "Joint Pain | Dolor de Articulaciones",
                "Headaches | Dolor de Cabeza",
                "Migraines | Migraña",
                "Posture Problems | Problemas de Postura"
              ]
            }
          `}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W9ENXV8126"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W9ENXV8126');
            `,
          }}
        />

        {/* Responsive Map Styling */}
        <style>
          {`
            .map-responsive {
              overflow: hidden;
              padding-bottom: 56.25%;
              position: relative;
              height: 0;
              border-radius: 10px;
            }
            .map-responsive iframe {
              left: 0;
              top: 0;
              height: 100%;
              width: 100%;
              position: absolute;
              border: 0;
            }
          `}
        </style>

        {/* Schema.org for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "PR Decompression Centers",
                "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8876712478387!2d-66.19061492412567!3d18.448931982636723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036b68d4b339d9%3A0x6c296dac41fc7f5f!2sPR%20Decompression%20Centers!5e0!3m2!1sen!2spr!4v1689127608595!5m2!1sen!2spr"
              }
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 