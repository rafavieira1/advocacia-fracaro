import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AtendimentoSection from "@/components/sections/AtendimentoSection";
import ContactSection from "@/components/sections/ContactSection";
import LocationSection from "@/components/sections/LocationSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Débora B. Fracaro - Advogada";
    
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    handleHashNavigation();
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location]);

  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <PracticeAreasSection />
      {/* <TestimonialsSection /> */}
      <AtendimentoSection />
      <ContactSection />
      <LocationSection />
    </div>
  );
};

export default HomePage;