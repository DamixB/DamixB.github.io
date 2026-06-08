export const personalInfo = {
  name: "DamixB",
  title: "Developer & Creator",
  bio: "Buduję narzędzia i rozwiązania cyfrowe łącząc inżynierię z nowoczesnymi technologiami webowymi i AI.",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/damixb",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/DamixB",
      icon: "github",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/damixb",
      icon: "instagram",
    },
  ],
};

export const projects = [
  {
    id: "scadia",
    emoji: "🤖",
    title: "Scadia",
    description: "Narzędzie AI do generowania parametrycznych modeli 3D w OpenSCAD z podglądem w Three.js — stwórz model słowami, obejrzyj w przeglądarce i pobierz STL na drukarkę.",
    technologies: ["Three.js", "Gemini API", "OpenSCAD", "WebGL"],
    link: "/scadia",
    category: "Narzędzie AI",
  },
  {
    id: "dompiekna",
    emoji: "💅",
    title: "Dom Piękna",
    description: "Strona internetowa i wizytówka dla salonu manicure/pedicure z integracją tagów NFC (NailFlow) umożliwiającą automatyczne przekierowanie klientek na stronę rezerwacji.",
    technologies: ["HTML5", "CSS3", "JavaScript", "NFC Tags"],
    link: "/dompiekna",
    category: "Strona www",
  },
  {
    id: "nailflow",
    emoji: "🌐",
    title: "NailFlow",
    description: "System zarządzania dla salonów kosmetycznych — landing page, formularz kontaktowy, regulamin i integracja z tagami NFC do przekierowania klientów.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    link: "/nailflow",
    category: "Aplikacja webowa",
  },
  {
    id: "magiawspomnien",
    emoji: "🎨",
    title: "Magia Wspomnień",
    description: "Usługa renowacji starych zdjęć z wykorzystaniem AI — odnawianie, kolorowanie i retusz fotografii. Landing page z galerią efektów przed/po i formularzem zamówienia.",
    technologies: ["HTML5", "CSS3", "AI Image Restoration", "Responsive"],
    link: "/magiawspomnien",
    category: "Strona www",
  },
  {
    id: "ilezadruk",
    emoji: "⚙️",
    title: "IleZaDruk3D",
    description: "Kalkulator kosztów druku 3D — intuicyjne narzędzie do szybkiej i precyzyjnej wyceny wydruku na podstawie parametrów materiału, czasu i rozmiaru.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Algorytmy wycen"],
    link: "/ilezadruk3d",
    category: "Narzędzie",
  },
  {
    id: "przelicznik-anodowanie",
    emoji: "📏",
    title: "Przelicznik Anodowanie",
    description: "Przelicznik wymiarów do anodowania twardego — narzędzie do szybkiego obliczania naddatków i wymiarów końcowych detali przed i po procesie anodowania twardego.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Kalkulator"],
    link: "/przelicznik-anodowanie",
    category: "Narzędzie",
  },
  {
    id: "kalkulator-powloki",
    emoji: "🧮",
    title: "Kalkulator Powłok",
    description: "Kalkulator wymiarów surowych dla detali CNC pod powłoki galwaniczne. Obsługuje wymiary zewnętrzne, wewnętrzne, wałki, otwory, rowki i odsadzenia.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Kalkulator"],
    link: "/kalkulator-powloki",
    category: "Narzędzie",
  },
  {
    id: "kompendium-barmanskie",
    emoji: "🍹",
    title: "Kompendium Barmańskie",
    description: "Kompleksowa baza wiedzy barmańskiej — receptury koktajli, teoria miksologii, sprzęt barowy i przegląd marek alkoholowych.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "/kompendium-barmanskie",
    category: "Baza wiedzy",
  },
];

export const navLinks = [
  { label: "Projekty", href: "/#projects" },
  { label: "Kontakt", href: "/#contact" },
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
