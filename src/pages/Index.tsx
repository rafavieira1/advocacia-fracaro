import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import AtendimentoSection from "@/components/AtendimentoSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Débora B. Fracaro - Advocacia";
    
    // Handle hash navigation when coming back from detail pages
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
    
    // Run on mount and when location changes
    handleHashNavigation();
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location]); // Adiciona location como dependência

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <AboutSection />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <AtendimentoSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
