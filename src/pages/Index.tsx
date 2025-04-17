
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Lawgis - Escritório de Advocacia";
    
    // Handle hash navigation when coming back from detail pages
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Run on mount and when hash changes
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

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
      <Footer />
    </div>
  );
};

export default Index;
