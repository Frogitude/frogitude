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

    // Hero (SEO-optimiert)
    unityDevStudio: "Unity Entwicklung, XR & 3D Visualisierung – Freelancer aus Deutschland",
    unityDevelopment: "Unity Entwicklung, XR & 3D Visualisierung",
    withFrogitude: "mit Frogitude – Ihr Freelancer für Games, AR/VR & Softwareentwicklung",
    heroDescription:
      "Ich bin Fred Newton Akdogan, erfahrener Unity Entwickler und Freelancer aus Erding, Deutschland. Ich biete professionelle Unity-Entwicklung, AR/VR-Lösungen, 3D-Visualisierung und Game Development für Unternehmen, Startups und Agenturen. Spezialisiert auf C#, HoloLens, Mobile, PC und individuelle Softwarelösungen.",
    discoverServices: "Unity & XR Dienstleistungen entdecken",

    // About (SEO-optimiert)
    aboutMe: "Über mich – Unity Entwickler & XR Freelancer aus Deutschland",
    aboutMeDescription:
      "Ich bin Fred Newton Akdogan, erfahrener Unity Entwickler und Freelancer aus Erding, Deutschland. Mit über {years} Jahren Berufserfahrung in Unity & C# biete ich professionelle Unity Entwicklung, AR/VR-Lösungen, 3D Visualisierung und Game Development für Unternehmen, Startups und Agenturen. Spezialisiert auf HoloLens, Mobile, PC, Clean Code und individuelle Softwarelösungen. Ihr Partner für innovative XR-Projekte und performante Anwendungen.",
    coreCompetencies: "Kernkompetenzen: Unity, XR, 3D, C#, HoloLens, Prototyping, Clean Code",
    myExperience: "Erfahrung & Referenzen als Unity Freelancer",

    // Skills
    unitySkill: "Unity & C# ({years}+ Jahre)",
    arVrSkill: "AR/VR-Entwicklung",
    hololensSkill: "Microsoft HoloLens",
    performanceSkill: "Performance-Optimierung",
    cleanCodeSkill: "Clean Code",
    agileSkill: "Agile Methoden",
    zenjectSkill: "Dependency Injection (Zenject)",
    uniRxSkill: "Reactive Programming (UniRx/UniTask)",

    // Services (SEO-optimiert)
    myServices: "Unity & XR Dienstleistungen",
    whatIOffer: "Was ich als Unity Entwickler anbiete",
    servicesDescription:
      "Unity Entwicklung für Unternehmen, Startups und Agenturen: AR/VR-Lösungen, 3D-Visualisierung, Game Development, Prototyping und individuelle Softwareentwicklung. Fokus auf Performance, Benutzerfreundlichkeit und innovative Technologien.",
    gameDevelopment: "Game Development mit Unity",
    gameDevelopmentDesc:
      "Entwicklung von Spielen für PC, Mobile und Konsolen mit Unity. Von der Konzeption bis zum fertigen Produkt. Erfahrung mit Indie Games, Mobile Games und Multiplayer-Lösungen.",
    xrDevelopment: "AR/VR Entwicklung & XR Solutions",
    xrDevelopmentDesc:
      "Professionelle Entwicklung von Augmented Reality (AR) und Virtual Reality (VR) Anwendungen für verschiedene Plattformen: HoloLens, Mobile, WebXR und mehr. Fokus auf innovative Nutzererlebnisse.",
    visualization: "3D Visualisierung & Simulation",
    visualizationDesc:
      "Erstellung interaktiver 3D-Visualisierungen für Architektur, Produktpräsentation, Marketing und Simulation. Maßgeschneiderte Lösungen für Unternehmen und Agenturen.",
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
    meowdievalInfo: "Ein gemütlicher Mittelalter-Königreich-Simulator – baue, erkunde und entspanne mit Katzen!",
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

    // Footer (SEO-optimiert)
    footerTagline: "Unity Entwicklung, XR & 3D Visualisierung – Freelancer für Games, AR/VR & Softwareentwicklung in Deutschland",
    navigation: "Navigation & Leistungen",
    legal: "Rechtliches & Informationen",
    imprint: "Impressum – Unity Freelancer Deutschland",
    privacy: "Datenschutz – Softwareentwicklung & Web",
    terms: "AGB – Unity Entwicklung & XR Services",
    allRightsReserved: "Alle Rechte vorbehalten. Unity Entwicklung & XR Freelancer Fred Newton Akdogan.",
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

    // Hero (SEO-optimized)
    unityDevStudio: "Unity Development, XR & 3D Visualization – Freelancer in Germany",
    unityDevelopment: "Unity Development, XR & 3D Visualization",
    withFrogitude: "with Frogitude – Your Freelancer for Games, AR/VR & Software Development",
    heroDescription:
      "I am Fred Newton Akdogan, an experienced Unity developer and freelancer based in Erding, Germany. I offer professional Unity development, AR/VR solutions, 3D visualization, and game development for companies, startups, and agencies. Specialized in HoloLens, mobile, PC, clean code, and custom software solutions. Your partner for innovative XR projects and high-performance applications.",
    discoverServices: "Discover Unity & XR Services",

    // About (SEO-optimized)
    aboutMe: "About Me – Unity Developer & XR Freelancer in Germany",
    aboutMeDescription:
      "I am Fred Newton Akdogan, an experienced Unity developer and freelancer based in Erding, Germany. With over {years} years of professional experience in Unity & C#, I offer professional Unity development, AR/VR solutions, 3D visualization, and game development for companies, startups, and agencies. Specialized in HoloLens, mobile, PC, clean code, and custom software solutions. Your partner for innovative XR projects and high-performance applications.",
    coreCompetencies: "Core Competencies: Unity, XR, 3D, C#, HoloLens, Prototyping, Clean Code",
    myExperience: "Experience & References as a Unity Freelancer",

    // Skills
    unitySkill: "Unity & C# ({years}+ years)",
    arVrSkill: "AR/VR Development",
    hololensSkill: "Microsoft HoloLens",
    performanceSkill: "Performance Optimization",
    cleanCodeSkill: "Clean Code",
    agileSkill: "Agile Methods",
    zenjectSkill: "Dependency Injection (Zenject)",
    uniRxSkill: "Reactive Programming (UniRx/UniTask)",

    // Services (SEO-optimized)
    myServices: "Unity & XR Services",
    whatIOffer: "What I Offer as a Unity Developer",
    servicesDescription:
      "Unity development for companies, startups, and agencies: AR/VR solutions, 3D visualization, game development, prototyping, and custom software development. Focused on performance, usability, and innovative technologies.",
    gameDevelopment: "Game Development with Unity",
    gameDevelopmentDesc:
      "Development of games for PC, mobile, and consoles with Unity. From concept to finished product. Experience with indie games, mobile games, and multiplayer solutions.",
    xrDevelopment: "AR/VR Development & XR Solutions",
    xrDevelopmentDesc:
      "Professional development of Augmented Reality (AR) and Virtual Reality (VR) applications for various platforms: HoloLens, mobile, WebXR, and more. Focused on innovative user experiences.",
    visualization: "3D Visualization & Simulation",
    visualizationDesc:
      "Creation of interactive 3D visualizations for architecture, product presentation, marketing, and simulation. Tailored solutions for companies and agencies.",
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
    meowdievalInfo: "A cozy medieval kingdom simulator – build, explore, and relax with cats!",
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

    // Footer (SEO-optimized)
    footerTagline: "Unity Development, XR & 3D Visualization – Freelancer for Games, AR/VR & Software Development in Germany",
    navigation: "Navigation & Services",
    legal: "Legal & Information",
    imprint: "Imprint – Unity Freelancer Germany",
    privacy: "Privacy Policy – Software Development & Web",
    terms: "Terms & Conditions – Unity Development & XR Services",
    allRightsReserved: "All rights reserved. Unity Development & XR Freelancer Fred Newton Akdogan.",
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

  const getYearsOfExperience = () => {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear + 1;
  }

  const t = (key: string, params?: TranslationParams): string => {
    const currentTranslations = translations[language] || translations.de
    let translation = currentTranslations[key as keyof typeof translations['de']] || key

    // Always inject years of experience if the key is aboutMeDescription or unitySkill
    if ((key === "aboutMeDescription" || key === "unitySkill") && !params?.years) {
      params = { ...params, years: getYearsOfExperience() }
    }

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, String(paramValue))
      })
    }

    return translation
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
