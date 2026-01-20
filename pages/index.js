import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, X } from "lucide-react";

const Index = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);
  const { t, language } = useLanguage();

  const getPainPointContent = (painPoint) => {
    const content = {
      [t('neckPain')]: {
        causes: language === 'en' 
          ? "Neck pain often results from poor posture, prolonged screen use, whiplash injuries, or degenerative conditions. This can lead to muscle tension, pinched nerves, and cervical spine misalignment."
          : "El dolor cervical frecuentemente es consecuencia de una postura inadecuada, uso prolongado de pantallas, lesiones por latigazo cervical o condiciones degenerativas. Estas situaciones pueden provocar tensión muscular, compresión de nervios y desalineación de la columna cervical, afectando significativamente su calidad de vida.",
        treatment: language === 'en'
          ? "Our chiropractic adjustments and decompression therapy can help realign your cervical spine, reduce nerve pressure, and relax tense muscles. Laser therapy can also help reduce inflammation and accelerate healing in the affected area."
          : "Nuestros ajustes quiroprácticos especializados y la terapia de descompresión ayudan a realinear su columna cervical, reducir la presión sobre los nervios y relajar los músculos tensos. Complementamos el tratamiento con terapia láser avanzada para reducir la inflamación y acelerar la recuperación del área afectada."
      },
      [t('midBackPain')]: {
        causes: language === 'en' 
          ? "Mid back pain typically stems from poor posture, repetitive movements, muscle strain, or spinal disc issues. This area is particularly affected by prolonged sitting and workplace ergonomics."
          : "El dolor en la espalda media generalmente se origina por diversos factores como postura incorrecta, movimientos repetitivos, tensión muscular o problemas en los discos vertebrales. Esta zona es particularmente vulnerable durante periodos prolongados de sedestación y por una ergonomía inadecuada en el lugar de trabajo, lo que puede resultar en molestias crónicas si no se trata adecuadamente.",
        treatment: language === 'en'
          ? "We offer targeted chiropractic care to improve thoracic spine mobility, combined with matrix therapy to address muscle tension. Our decompression techniques can help relieve pressure on spinal discs and nerves in this region."
          : "Ofrecemos atención quiropráctica específica para mejorar la movilidad de la columna torácica, combinada con terapia matrix para tratar la tensión muscular. Nuestras técnicas avanzadas de descompresión ayudan a aliviar la presión en los discos vertebrales y nervios de esta región, promoviendo una recuperación integral y duradera."
      },
      [t('lowerBackPain')]: {
        causes: language === 'en'
          ? "Lower back pain can be caused by herniated discs, sciatica, muscle strains, or degenerative conditions. Lifestyle factors like heavy lifting, prolonged sitting, or lack of exercise can worsen the condition."
          : "El dolor lumbar puede ser causado por hernias discales, ciática, distensiones musculares o condiciones degenerativas. Factores del estilo de vida como levantar objetos pesados, permanecer sentado por largos períodos o la falta de ejercicio pueden agravar significativamente estas condiciones. La región lumbar es fundamental para la movilidad y estabilidad del cuerpo.",
        treatment: language === 'en'
          ? "Our comprehensive approach includes spinal decompression to relieve disc pressure, chiropractic adjustments for proper alignment, and laser therapy to reduce inflammation. Matrix therapy helps address muscle imbalances and promotes faster healing."
          : "Nuestro enfoque integral incluye descompresión espinal para aliviar la presión discal, ajustes quiroprácticos para una alineación óptima y terapia láser para reducir la inflamación. La terapia matrix complementa el tratamiento, ayudando a corregir desequilibrios musculares y promoviendo una recuperación más rápida y efectiva."
      },
      [t('leftShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor de hombro puede surgir por lesiones del manguito rotador, hombro congelado, artritis o dolor referido de problemas cervicales. La postura inadecuada y los movimientos repetitivos frecuentemente contribuyen al problema. Esta articulación compleja requiere un diagnóstico preciso para un tratamiento efectivo.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación especializada de atención quiropráctica y terapia láser para tratar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar el rango de movimiento, reducir la tensión muscular y restaurar la funcionalidad normal del hombro."
      },
      [t('rightShoulderPain')]: {
        causes: language === 'en'
          ? "Shoulder pain may result from rotator cuff injuries, frozen shoulder, arthritis, or referred pain from neck issues. Poor posture and repetitive movements often contribute to the problem."
          : "El dolor de hombro puede surgir por lesiones del manguito rotador, hombro congelado, artritis o dolor referido de problemas cervicales. La postura inadecuada y los movimientos repetitivos frecuentemente contribuyen al problema. Esta articulación compleja requiere un diagnóstico preciso para un tratamiento efectivo.",
        treatment: language === 'en'
          ? "We utilize a combination of chiropractic care and laser therapy to address both the joint and surrounding soft tissues. Matrix therapy helps improve range of motion and reduce muscle tension."
          : "Utilizamos una combinación especializada de atención quiropráctica y terapia láser para tratar tanto la articulación como los tejidos blandos circundantes. La terapia matrix ayuda a mejorar el rango de movimiento, reducir la tensión muscular y restaurar la funcionalidad normal del hombro."
      },
      [t('leftKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede originarse por osteoartritis, lesiones ligamentarias, desgarros de menisco o problemas de alineación. Al ser una articulación que soporta peso, es particularmente susceptible al desgaste. Los problemas biomecánicos pueden afectar toda la cadena cinética de la pierna.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia láser avanzada para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar problemas de alineación que puedan estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes y mejorar la estabilidad articular."
      },
      [t('rightKneePain')]: {
        causes: language === 'en'
          ? "Knee pain can stem from osteoarthritis, ligament injuries, meniscus tears, or alignment issues. Being a weight-bearing joint, it's particularly susceptible to wear and tear."
          : "El dolor de rodilla puede originarse por osteoartritis, lesiones ligamentarias, desgarros de menisco o problemas de alineación. Al ser una articulación que soporta peso, es particularmente susceptible al desgaste. Los problemas biomecánicos pueden afectar toda la cadena cinética de la pierna.",
        treatment: language === 'en'
          ? "Our treatment combines laser therapy to reduce inflammation and promote healing, along with chiropractic care to address any alignment issues that may be affecting your knee. Matrix therapy helps strengthen surrounding muscles."
          : "Nuestro tratamiento combina terapia láser avanzada para reducir la inflamación y promover la curación, junto con atención quiropráctica para abordar problemas de alineación que puedan estar afectando su rodilla. La terapia matrix ayuda a fortalecer los músculos circundantes y mejorar la estabilidad articular."
      }
    };

    return content[painPoint] || {
      causes: language === 'en' 
        ? "Pain in this area can have various causes."
        : "El dolor en esta área puede tener varias causas.",
      treatment: language === 'en'
        ? "We offer multiple treatment options to help address your specific condition."
        : "Ofrecemos múltiples opciones de tratamiento para ayudar a tratar su condición específica."
    };
  };

  const pageTitle = language === 'en' 
    ? '#1 Chiropractor in Levittown PR | Best Spinal Decompression Levittown Puerto Rico | PR Decompression Centers' 
    : '#1 Quiropráctico en Levittown PR | Mejor Descompresión Espinal Levittown Puerto Rico | PR Decompression Centers';
  
  const pageDescription = language === 'en'
    ? 'Best chiropractor in Levittown, Puerto Rico. #1 rated spinal decompression center serving Levittown, Toa Baja, Bayamón. Specializing in herniated disc treatment, sciatica relief, back pain & neck pain. Non-surgical solutions. Call 787-261-8258.'
    : 'El mejor quiropráctico en Levittown, Puerto Rico. Centro #1 de descompresión espinal sirviendo Levittown, Toa Baja, Bayamón. Especialistas en hernias discales, ciática, dolor de espalda y cuello. Soluciones no quirúrgicas. Llame 787-261-8258.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "name": "PR Decompression Centers - Chiropractor Levittown",
    "alternateName": ["Chiropractor Levittown PR", "Quiropráctico Levittown", "Best Chiropractor Levittown Puerto Rico"],
    "image": [
      "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
      "https://prdecompressioncenters.com/images/non-surgical-pain-relief.JPG",
      "https://prdecompressioncenters.com/images/chiropractic-treatment-toa-baja.jpeg"
    ],
    "url": "https://prdecompressioncenters.com",
    "telephone": "+1-787-261-8258",
    "priceRange": "$$",
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
      "latitude": 18.4447,
      "longitude": -66.1916
    },
    "areaServed": [
      {"@type": "City", "name": "Levittown"},
      {"@type": "City", "name": "Toa Baja"},
      {"@type": "City", "name": "Bayamón"},
      {"@type": "City", "name": "Cataño"},
      {"@type": "City", "name": "Dorado"},
      {"@type": "City", "name": "Guaynabo"},
      {"@type": "City", "name": "San Juan"}
    ],
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
    "medicalSpecialty": ["Chiropractic", "Physical Therapy", "Pain Management"],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Treatment Levittown",
        "description": language === 'en' 
          ? "Professional chiropractic adjustments and spinal care in Levittown, Puerto Rico" 
          : "Ajustes quiroprácticos profesionales y cuidado espinal en Levittown, Puerto Rico"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Spinal Decompression Therapy Levittown",
        "description": language === 'en' 
          ? "Non-surgical spinal decompression treatment for herniated discs in Levittown PR" 
          : "Tratamiento de descompresión espinal no quirúrgico para hernias discales en Levittown PR"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy",
        "description": language === 'en'
          ? "Advanced laser treatment for pain and inflammation in Levittown"
          : "Tratamiento láser avanzado para dolor e inflamación en Levittown"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Sciatica Treatment Levittown",
        "description": language === 'en'
          ? "Effective sciatica and nerve pain treatment in Levittown, Puerto Rico"
          : "Tratamiento efectivo de ciática y dolor nervioso en Levittown, Puerto Rico"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-transparent">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="chiropractor Levittown, chiropractor Levittown PR, chiropractor Levittown Puerto Rico, best chiropractor Levittown, quiropráctico Levittown, Levittown chiropractor near me, chiropractic Levittown, spine doctor Levittown PR, back pain doctor Levittown, spinal decompression Levittown, herniated disc Levittown, sciatica treatment Levittown, neck pain Levittown, chiropractor Toa Baja, chiropractor Bayamón, quiropráctico Puerto Rico, dolor de espalda Levittown, hernia discal Levittown"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        canonicalUrl="https://prdecompressioncenters.com/"
        schema={structuredData}
      />
      
      <div className="flex-1 w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[calc(100vh-70px)] -mt-[70px] pt-[70px] flex flex-col justify-center items-center bg-[url('/images/non-surgical-pain-relief.JPG')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20" />
          
          <div className="z-30 flex flex-col items-center px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 max-w-5xl drop-shadow-lg tracking-tight leading-tight">
              {t('mainTitle')}
            </h1>
            <h2 className="text-xl md:text-3xl text-white/95 font-medium mb-10 max-w-3xl drop-shadow-md">
              {t('mainSubtitle')}
            </h2>
            <Button 
              asChild 
              size="lg"
              className="bg-transparent hover:bg-white hover:text-[#000033] text-white border-2 border-white rounded-full text-lg font-semibold px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wide"
            >
              <a href="#services">
                {language === 'en' ? 'Discover Our Services' : 'Descubra Nuestros Servicios'}
              </a>
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
            <div className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Testimonials Section */}
          <h2 id="testimonials" className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[#000033]">
            {t('testimonialsSectionTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                src: "/videos/Testimonio Decompression.mp4",
                caption: language === 'en' ? 'Results of Decompression Therapy' : 'Resultados de Terapia de Descompresión'
              },
              {
                src: "/videos/Testimonio Soluciones Sin Cirugia Dolor De Espalda.mp4",
                caption: language === 'en' ? 'Non-Surgical Solutions for Back and Neck Pain' : 'Soluciones Sin Cirugía para el Dolor de Espalda y Cuello'
              }
            ].map((video, index) => (
              <Card key={index} className="bg-black border-none overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <video 
                    controls 
                    className="w-full aspect-video object-contain bg-black"
                  >
                    <source src={video.src} type="video/mp4" />
                    {language === 'en' ? 'Your browser does not support the video tag.' : 'Su navegador no soporta la etiqueta de video.'}
                  </video>
                  <div className="p-4 text-center text-white font-medium text-lg">
                    {video.caption}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-white max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
            {language === 'en' 
              ? 'Hear directly from our patients about their experience with our decompression therapy and non-surgical solutions for back and neck pain. In these testimonials you can also hear how the decompression machine has helped to improve their quality of life.'
              : 'Escuche directamente de nuestros pacientes sobre su experiencia con nuestra terapia de descompresión y soluciones sin cirugía para el dolor de espalda y para el dolor de cuello. En estos testimonios también puedes escuchar cómo la máquina de descompresión ha ayudado a mejorar su calidad de vida.'}
          </p>

          <div className="flex justify-center mb-24">
            <Button
              asChild
              className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/discos-herniados">
                {language === 'en' ? '🔍 Have a Herniated Disc? Click Here!' : '🔍 ¿Tienes Discos Herniados? ¡Haz Click Aquí!'}
              </Link>
            </Button>
          </div>

          {/* Services Section */}
          <h2 id="services" className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[#000033]">
            {t('specializedServices')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24 px-4">
            {[
              {
                title: t('advancedChiropractic'),
                img: "/images/chiropractic-treatment-toa-baja.jpeg",
                alt: "Professional chiropractic treatment and adjustments in Toa Baja, Puerto Rico",
                link: "/products#chiropractic",
                btnText: t('learnMoreChiro')
              },
              {
                title: t('spinalDecompressionTitle'),
                img: "/images/spinal-decompression-therapy-pr.png",
                alt: "Non-surgical spinal decompression therapy for herniated discs in Puerto Rico",
                link: "/products#decompression",
                btnText: t('discoverDecompression')
              },
              {
                title: t('advancedLaserTitle'),
                img: "/images/advanced-laser-therapy-treatment.png",
                alt: "Advanced laser therapy for pain relief and healing in Puerto Rico",
                link: "/products#laser",
                btnText: t('exploreLaser')
              },
              {
                title: t('matrix'),
                img: "/images/matrix-rehabilitation-therapy.jpeg",
                alt: "Matrix rehabilitation therapy for pain management in Puerto Rico",
                link: "/products#matrix",
                btnText: "Learn More About Matrix"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-black border-2 border-transparent relative overflow-hidden shadow-xl">
                 <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-[#009fff] to-[#ec2f4b] -z-10 opacity-0" />
                <CardHeader className="p-6 pb-2">
                  <div className="h-64 w-full overflow-hidden rounded-md bg-black/50 p-4">
                    <img 
                      src={service.img} 
                      alt={service.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <h3 className="text-2xl font-bold text-black mb-6 min-h-[4rem] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-[#009fff] to-[#ec2f4b] hover:from-[#ec2f4b] hover:to-[#009fff] text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={service.link}>
                      {service.btnText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Body Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#000033]">
              {t('herniatedDiscTitle')}
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-md text-center mb-6 font-bold text-xl text-[#333]">
                  {language === 'en' ? 'Click where you feel pain!' : '¡Haga clic donde siente dolor!'}
                </div>
                <div className="relative">
                  <img 
                    src="/images/interactive-pain-diagram.jpeg" 
                    alt="Interactive body diagram" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  
                  {/* Pain Points */}
                  {[
                    { top: "23%", left: "48.7%", id: 'neckPain' },
                    { top: "36%", left: "48.7%", id: 'midBackPain' },
                    { top: "47.5%", left: "48.7%", id: 'lowerBackPain' },
                    { top: "29%", left: "38%", id: 'leftShoulderPain' },
                    { top: "29%", left: "59%", id: 'rightShoulderPain' },
                    { top: "72%", left: "38.5%", id: 'leftKneePain' },
                    { top: "72%", left: "60.5%", id: 'rightKneePain' },
                  ].map((point) => (
                    <button
                      key={point.id}
                      onClick={() => setSelectedPainPoint(point.id)}
                      className="absolute w-5 h-5 md:w-6 md:h-6 bg-red-600 rounded-full hover:scale-125 transition-transform duration-200 shadow-md z-10"
                      style={{ top: point.top, left: point.left }}
                      aria-label={`Select ${point.id}`}
                    >
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Popup / Info Panel */}
              <div className={`
                lg:w-[500px] lg:sticky lg:top-24 transition-all duration-300
                ${selectedPainPoint 
                  ? 'fixed inset-0 bg-black/95 z-50 lg:relative lg:bg-transparent lg:z-auto flex items-center justify-center lg:block p-4' 
                  : 'hidden lg:block lg:opacity-0 lg:pointer-events-none'}
              `}>
                {selectedPainPoint && (
                  <Card className="w-full max-w-md bg-white text-slate-900 border-none shadow-2xl animate-in fade-in zoom-in duration-300">
                    <CardHeader className="relative border-b border-slate-100 pb-4">
                      <CardTitle className="text-2xl font-bold text-[#000033]">
                        {t(selectedPainPoint)}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4 lg:hidden"
                        onClick={() => setSelectedPainPoint(null)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-[#000033] mb-2">{t('commonCauses')}</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {getPainPointContent(t(selectedPainPoint)).causes}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#000033] mb-2">{t('howWeCanHelp')}</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {getPainPointContent(t(selectedPainPoint)).treatment}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="lg:hidden">
                      <Button className="w-full" onClick={() => setSelectedPainPoint(null)}>
                        {t('close')}
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Videos Section */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[#000033]">
            {t('videoSectionTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: t('spinalDecompressionVideo'),
                src: "https://www.youtube.com/embed/tJahlOwwuGM",
                type: "iframe"
              },
              {
                title: t('chiropracticVideo'),
                src: "https://www.youtube.com/embed/iWwJeSb7Dh4",
                type: "iframe"
              },
              {
                title: t('clinicVideo'),
                src: "/videos/Centro-Quiropractico-Dra.-Morales.mp4",
                type: "video"
              }
            ].map((video, index) => (
              <Card key={index} className="bg-black/90 border-slate-800 overflow-hidden shadow-lg">
                <CardContent className="p-4 space-y-4">
                  <h3 className="text-xl font-bold text-white text-center h-14 flex items-center justify-center">
                    {video.title}
                  </h3>
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden border border-slate-800">
                    {video.type === 'iframe' ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <video
                        width="100%"
                        height="100%"
                        controls
                        className="w-full h-full"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
