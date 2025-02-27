import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Services",
    reviews: "Reviews",
    videos: "Videos",
    officeHours: "Office Hours",
    whatsappUs: "WhatsApp Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    languageButton: "Cambiar a Español",
    contactUs: "Contact Us",
    locateUs: "Locate Us",

    // Location Page
    address: "Address",
    phone: "Phone",
    email: "Email",
    directions: "Get Directions",

    // Main Content
    welcome: "Welcome to PR Decompression Centers",
    clickWhere: "Click where it hurts for treatment options",
    weOffer: "We offer",
    mainTitle: "Decompression Therapy in Puerto Rico",
    mainSubtitle: "Expert Treatment for Back Pain & Herniated Discs",
    specializedServices: "Our Specialized Treatment Services",
    advancedChiropractic: "Advanced Chiropractic Care",
    spinalDecompressionTitle: "Spinal Decompression Benefits",
    advancedLaserTitle: "Advanced Laser Treatment",
    learnMoreChiro: "Learn More About Chiropractic Care",
    discoverDecompression: "Discover Decompression Benefits",
    exploreLaser: "Explore Laser Therapy",
    chiropractic: "Chiropractic",
    decompression: "Decompression",
    laserTherapy: "Laser Therapy",
    matrix: "Matrix",
    services: "Services",
    herniatedDiscTitle: "Herniated Disc Treatment & Pain Management",

    // Products Page
    productsTitle: "Our Products & Services",
    moreInfo: "Want more info about this product? Click Here!",
    whatIsThis: "What is this?",
    insuranceCover: "Does Insurance Cover This?",
    chiropracticDesc: "Chiropractic care is a natural, non-invasive approach to health that focuses on treating and preventing musculoskeletal system disorders, particularly those affecting the spine. Our chiropractors use hands-on spinal manipulation and other alternative treatments to properly align the body's musculoskeletal structure, enabling the body to heal itself without surgery or medication.",
    decompressionDesc: "Spinal decompression therapy is a non-surgical treatment that uses motorized traction to gently stretch the spine. This treatment helps relieve back, neck, and leg pain by taking pressure off spinal disks (the cushions between vertebrae) and promoting movement of water, oxygen, and nutrient-rich fluids into the disks to promote healing.",
    laserDesc: "Laser therapy is a non-invasive treatment that uses specific wavelengths of light to interact with tissue and help accelerate the healing process. It can be used to treat acute and chronic conditions and provides pain relief, reduces inflammation, and increases the speed of tissue regeneration.",
    matrixDesc: "Matrix Therapy is an advanced therapeutic technique that focuses on treating the body's connective tissue (matrix). This therapy helps improve circulation, reduce inflammation, and promote healing at the cellular level. It's particularly effective for chronic pain conditions and can help restore mobility and function to injured areas.",
    insuranceChiro: "This service is covered by insurance but please call ",
    insuranceLaser: "This service is covered by some insurance plans. Please call ",
    insuranceNotCovered: "This is an out-of-pocket service and is not covered by insurance.",
    callToVerify: " to verify if your insurance covers this service!",

    // Pain Points
    neckPain: "Neck Pain",
    midBackPain: "Mid Back Pain",
    lowerBackPain: "Lower Back Pain",
    leftShoulderPain: "Left Shoulder Pain",
    rightShoulderPain: "Right Shoulder Pain",
    leftKneePain: "Left Knee Pain",
    rightKneePain: "Right Knee Pain",

    // Popup
    commonCauses: "Common Causes:",
    howWeCanHelp: "How We Can Help:",
    close: "Close",

    // Footer
    location: "Location: PR Decompression Centers",
    phone: "Phone",
    email: "Email",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    hours1: "9:00AM-11:30AM",
    hours2: "1:30PM-4:00PM",
    closed: "Closed",
    quickLinks: "Quick Links",
    // Video Section
    videoSectionTitle: "Educational Videos",
    spinalDecompressionVideo: "Spinal Decompression Therapy",
    chiropracticVideo: "Chiropractic Treatment",
    clinicVideo: "Centro Quiropráctico Dra. Morales",
  },
  es: {
    // Navigation
    home: "Inicio",
    products: "Servicios",
    reviews: "Reseñas",
    videos: "Videos",
    officeHours: "Horario",
    whatsappUs: "WhatsApp",
    callUs: "Llamar",
    emailUs: "Correo",
    languageButton: "Switch to English",
    contactUs: "Contáctenos",
    locateUs: "Ubicación",

    // Location Page
    address: "Dirección",
    phone: "Teléfono",
    email: "Correo",
    directions: "Cómo Llegar",

    // Main Content
    welcome: "Bienvenido a PR Decompression Centers",
    clickWhere: "Haz clic donde te duele para ver las opciones de tratamiento",
    weOffer: "Ofrecemos",
    mainTitle: "Terapia de Descompresión en Puerto Rico",
    mainSubtitle: "Tratamiento Experto para Dolor de Espalda y Discos Herniados",
    specializedServices: "Nuestros Servicios Especializados de Tratamiento",
    advancedChiropractic: "Cuidado Quiropráctico Avanzado",
    spinalDecompressionTitle: "Beneficios de la Descompresión Espinal",
    advancedLaserTitle: "Tratamiento Láser Avanzado",
    learnMoreChiro: "Aprenda Más Sobre Quiropráctica",
    discoverDecompression: "Descubra los Beneficios de la Descompresión",
    exploreLaser: "Explore la Terapia Láser",
    chiropractic: "Quiropráctica",
    decompression: "Descompresión",
    laserTherapy: "Terapia Láser",
    matrix: "Matrix",
    services: "Servicios",
    herniatedDiscTitle: "Tratamiento de Disco Herniado y Manejo del Dolor",

    // Products Page
    productsTitle: "Nuestros Productos y Servicios",
    moreInfo: "¿Quieres más información sobre este producto? ¡Haz clic aquí!",
    whatIsThis: "¿Qué es esto?",
    insuranceCover: "¿El seguro cubre esto?",
    chiropracticDesc: "La quiropráctica es un enfoque natural y no invasivo para la salud que se centra en tratar y prevenir trastornos del sistema musculoesquelético, particularmente los que afectan la columna vertebral. Nuestros quiroprácticos utilizan manipulación espinal manual y otros tratamientos alternativos para alinear correctamente la estructura musculoesquelética del cuerpo, permitiendo que el cuerpo se cure sin cirugía ni medicamentos.",
    decompressionDesc: "La terapia de descompresión espinal es un tratamiento no quirúrgico que utiliza tracción motorizada para estirar suavemente la columna vertebral. Este tratamiento ayuda a aliviar el dolor de espalda, cuello y piernas al reducir la presión sobre los discos espinales y promover el movimiento de agua, oxígeno y fluidos ricos en nutrientes hacia los discos para promover la curación.",
    laserDesc: "La terapia láser es un tratamiento no invasivo que utiliza longitudes de onda específicas de luz para interactuar con el tejido y ayudar a acelerar el proceso de curación. Se puede usar para tratar condiciones agudas y crónicas y proporciona alivio del dolor, reduce la inflamación y aumenta la velocidad de regeneración del tejido.",
    matrixDesc: "La Terapia Matrix es una técnica terapéutica avanzada que se centra en tratar el tejido conectivo del cuerpo (matriz). Esta terapia ayuda a mejorar la circulación, reducir la inflamación y promover la curación a nivel celular. Es particularmente efectiva para condiciones de dolor crónico y puede ayudar a restaurar la movilidad y función a las áreas lesionadas.",
    insuranceChiro: "Este servicio está cubierto por el seguro, pero llame al ",
    insuranceLaser: "Este servicio está cubierto por algunos planes de seguro. Llame al ",
    insuranceNotCovered: "Este es un servicio que debe pagar de su bolsillo y no está cubierto por el seguro.",
    callToVerify: " para verificar si su seguro cubre este servicio.",

    // Pain Points
    neckPain: "Dolor de Cuello",
    midBackPain: "Dolor de Espalda Media",
    lowerBackPain: "Dolor Lumbar",
    leftShoulderPain: "Dolor de Hombro Izquierdo",
    rightShoulderPain: "Dolor de Hombro Derecho",
    leftKneePain: "Dolor de Rodilla Izquierda",
    rightKneePain: "Dolor de Rodilla Derecha",

    // Popup
    commonCauses: "Causas Comunes:",
    howWeCanHelp: "Cómo Podemos Ayudar:",
    close: "Cerrar",

    // Footer
    location: "Ubicación: PR Decompression Centers",
    phone: "Teléfono",
    email: "Correo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    hours1: "9:00AM-11:30AM",
    hours2: "1:30PM-4:00PM",
    closed: "Cerrado",
    quickLinks: "Enlaces Rápidos",
    // Video Section
    videoSectionTitle: "Videos Educativos",
    spinalDecompressionVideo: "Terapia de Descompresión Espinal",
    chiropracticVideo: "Tratamiento Quiropráctico",
    clinicVideo: "Centro Quiropráctico Dra. Morales",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 