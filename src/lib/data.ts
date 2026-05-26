export const personalInfo = {
  name: "Damian Barszcz",
  title: "Technolog | Twórca Projektów Webowych",
  email: "damian.barszcz99@gmail.com",
  phone: "535 106 709",
  location: "Padew Narodowa",
  bio: "Technolog z ponad 4-letnim doświadczeniem w optymalizacji procesów produkcyjnych i pracy z systemami ERP. Łączę praktyczną wiedzę warsztatową z certyfikowaną znajomością systemu Catia V5 oraz nowoczesnych narzędzi AI. W pracy zawodowej wykorzystuję umiejętności analityczne do tworzenia dokumentacji technicznej, zarządzania strukturami materiałowymi oraz wdrażania standardów jakości w produkcji narzędziowej. Tworzę również projekty webowe rozwiązujące realne problemy.",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/damixb",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/damixb",
      icon: "github",
    },
  ],
};

export const experiences = [
  {
    id: "waldrex",
    title: "Technolog",
    company: "Waldrex",
    period: "07.2021 – obecnie",
    description:
      "Opracowywanie procesów technologicznych dla oprzyrządowania narzędziowego i lotniczego. Tworzenie struktur materiałowych w ERP oraz typowanie materiałów i normaliów do zakupów. Optymalizacja procesów produkcji, skutkująca redukcją kosztów i poprawą wydajności. Współpraca z działem jakości i rozwiązywanie bieżących problemów na hali produkcyjnej.",
    technologies: ["Catia V5", "Comarch ERP XL", "Dokumentacja Techniczna", "Optymalizacja"],
  },
  {
    id: "rgplus",
    title: "Monter urządzeń elektronicznych",
    company: "R&G PLUS",
    period: "06.2019 – 05.2021",
    description:
      "Precyzyjny montaż systemów elektronicznych w pojazdach szynowych zgodnie z dokumentacją techniczną. Przeprowadzanie testów funkcjonalnych i diagnostyka usterek systemów. Instalacja i konfiguracja oprogramowania dedykowanego pod wymagania klienta.",
    technologies: ["Montaż elektroniczny", "Testowanie", "Diagnostyka", "Konfiguracja IT"],
  },
];

export const education = [
  {
    id: "groszkowski",
    school: "Zespół Szkół im. prof. J. Groszkowskiego",
    degree: "Technik Mechatronik",
    period: "2015 – 2019",
    description: "Zdobycie wiedzy z zakresu mechatroniki, mechaniki, programowania PLC i podstaw inżynierii.",
  },
];

export const skills = [
  {
    category: "Przemysł i Zarządzanie",
    items: [
      { name: "Projektowanie procesów", level: 90 },
      { name: "Dokumentacja techniczna", level: 95 },
      { name: "Comarch ERP XL", level: 85 },
      { name: "Catia V5", level: 80 },
    ],
  },
  {
    category: "Technologie i IT",
    items: [
      { name: "Analiza danych i AI", level: 85 },
      { name: "MS Office", level: 90 },
      { name: "Programowanie PLC", level: 75 },
      { name: "Tworzenie stron (HTML/JS/Next.js)", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: "nailflow",
    title: "NailFlow",
    description: "Aplikacja i strona główna systemu do zarządzania salonami kosmetycznymi.",
    technologies: ["HTML", "CSS", "JS"],
    link: "/nailflow",
    category: "Aplikacja webowa",
  },
  {
    id: "ilezadruk",
    title: "IleZaDruk3D",
    description: "Kalkulator kosztów druku 3D pozwalający na szybką i precyzyjną wycenę.",
    technologies: ["HTML", "CSS", "JS"],
    link: "/ilezadruk3d.html",
    category: "Narzędzie",
  },
  {
    id: "magiawspomnien",
    title: "Magia Wspomnień",
    description: "Elegancka strona landing page dla usług z branży ślubnej / eventowej.",
    technologies: ["HTML", "CSS"],
    link: "/magiawspomnien",
    category: "Strona www",
  },
  {
    id: "dompiekna",
    title: "Dom Piękna",
    description: "Strona internetowa i wizytówka dla salonu urody.",
    technologies: ["HTML", "CSS"],
    link: "/dompiekna.html",
    category: "Strona www",
  },
];

export const navLinks = [
  { label: "O mnie", href: "#about" },
  { label: "Doświadczenie", href: "#experience" },
  { label: "Umiejętności", href: "#skills" },
  { label: "Projekty", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

export const achievements = [
  {
    icon: "🎓",
    title: "Wykorzystanie AI w rozwoju firmy",
    description: "Google & SGH (2025)",
  },
  {
    icon: "🤖",
    title: "Google AI Essentials",
    description: "Coursera (2025)",
  },
  {
    icon: "📈",
    title: "Marketing Internetowy",
    description: "Google & SGH (2023)",
  },
  {
    icon: "📐",
    title: "Catia V5 - kurs podstawowy",
    description: "IBS POLAND (2018)",
  },
];
