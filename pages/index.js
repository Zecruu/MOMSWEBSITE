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
    ? 'Best Chiropractor in Puerto Rico | #1 Spinal Decompression Center Toa Baja | PR Decompression Centers' 
    : 'Mejor Quiropráctico en Puerto Rico | Centro #1 de Descompresión Espinal Toa Baja | PR Decompression Centers';
  
  const pageDescription = language === 'en'
    ? 'Top-rated chiropractor in Puerto Rico specializing in spinal decompression therapy, herniated disc treatment, and sciatica relief. Located in Toa Baja, serving Levittown, Bayamón, and surrounding areas. Advanced non-surgical pain relief solutions.'
    : 'Quiropráctico #1 en Puerto Rico especializado en terapia de descompresión espinal, tratamiento de hernias discales y alivio de ciática. Ubicado en Toa Baja, sirviendo Levittown, Bayamón y áreas circundantes. Soluciones avanzadas no quirúrgicas para el dolor.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "PR Decompression Centers",
    "image": "https://prdecompressioncenters.com/images/pr-decompression-centers-logo.png",
    "url": "https://prdecompressioncenters.com",
    "telephone": "+1-787-261-8258",
    "priceRange": "$$",
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
    "medicalSpecialty": ["Chiropractic", "Physical Therapy", "Pain Management"],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Spinal Decompression Therapy",
        "description": language === 'en' 
          ? "Non-surgical treatment for herniated discs and back pain" 
          : "Tratamiento no quirúrgico para hernias discales y dolor de espalda"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Chiropractic Treatment",
        "description": language === 'en'
          ? "Advanced chiropractic care for spine and joint issues"
          : "Cuidado quiropráctico avanzado para problemas de columna y articulaciones"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Laser Therapy",
        "description": language === 'en'
          ? "Advanced laser treatment for pain and inflammation"
          : "Tratamiento láser avanzado para dolor e inflamación"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-transparent">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="chiropractor Puerto Rico, quiropráctico Puerto Rico, spinal decompression Toa Baja, terapia descompresión espinal, herniated disc treatment, hernia discal tratamiento, back pain relief, dolor espalda, sciatica treatment, ciática, Levittown chiropractor, Bayamón chiropractic, non-surgical pain relief, laser therapy Puerto Rico"
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
          <h2 id="testimonials" className="text-3xl md:text-5xl font-extrabold text-center mb-16 relative pb-4 text-[#000033]">
            {t('testimonialsSectionTitle')}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#b465da] rounded-full" />
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
              <Card key={index} className="bg-black border-none overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
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

          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
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
          <h2 id="services" className="text-3xl md:text-5xl font-extrabold text-center mb-16 relative pb-4 text-[#000033]">
            {t('specializedServices')}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#b465da] rounded-full" />
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
              <Card key={index} className="group bg-black border-2 border-transparent hover:border-transparent relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                 <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-[#009fff] to-[#ec2f4b] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="p-6 pb-2">
                  <div className="h-64 w-full overflow-hidden rounded-md bg-black/50 p-4">
                    <img 
                      src={service.img} 
                      alt={service.alt}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#009fff] to-[#ec2f4b] bg-clip-text text-transparent mb-6 min-h-[4rem] flex items-center justify-center">
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
              <Card key={index} className="bg-black/90 border-slate-800 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
