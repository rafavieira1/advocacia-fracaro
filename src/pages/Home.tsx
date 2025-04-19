import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  useEffect(() => {
    document.title = "Débora B. Fracaro - Advogada";
  }, []);

  return (
    <div className="min-h-screen">
      <div style={{ backgroundColor: 'red', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>TESTE - PÁGINA HOME</h1>
      </div>
      <Navbar />
      <Hero />
      <PracticeAreasSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home; 