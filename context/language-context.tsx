"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "de" | "en"

type TranslationParams = {
  [key: string]: string | number
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: TranslationParams) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: (key: string) => key,
})

// Define translations directly in the file
const translations = {
  de: {
    // Navigation
    services: "Dienstleistungen",
    pricing: "Preise",
    projects: "Projekte",
    meowdieval: "Meowdieval Kingdom",
    portfolio: "Portfolio",
    about: "Über mich",
    contact: "Kontakt",
    requestProject: "Projekt anfragen",

    // Hero
    unityDevStudio: "Unity Development Studio",
    unityDevelopment: "Unity Development",
    withFrogitude: "mit Frogitude",
    heroDescription:
      "Entspannte und professionelle Unity-Entwicklung für Games, XR und 3D-Visualisierungen. Mit der richtigen Balance aus Kreativität und Technik.",
    discoverServices: "Dienstleistungen entdecken",

    // About
    aboutMe: "Über mich",
    aboutMeDescription:
      "Ich bin ein deutscher Unity-Entwickler mit über 4 Jahren Berufserfahrung in Unity & C#, spezialisiert auf innovative XR-Lösungen für iOS, HoloLens und Automotive-Anwendungen. Mein Fokus liegt auf performanten, benutzerzentrierten Erlebnissen durch agile Projektmethoden und Clean Code.",
    coreCompetencies: "Meine Kernkompetenzen",
    myExperience: "Meine Erfahrung",

    // Skills
    unitySkill: "Unity & C# (4+ Jahre)",
    arVrSkill: "AR/VR-Entwicklung",
    hololensSkill: "Microsoft HoloLens",
    performanceSkill: "Performance-Optimierung",
    cleanCodeSkill: "Clean Code",
    agileSkill: "Agile Methoden",
    zenjectSkill: "Dependency Injection (Zenject)",
    uniRxSkill: "Reactive Programming (UniRx/UniTask)",

    // Services
    myServices: "Meine Dienstleistungen",
    whatIOffer: "Was ich anbiete",
    servicesDescription:
      "Spezialisiert auf Unity-basierte Entwicklung biete ich maßgeschneiderte Lösungen mit einer entspannten und professionellen Herangehensweise.",
    gameDevelopment: "Game Development",
    gameDevelopmentDesc:
      "Entwicklung von Spielen für PC, Mobile und Konsolen mit Unity. Von der Konzeption bis zum fertigen Produkt.",
    xrDevelopment: "XR Development",
    xrDevelopmentDesc:
      "Professionelle Entwicklung von AR- und VR-Anwendungen für verschiedene Plattformen und Endgeräte.",
    visualization: "3D Visualisierung",
    visualizationDesc:
      "Erstellung interaktiver 3D-Visualisierungen für Architektur, Produktpräsentation und Marketing.",
    whyWorkWithMe: "Warum mit mir zusammenarbeiten?",
    technicalExpertise: "Technische Expertise",
    technicalExpertiseDesc: "Fundierte Kenntnisse in C#, Clean Code und Performance-Optimierung für Unity-Projekte.",
    creativeSolutions: "Kreative Lösungen",
    creativeSolutionsDesc: "Innovative Ansätze für komplexe Probleme und benutzerorientierte Entwicklung.",
    relaxedCollaboration: "Entspannte Zusammenarbeit",
    relaxedCollaborationDesc: "Transparente Kommunikation, agile Arbeitsweise und termingerechte Lieferung.",

    // Game Showcase
    indieGameDev: "Indie Game Development",
    meowdievalKingdom: "Meowdieval Kingdom",
    meowdievalDesc: "Ein gemütliches 3D-Idle-Strategiespiel im mittelalterlichen Katzensetting.",
    comingSoon: "Neue Informationen folgen bald!",
    gameDescription:
      "Wir arbeiten fleißig an unserem gemütlichen Katzenabenteuer. Bleiben Sie dran für Updates und Neuigkeiten zu Meowdieval Kingdom.",
    signUpForUpdates: "Für Updates anmelden",

    // Frogitude Definition
    definition: "Definition",
    whatIsFrogitude: "Was ist Frogitude?",
    frogitudeNoun: "Substantiv, feminin [die]",
    frogitudePronunciation: "Aussprache: [ˈfrɔgɪˌtuːd], auch [ˈfroʊ̯gɪˌtjuːd]",
    frogitudePronunciationUK: "/ˈfrɒɡɪˌtjuːd/",
    frogitudePronunciationUS: "/ˈfrɑːɡɪˌtuːd/",
    frogitudeExplanation:
      'Das Wort Frogitude ist ein Portmanteau, das aus den Wörtern "frog" (Frosch) und "gratitude" (Dankbarkeit) gebildet wurde. Es ruft ein Gefühl spielerischer Wertschätzung für die Momente des Lebens hervor und ermutigt dazu, mit der gleichen Energie und Flexibilität wie ein Frosch in die Dankbarkeit zu springen.',
    explanation: "Erklärung", // Added translation for "explanation"
    meaning: "Bedeutung",
    colloquial: "(umgangssprachlich, scherzhaft)",
    netJargon: "(Netzjargon)",
    frogitudeMeaning1:
      "eine gelassene, eigenwillige und humorvolle Lebenseinstellung, die sich an der vermeintlichen Wesensart eines Frosches orientiert; Mischung aus Ruhe, Spontanität und charmantem Desinteresse an gesellschaftlichen Konventionen.",
    frogitudeMeaning2:
      'Haltung, bei der man mit kindlicher Neugier, Selbstironie und einer Prise Chaos durchs Leben geht; das Leben mit "Frosch-Vibes" leben.',
    origin: "Herkunft",
    frogitudeOrigin:
      'Kombination aus dem englischen "frog" (Frosch) und "gratitude" (Dankbarkeit); beschreibt die dankbare, gelassene Lebenseinstellung eines Frosches, der das Leben in vollen Zügen genießt.',
    examples: "Beispiele",
    frogitudeExample1:
      "Seit sie ihren Job gekündigt hat, lebt sie mit echter Frogitude – barfuß im Garten und völlig entspannt.",
    frogitudeExample2: "Er hat so eine Frogitude, nichts bringt ihn aus der Ruhe.",
    frogitudeInUnity: "Frogitude in der Unity-Entwicklung",
    frogitudeInUnityDescription:
      "Bei uns bedeutet Frogitude eine entspannte, aber professionelle Herangehensweise an die Unity-Entwicklung. Wir kombinieren technische Expertise mit einer gelassenen Arbeitsweise, die Raum für Kreativität und Innovation lässt. Wie ein Frosch auf seinem Seerosenblatt sind wir ruhig und fokussiert, aber immer bereit, spontan auf neue Herausforderungen zu reagieren. Gleichzeitig sind wir dankbar für jedes Projekt und schätzen die Zusammenarbeit mit unseren Kunden.",

    // Pricing
    transparentPricing: "Transparente Preisgestaltung",
    choosePricingModel:
      "Wählen Sie das passende Modell für Ihr Projekt oder kontaktieren Sie mich für ein individuelles Angebot.",
    hourlyRate: "Stundensatz",
    projectBased: "Projektbasiert",
    recommended: "Empfohlen",
    savings: "Ersparnis",
    perHour: "/Stunde",
    perMonth: "/Monat",
    startInquiry: "Anfrage starten",
    openToAlternativeModels: "Offen für alternative Modelle",
    uniqueProjectDescription:
      "Jedes Projekt ist einzigartig. Ich bin offen für verschiedene Zusammenarbeitsmodelle und erstelle gerne ein maßgeschneidertes Angebot, das genau auf Ihre Anforderungen zugeschnitten ist.",
    requestCustomOffer: "Individuelles Angebot anfragen",
    getCustomOffer: "Erhalten Sie ein maßgeschneidertes Angebot für Ihr Projekt",

    // Pricing Plans
    standard: "Standard",
    unityCSharpDev: "Unity & C# Entwicklung",
    "2d3dGameDev": "2D/3D Game Development",
    prototyping: "Prototyping",
    existingProjectOptimization: "Optimierung bestehender Projekte",
    performanceOptimization: "Performance-Optimierung",
    unlimitedRevisions: "Unbegrenzte Revisionen (Bonus)",

    mixedReality: "Mixed Reality",
    arVrDevelopment: "AR/VR Development",
    allFromStandard: "Alles aus Standard",
    arVrDev: "AR/VR Entwicklung",
    hololensQuestDev: "HoloLens/Quest Entwicklung",
    "3dInteractions": "3D-Interaktionen",
    xrOptimization: "XR Optimierung",

    multiplayer: "Multiplayer",
    networkMultiplayer: "Netzwerk & Multiplayer",
    multiplayerImplementation: "Multiplayer-Implementierung",
    networkArchitecture: "Netzwerk-Architektur",
    serverClientCommunication: "Server-Client Kommunikation",
    lobbySystems: "Lobby-Systeme",

    partTime: "Teilzeit",
    hoursPerMonth: "{hours} Stunden pro Monat",
    weeklyUpdates: "Wöchentliche Updates",
    directCommunication: "Direkter Kommunikationskanal",
    flexibleScheduling: "Flexible Zeiteinteilung",

    fullTime: "Vollzeit",
    dailyUpdates: "Tägliche Updates",
    fullAvailability: "Volle Verfügbarkeit",
    prioritizedProcessing: "Priorisierte Bearbeitung",

    project: "Projekt",
    individualProjectBasis: "Individuelle Projektbasis",
    individual: "Individuell",
    customSolution: "Maßgeschneiderte Lösung",
    fixedProjectPrice: "Fester Projektpreis",
    clearMilestones: "Klare Meilensteine",
    detailedProjectPlanning: "Detaillierte Projektplanung",
    aftercare: "Nachbetreuung",

    // Footer
    footerTagline: "Unity-Entwicklung mit Gelassenheit und Expertise",
    navigation: "Navigation",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    allRightsReserved: "Alle Rechte vorbehalten.",
    cookieSettings: "Cookie-Einstellungen",
    accessibility: "Barrierefreiheit",
    theme: "Theme",
    scrollToTop: "Nach oben scrollen",

    // Companies
    workExperience: "Berufserfahrung",
    superswipeGames: "superswipe.games",
    mercedesBenz: "Mercedes Benz",
    fridie: "FRIDIE",
    mercedesBenzTechMotion: "Mercedes-Benz Tech Motion GmbH",
    technologyAndStrategy: "Technology & Strategy Group",
    bosch: "Bosch",

    // Roles
    unityDeveloper: "Unity Developer",
    arEngineer: "Augmented Reality Engineer",
    consultant: "Consultant",
    softwareEngineer: "Software Engineer",

    // Contact
    contactMe: "Kontakt",
    letsTalk: "Lass uns sprechen",
    contactDescription: "Haben Sie ein Projekt oder eine Idee? Kontaktieren Sie mich für ein unverbindliches Gespräch.",
    projectRequest: "Projekt anfragen",
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail",
    messageSubject: "Betreff Ihrer Anfrage",
    messageDescription: "Beschreiben Sie Ihr Projekt oder Ihre Anfrage",
    sendRequest: "Anfrage senden",
    sending: "Wird gesendet...",
    messageSent: "Nachricht gesendet!",
    thankYou: "Vielen Dank für Ihre Anfrage. Ich werde mich so schnell wie möglich bei Ihnen melden.",
    contactInfo: "Kontaktinformationen",
    phone: "Telefon",
    location: "Standort",
    availability: "Verfügbarkeit",
    availableForProjects: "Verfügbar für neue Projekte",
    locationInfo: "Mit Sitz in Erding bin ich für Projekte in ganz Deutschland und international verfügbar.",
    emailMeAt: "Schreiben Sie mir eine E-Mail an",
    sendEmail: "E-Mail senden",

    // --- LEGAL PAGES ---
    // Impressum
    imprintTitle: "Impressum",
    imprintOwner: "Inhaber: Fred Newton Akdogan",
    imprintCompany: "Firmenname: Softwareentwicklung Fred Newton Akdogan",
    imprintAddress: "Franz-Brombach-Str. 8a, 85435 Erding",
    imprintContact: "E-Mail: info@frogitude.com | Telefon: +49 176 62031322",
    imprintTaxId: "Steuernummer: 114/200/31825",
    imprintResponsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding",
    imprintDispute: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    imprintLiability: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",

    // Datenschutz
    privacyTitle: "Datenschutzerklärung",
    privacyIntro: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).",
    privacyDataController: "Verantwortlicher: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding, info@frogitude.com",
    privacyDataCollection: "Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst (z.B. IP-Adresse, verwendeter Browser, Betriebssystem). Diese Daten lassen keine direkten Rückschlüsse auf Ihre Person zu und dienen ausschließlich der technischen Sicherheit und Verbesserung des Angebots.",
    privacyRights: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.",
    privacyContact: "Für Fragen zum Datenschutz erreichen Sie uns unter info@frogitude.com.",

    // AGB
    termsTitle: "Allgemeine Geschäftsbedingungen (AGB)",
    termsIntro: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Softwareentwicklung Fred Newton Akdogan (nachfolgend 'Auftragnehmer') und ihren Kunden (nachfolgend 'Auftraggeber').",
    termsScope: "1. Geltungsbereich: Die AGB gelten für alle Leistungen und Angebote des Auftragnehmers.",
    termsConclusion: "2. Vertragsschluss: Ein Vertrag kommt durch schriftliche Bestätigung des Angebots zustande.",
    termsServices: "3. Leistungen: Der Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot. Änderungen bedürfen der Schriftform.",
    termsPayment: "4. Vergütung: Die Vergütung richtet sich nach dem vereinbarten Angebot. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig.",
    termsLiability: "5. Haftung: Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit. Für Datenverluste wird nur gehaftet, wenn der Auftraggeber regelmäßige Datensicherungen durchgeführt hat.",
    termsFinal: "6. Schlussbestimmungen: Es gilt deutsches Recht. Gerichtsstand ist Erding.",
  },
  en: {
    // Navigation
    services: "Services",
    pricing: "Pricing",
    projects: "Projects",
    meowdieval: "Meowdieval Kingdom",
    portfolio: "Portfolio",
    about: "About Me",
    contact: "Contact",
    requestProject: "Request Project",

    // Hero
    unityDevStudio: "Unity Development Studio",
    unityDevelopment: "Unity Development",
    withFrogitude: "with Frogitude",
    heroDescription:
      "Relaxed and professional Unity development for games, XR, and 3D visualizations. With the right balance of creativity and technical expertise.",
    discoverServices: "Discover Services",

    // About
    aboutMe: "About Me",
    aboutMeDescription:
      "I am a German Unity developer with over 4 years of professional experience in Unity & C#, specializing in innovative XR solutions for iOS, HoloLens, and automotive applications. My focus is on high-performance, user-centered experiences through agile project methods and clean code.",
    coreCompetencies: "My Core Competencies",
    myExperience: "My Experience",

    // Skills
    unitySkill: "Unity & C# (4+ years)",
    arVrSkill: "AR/VR Development",
    hololensSkill: "Microsoft HoloLens",
    performanceSkill: "Performance Optimization",
    cleanCodeSkill: "Clean Code",
    agileSkill: "Agile Methods",
    zenjectSkill: "Dependency Injection (Zenject)",
    uniRxSkill: "Reactive Programming (UniRx/UniTask)",

    // Services
    myServices: "My Services",
    whatIOffer: "What I Offer",
    servicesDescription:
      "Specialized in Unity-based development, I offer tailored solutions with a relaxed and professional approach.",
    gameDevelopment: "Game Development",
    gameDevelopmentDesc:
      "Development of games for PC, mobile, and consoles with Unity. From concept to finished product.",
    xrDevelopment: "XR Development",
    xrDevelopmentDesc: "Professional development of AR and VR applications for various platforms and devices.",
    visualization: "3D Visualization",
    visualizationDesc:
      "Creation of interactive 3D visualizations for architecture, product presentation, and marketing.",
    whyWorkWithMe: "Why Work With Me?",
    technicalExpertise: "Technical Expertise",
    technicalExpertiseDesc: "In-depth knowledge of C#, clean code, and performance optimization for Unity projects.",
    creativeSolutions: "Creative Solutions",
    creativeSolutionsDesc: "Innovative approaches to complex problems and user-centered development.",
    relaxedCollaboration: "Relaxed Collaboration",
    relaxedCollaborationDesc: "Transparent communication, agile methodology, and on-time delivery.",

    // Game Showcase
    indieGameDev: "Indie Game Development",
    meowdievalKingdom: "Meowdieval Kingdom",
    meowdievalDesc: "A cozy 3D idle strategy game set in a medieval cat world.",
    comingSoon: "New information coming soon!",
    gameDescription:
      "We're working diligently on our cozy cat adventure. Stay tuned for updates and news about Meowdieval Kingdom.",
    signUpForUpdates: "Sign up for updates",

    // Frogitude Definition
    definition: "Definition",
    whatIsFrogitude: "What is Frogitude?",
    frogitudeNoun: "Noun, feminine [the]",
    frogitudePronunciation: "Pronunciation: [ˈfrɔgɪˌtuːd], also [ˈfroʊ̯gɪˌtjuːd]",
    frogitudePronunciationUK: "/ˈfrɒɡɪˌtjuːd/",
    frogitudePronunciationUS: "/ˈfrɑːɡɪˌtuːd/",
    frogitudeExplanation:
      "The word Frogitude is a portmanteau created by merging 'frog' (the amphibian known for its leaping ability and adaptability) and 'gratitude' (the quality of being thankful). The term evokes a sense of playful appreciation for life's moments, encouraging one to 'leap' into gratitude with the same energy and flexibility as a frog.",
    explanation: "Explanation", // Added translation for "explanation"
    meaning: "Meaning",
    colloquial: "(colloquial, humorous)",
    netJargon: "(internet jargon)",
    frogitudeMeaning1:
      "a calm, idiosyncratic, and humorous attitude to life that is oriented towards the supposed nature of a frog; a mixture of tranquility, spontaneity, and charming disinterest in social conventions.",
    frogitudeMeaning2:
      'An attitude where one goes through life with childlike curiosity, self-irony, and a pinch of chaos; living life with "frog vibes".',
    origin: "Origin",
    frogitudeOrigin:
      'Combination of "frog" and "gratitude"; describes the grateful, relaxed attitude of a frog that enjoys life to the fullest.',
    examples: "Examples",
    frogitudeExample1:
      "Since she quit her job, she's been living with real frogitude – barefoot in the garden and completely relaxed.",
    frogitudeExample2: "He has such frogitude, nothing disturbs his peace.",
    frogitudeInUnity: "Frogitude in Unity Development",
    frogitudeInUnityDescription:
      "For us, Frogitude means a relaxed but professional approach to Unity development. We combine technical expertise with a calm working method that leaves room for creativity and innovation. Like a frog on its lily pad, we are calm and focused, but always ready to spontaneously respond to new challenges. At the same time, we are grateful for every project and value the collaboration with our clients.",

    // Pricing
    transparentPricing: "Transparent Pricing",
    choosePricingModel: "Choose the right model for your project or contact me for a custom offer.",
    hourlyRate: "Hourly Rate",
    projectBased: "Project Based",
    recommended: "Recommended",
    savings: "Savings",
    perHour: "/hour",
    perMonth: "/month",
    startInquiry: "Start Inquiry",
    openToAlternativeModels: "Open to Alternative Models",
    uniqueProjectDescription:
      "Every project is unique. I am open to different collaboration models and am happy to create a customized offer that is tailored exactly to your requirements.",
    requestCustomOffer: "Request Custom Offer",
    getCustomOffer: "Get a customized offer for your project",

    // Pricing Plans
    standard: "Standard",
    unityCSharpDev: "Unity & C# Development",
    "2d3dGameDev": "2D/3D Game Development",
    prototyping: "Prototyping",
    existingProjectOptimization: "Optimization of Existing Projects",
    performanceOptimization: "Performance Optimization",
    unlimitedRevisions: "Unlimited Revisions (Bonus)",

    mixedReality: "Mixed Reality",
    arVrDevelopment: "AR/VR Development",
    allFromStandard: "Everything from Standard",
    arVrDev: "AR/VR Development",
    hololensQuestDev: "HoloLens/Quest Development",
    "3dInteractions": "3D Interactions",
    xrOptimization: "XR Optimization",

    multiplayer: "Multiplayer",
    networkMultiplayer: "Network & Multiplayer",
    multiplayerImplementation: "Multiplayer Implementation",
    networkArchitecture: "Network Architecture",
    serverClientCommunication: "Server-Client Communication",
    lobbySystems: "Lobby Systems",

    partTime: "Part Time",
    hoursPerMonth: "{hours} hours per month",
    weeklyUpdates: "Weekly Updates",
    directCommunication: "Direct Communication Channel",
    flexibleScheduling: "Flexible Scheduling",

    fullTime: "Full Time",
    dailyUpdates: "Daily Updates",
    fullAvailability: "Full Availability",
    prioritizedProcessing: "Prioritized Processing",

    project: "Project",
    individualProjectBasis: "Individual Project Basis",
    individual: "Individual",
    customSolution: "Custom Solution",
    fixedProjectPrice: "Fixed Project Price",
    clearMilestones: "Clear Milestones",
    detailedProjectPlanning: "Detailed Project Planning",
    aftercare: "Aftercare",

    // Footer
    footerTagline: "Unity Development with Serenity and Expertise",
    navigation: "Navigation",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    allRightsReserved: "All rights reserved.",
    cookieSettings: "Cookie Settings",
    accessibility: "Accessibility",
    theme: "Theme",
    scrollToTop: "Scroll to Top",

    // Companies
    workExperience: "Work Experience",
    superswipeGames: "superswipe.games",
    mercedesBenz: "Mercedes Benz",
    fridie: "FRIDIE",
    mercedesBenzTechMotion: "Mercedes-Benz Tech Motion GmbH",
    technologyAndStrategy: "Technology & Strategy Group",
    bosch: "Bosch",

    // Roles
    unityDeveloper: "Unity Developer",
    arEngineer: "Augmented Reality Engineer",
    consultant: "Consultant",
    softwareEngineer: "Software Engineer",

    // Contact
    contactMe: "Contact",
    letsTalk: "Let's Talk",
    contactDescription: "Do you have a project or idea? Contact me for a no-obligation conversation.",
    projectRequest: "Project Request",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    messageSubject: "Subject of your inquiry",
    messageDescription: "Describe your project or inquiry",
    sendRequest: "Send Request",
    sending: "Sending...",
    messageSent: "Message Sent!",
    thankYou: "Thank you for your inquiry. I will get back to you as soon as possible.",
    contactInfo: "Contact Information",
    phone: "Phone",
    location: "Location",
    availability: "Availability",
    availableForProjects: "Available for new projects",
    locationInfo: "Based in Erding, I am available for projects throughout Germany and internationally.",
    emailMeAt: "Email me at",
    sendEmail: "Send Email",

    // --- LEGAL PAGES ENGLISH ---
    // Imprint
    imprintTitle: "Imprint",
    imprintOwner: "Owner: Fred Newton Akdogan",
    imprintCompany: "Company: Softwareentwicklung Fred Newton Akdogan",
    imprintAddress: "Franz-Brombach-Str. 8a, 85435 Erding, Germany",
    imprintContact: "Email: info@frogitude.com | Phone: +49 176 62031322",
    imprintTaxId: "Tax Number: 114/200/31825",
    imprintResponsible: "Responsible for content according to § 55 Abs. 2 RStV: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding, Germany",
    imprintDispute: "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    imprintLiability: "As a service provider, we are responsible for our own content on these pages in accordance with general laws (§ 7 Abs.1 TMG). However, according to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",

    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacyIntro: "The protection of your personal data is very important to us. We process your data exclusively on the basis of the legal regulations (GDPR, TMG).",
    privacyDataController: "Controller: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding, info@frogitude.com",
    privacyDataCollection: "When you visit this website, general information is automatically collected (e.g. IP address, browser used, operating system). This data does not allow any direct conclusions to be drawn about your person and is used exclusively for technical security and to improve the offer.",
    privacyRights: "You have the right to information, correction, deletion, restriction, data portability and objection. If you believe that the processing of your data violates data protection law, you can complain to the supervisory authority.",
    privacyContact: "If you have any questions about data protection, please contact us at info@frogitude.com.",

    // Terms & Conditions
    termsTitle: "Terms & Conditions",
    termsIntro: "These Terms & Conditions apply to all contracts between Softwareentwicklung Fred Newton Akdogan (hereinafter 'Contractor') and its clients (hereinafter 'Client').",
    termsScope: "1. Scope: These terms apply to all services and offers of the Contractor.",
    termsConclusion: "2. Conclusion of contract: A contract is concluded by written confirmation of the offer.",
    termsServices: "3. Services: The scope of services results from the respective offer. Changes require written form.",
    termsPayment: "4. Payment: The remuneration is based on the agreed offer. Payments are due within 14 days of invoicing.",
    termsLiability: "5. Liability: The Contractor is only liable for intent and gross negligence. Liability for data loss only applies if the Client has carried out regular data backups.",
    termsFinal: "6. Final provisions: German law applies. Place of jurisdiction is Erding.",
  },
}

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("de")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.split("-")[0]
      if (browserLanguage === "en") {
        setLanguage("en")
      }
    }
  }, [])

  useEffect(() => {
    // Save language preference when it changes
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string, params?: TranslationParams): string => {
    const currentTranslations = translations[language] || translations.de
    let translation = currentTranslations[key as keyof typeof translations['de']] || key

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, String(paramValue))
      })
    }

    return translation
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
