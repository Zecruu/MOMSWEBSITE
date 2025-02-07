import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="title" content="PR Decompression Centers - Expert Treatment for Back Pain, Herniated Discs & More | Centro Quiropráctico - Tratamiento para Dolor de Espalda, Discos Herniados, Hernias Discales y Más" />
        <meta name="description" content="Specialized treatment for herniated discs, sciatica, back pain, neck pain, knee pain, and shoulder pain. Advanced therapies: spinal decompression, laser, chiropractic & matrix. | Tratamiento especializado para discos herniados, hernias discales, ciática, dolor de espalda, dolor de cuello, dolor de rodilla y dolor de hombro. Terapias avanzadas: descompresión espinal, láser, quiropráctico y matrix." />
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
        <meta property="og:title" content="PR Decompression Centers - Expert Chiropractic Care | Centro Quiropráctico" />
        <meta property="og:description" content="Professional chiropractic care, spinal decompression, laser therapy, and matrix treatment in Toa Baja, PR. Cuidado quiropráctico profesional en Toa Baja, PR." />
        <meta property="og:image" content="/images/LOGO.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_PR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prdecompressioncenters.com/" />
        <meta property="twitter:title" content="PR Decompression Centers | Centro Quiropráctico" />
        <meta property="twitter:description" content="Expert chiropractic care in Toa Baja, PR | Cuidado quiropráctico experto en Toa Baja, PR" />
        <meta property="twitter:image" content="/images/LOGO.png" />

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 