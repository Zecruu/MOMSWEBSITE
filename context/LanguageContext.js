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
    herniatedDiscs: "Herniated Discs",

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

    // Herniated Disc Page
    herniatedDiscHero: "Herniated Discs: Symptoms, Causes and Treatment in Puerto Rico",
    herniatedDiscSubtitle: "Are you suffering from back or neck pain? Learn how spinal decompression can help you.",
    contactUsWhatsapp: "Contact us for an appointment today!",
    whatIsHerniatedDisc: "What is a Herniated Disc?",
    herniatedDiscDefinition: "A herniated disc occurs when the nucleus pulposus (gelatinous material inside the disc) moves through a tear in the outer fibrous ring. This displacement can put pressure on nearby nerves, causing pain, numbness, or weakness.",
    discFunction: "Intervertebral discs function as shock absorbers between the vertebrae of the spine. When healthy, they allow flexible movements and absorb impacts. However, with time or due to injuries, these discs can deteriorate and herniate.",
    differenceTitle: "Difference between Herniated Disc and Bulging Disc",
    bulgingDisc: "Bulging Disc:",
    bulgingDiscDefinition: "The disc protrudes uniformly around its circumference, but the nucleus pulposus remains contained within the fibrous ring.",
    herniatedDiscTerm: "Herniated Disc:",
    herniatedDiscDefinitionShort: "The nucleus pulposus moves through a tear in the fibrous ring, causing a localized protrusion that can compress nearby nerves.",
    herniatedDiscDiagram: "Diagram of a herniated disc showing spinal nerve compression",
    diagramCaption: "Diagram of a herniated disc and how it affects spinal nerves",
    symptomsTitle: "Symptoms of Herniated Discs",
    symptomsIntro: "The symptoms of a herniated disc can vary depending on the location of the herniation and whether it's pressing on a nerve. The most common symptoms include:",
    symptomLowerBack: "Lower back pain (lumbago)",
    symptomSciatica: "Pain that radiates to the legs, buttocks or feet (sciatica)",
    symptomNumbness: "Numbness or tingling in extremities",
    symptomWeakness: "Muscle weakness in the affected area",
    symptomMovement: "Pain that worsens with certain movements",
    earlySymptomsFAQ: "What are the first symptoms of a herniated disc?",
    earlySymptomsFAQAnswer1: "Early symptoms usually include localized pain in the affected area of the spine. If the herniated disc is in the lumbar region, you may feel pain in the lower back that radiates to the buttocks and legs. If it's in the cervical region, you may experience neck pain that extends to the shoulders and arms.",
    earlySymptomsFAQAnswer2: "Many patients describe a tingling or numbness sensation before the pain intensifies. It's important to seek early medical attention when these symptoms appear to prevent the condition from worsening.",
    causesTitle: "Causes of Herniated Discs",
    causesImage: "Factors contributing to herniated discs such as poor posture and incorrect lifting",
    causeAging: "Aging and natural wear",
    causeAgingDesc: "With age, discs lose water and flexibility, making them more prone to herniation even with normal movements.",
    causeLifting: "Lifting heavy objects with poor posture",
    causeLiftingDesc: "Incorrect lifting places excessive pressure on the spine, increasing the risk of disc herniation.",
    causeRepetitive: "Repetitive movements or sports injuries",
    causeRepetitiveDesc: "Repetitive movements and sudden injuries during physical activities can damage the intervertebral discs.",
    causeSedentary: "Sedentary lifestyle",
    causeSedentaryDesc: "Lack of physical activity weakens the muscles that support the spine, increasing pressure on the discs.",
    treatmentsTitle: "Treatments for Herniated Discs in Puerto Rico",
    treatmentsIntro: "There are different approaches to treating herniated discs, from conventional methods to specialized non-invasive therapies.",
    conventionalTreatments: "Conventional Treatments",
    medicationTreatment: "Pain medication",
    physicalTherapy: "Traditional physical therapy",
    steroidInjections: "Epidural steroid injections",
    surgery: "Surgery (in severe cases)",
    ourSpecialty: "Our Specialty: Spinal Decompression",
    howItWorks: "How It Works:",
    decompressionExplanation: "Spinal decompression therapy uses a specialized table that gently stretches the spine, creating negative pressure within the discs. This allows herniated material to retract, relieving pressure on nerves and promoting natural healing.",
    benefits: "Benefits:",
    benefitNoninvasive: "Non-invasive and surgery-free",
    benefitFastRelief: "Quick pain relief",
    benefitNoRecovery: "No recovery time",
    benefitRootCause: "Treats the root cause, not just the symptoms",
    benefitSuccessRate: "High success rate in patients with herniated discs",
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqSafety: "Is spinal decompression safe?",
    faqSafetyAnswer: "Yes, spinal decompression is a non-invasive and safe procedure when performed by certified professionals. It's an alternative to surgery for treating herniated discs. Our specialists have years of experience and use state-of-the-art equipment to ensure the safety and effectiveness of the treatment.",
    faqDuration: "How long does the treatment last?",
    faqDurationAnswer: "The treatment consists of 30 sessions that are expected to be completed within 3 months. Each session of spinal decompression lasts approximately 30-45 minutes. Many patients begin to experience relief after just a few sessions, but completing the full treatment plan is essential for optimal and lasting results.",
    faqSessions: "How many sessions do I need?",
    faqSessionsAnswer: "Every patient needs a minimum of 30 sessions to achieve optimal results. Depending on the severity of your herniated disc and your individual response to treatment, additional sessions may be recommended. Our specialists will evaluate your progress throughout the treatment and adjust the plan as necessary to ensure the best possible outcome for your specific condition.",
    faqInsurance: "Do you accept medical insurance?",
    faqInsuranceAnswer: "We accept medical insurance plans for chiropractic services and sometimes for laser therapy, but spinal decompression treatment is not covered by insurance. Please call us at 787-261-8258 to verify which of our services are covered by your specific insurance plan. Our administrative team will work with you to maximize your insurance benefits for the covered services.",
    readyForRelief: "Ready to relieve your herniated disc pain?",
    teamReady: "Our team of specialists is ready to help you regain your quality of life with non-invasive and effective treatments.",

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
    testimonialsSectionTitle: "Testimonials",
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
    herniatedDiscs: "Discos Herniados",

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
    testimonialsSectionTitle: "Testimonios",

    // Herniated Disc Page
    herniatedDiscHero: "Discos Herniados: Síntomas, Causas y Tratamiento en Puerto Rico",
    herniatedDiscSubtitle: "¿Sufres de dolor en la espalda o cuello? Aprende cómo la descompresión espinal puede ayudarte.",
    contactUsWhatsapp: "Escribenos para cita hoy!",
    whatIsHerniatedDisc: "¿Qué es un Disco Herniado?",
    herniatedDiscDefinition: "Un disco herniado ocurre cuando el núcleo pulposo (material gelatinoso dentro del disco) se desplaza a través de una ruptura en el anillo fibroso exterior. Este desplazamiento puede ejercer presión sobre los nervios cercanos, causando dolor, entumecimiento o debilidad.",
    discFunction: "Los discos intervertebrales funcionan como amortiguadores entre las vértebras de la columna vertebral. Cuando están sanos, permiten movimientos flexibles y absorben los impactos. Sin embargo, con el tiempo o debido a lesiones, estos discos pueden deteriorarse y herniarse.",
    differenceTitle: "Diferencia entre Disco Herniado y Disco Abultado",
    bulgingDisc: "Disco Abultado:",
    bulgingDiscDefinition: "El disco sobresale uniformemente alrededor de su circunferencia, pero el núcleo pulposo permanece contenido dentro del anillo fibroso.",
    herniatedDiscTerm: "Disco Herniado:",
    herniatedDiscDefinitionShort: "El núcleo pulposo se desplaza a través de una ruptura en el anillo fibroso, causando una protrusión localizada que puede comprimir nervios cercanos.",
    herniatedDiscDiagram: "Diagrama de un disco herniado mostrando la compresión del nervio espinal",
    diagramCaption: "Diagrama de un disco herniado y cómo afecta los nervios espinales",
    symptomsTitle: "Síntomas de los Discos Herniados",
    symptomsIntro: "Los síntomas de un disco herniado pueden variar dependiendo de la ubicación de la hernia y si está presionando un nervio. Los síntomas más comunes incluyen:",
    symptomLowerBack: "Dolor en la espalda baja (lumbalgia)",
    symptomSciatica: "Dolor que se irradia a las piernas, glúteos o pies (ciática)",
    symptomNumbness: "Entumecimiento u hormigueo en extremidades",
    symptomWeakness: "Debilidad muscular en el área afectada",
    symptomMovement: "Dolor que empeora con ciertos movimientos",
    earlySymptomsFAQ: "¿Cuáles son los primeros síntomas de un disco herniado?",
    earlySymptomsFAQAnswer1: "Los primeros síntomas suelen incluir dolor localizado en la zona afectada de la columna. Si el disco herniado está en la región lumbar, puede sentir dolor en la parte baja de la espalda que se irradia hacia las nalgas y piernas. Si está en la región cervical, puede experimentar dolor en el cuello que se extiende hacia los hombros y brazos.",
    earlySymptomsFAQAnswer2: "Muchos pacientes describen una sensación de hormigueo o entumecimiento antes de que el dolor se intensifique. Es importante buscar atención médica temprana cuando estos síntomas aparecen para prevenir el empeoramiento de la condición.",
    causesTitle: "Causas de los Discos Herniados",
    causesImage: "Factores que contribuyen a discos herniados como mala postura y levantamiento incorrecto",
    causeAging: "Envejecimiento y desgaste natural",
    causeAgingDesc: "Con la edad, los discos pierden agua y flexibilidad, haciéndolos más propensos a herniarse incluso con movimientos normales.",
    causeLifting: "Levantar objetos pesados con mala postura",
    causeLiftingDesc: "El levantamiento incorrecto ejerce presión excesiva en la columna vertebral, aumentando el riesgo de hernia discal.",
    causeRepetitive: "Movimientos repetitivos o lesiones deportivas",
    causeRepetitiveDesc: "Los movimientos repetitivos y las lesiones repentinas durante actividades físicas pueden dañar los discos intervertebrales.",
    causeSedentary: "Estilo de vida sedentario",
    causeSedentaryDesc: "La falta de actividad física debilita los músculos que soportan la columna, aumentando la presión sobre los discos.",
    treatmentsTitle: "Tratamientos para Discos Herniados en Puerto Rico",
    treatmentsIntro: "Existen diferentes enfoques para tratar los discos herniados, desde métodos convencionales hasta terapias especializadas no invasivas.",
    conventionalTreatments: "Tratamientos Convencionales",
    medicationTreatment: "Medicación para el dolor",
    physicalTherapy: "Fisioterapia tradicional",
    steroidInjections: "Inyecciones epidurales de esteroides",
    surgery: "Cirugía (en casos severos)",
    ourSpecialty: "Nuestra Especialidad: Descompresión Espinal",
    howItWorks: "Cómo Funciona:",
    decompressionExplanation: "La terapia de descompresión espinal utiliza una mesa especializada que estira suavemente la columna, creando una presión negativa dentro de los discos. Esto permite que el material herniado retroceda, aliviando la presión sobre los nervios y promoviendo la curación natural.",
    benefits: "Beneficios:",
    benefitNoninvasive: "No invasivo y sin cirugía",
    benefitFastRelief: "Alivio rápido del dolor",
    benefitNoRecovery: "Sin tiempo de recuperación",
    benefitRootCause: "Trata la causa raíz, no solo los síntomas",
    benefitSuccessRate: "Alta tasa de éxito en pacientes con discos herniados",
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqSafety: "¿La descompresión espinal es segura?",
    faqSafetyAnswer: "Sí, la descompresión espinal es un procedimiento no invasivo y seguro cuando es realizado por profesionales certificados. Es una alternativa a la cirugía para tratar discos herniados. Nuestros especialistas tienen años de experiencia y utilizan equipos de última generación para garantizar la seguridad y eficacia del tratamiento.",
    faqDuration: "¿Cuánto dura el tratamiento?",
    faqDurationAnswer: "El tratamiento consiste en 30 sesiones que se espera completar en un período de 3 meses. Cada sesión de descompresión espinal dura aproximadamente 30-45 minutos. Muchos pacientes comienzan a experimentar alivio después de solo unas pocas sesiones, pero completar el plan de tratamiento completo es esencial para obtener resultados óptimos y duraderos.",
    faqSessions: "¿Cuántas sesiones necesito?",
    faqSessionsAnswer: "Cada paciente necesita un mínimo de 30 sesiones para lograr resultados óptimos. Dependiendo de la gravedad de su disco herniado y su respuesta individual al tratamiento, se pueden recomendar sesiones adicionales. Nuestros especialistas evaluarán su progreso durante todo el tratamiento y ajustarán el plan según sea necesario para garantizar el mejor resultado posible para su condición específica.",
    faqInsurance: "¿Aceptan planes médicos?",
    faqInsuranceAnswer: "Aceptamos planes médicos para servicios quiroprácticos y en ocasiones para terapia láser, pero el tratamiento de descompresión espinal no está cubierto por seguros. Llámenos al 787-261-8258 para verificar cuáles de nuestros servicios están cubiertos por su plan de seguro específico. Nuestro equipo administrativo trabajará con usted para maximizar sus beneficios de seguro para los servicios cubiertos.",
    readyForRelief: "¿Listo para aliviar tu dolor de disco herniado?",
    teamReady: "Nuestro equipo de especialistas está listo para ayudarte a recuperar tu calidad de vida con tratamientos no invasivos y efectivos.",

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