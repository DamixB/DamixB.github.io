import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "DamixB",
  url: "https://damixb.github.io",
  sameAs: [
    "https://github.com/DamixB",
    "https://linkedin.com/in/damixb",
    "https://instagram.com/damixb",
  ],
  jobTitle: "Developer & Creator",
  description:
    "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
};

export default function Home() {
  return (
    <div className="home-theme-wrapper flex-1 flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1" id="main-content">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
