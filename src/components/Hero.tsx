import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554599700570";
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative bg-lawblack-950 min-h-screen flex items-center overflow-hidden">
      {/* Background overlay with subtle texture and gradient */}
      <div 
        className="absolute inset-0 bg-[url('/subtle-dark-texture.png')] bg-repeat opacity-10"
      ></div>
      
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-lawblack-950 via-lawblack-900 to-lawblack-950"
        style={{ opacity: 0.95 }}
      ></div>

      <div className="container-custom relative z-10 py-12">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row">
          {/* Logo Section - Only centered on mobile */}
          <AnimatedSection className="w-full max-w-[380px] mb-12 lg:hidden">
            <img 
              src="/images/logo.png" 
              alt="Logo do escritório" 
              className="w-full rounded-full"
            />
          </AnimatedSection>
          
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                Advocacia <br />
                de <span className="text-lawgold-400">Excelência</span> <br />
                Para Seu Caso
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
                Nosso escritório está comprometido em oferecer consultoria jurídica personalizada 
                e de alta qualidade, com soluções inovadoras para proteger seus interesses e garantir seus direitos.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="btn-primary flex items-center gap-2"
                >
                  Tire sua dúvida
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                <a 
                  href="#about" 
                  className="btn-secondary flex items-center gap-2"
                >
                  Me conheça
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600} className="mt-16">
              <div className="px-4 py-2 border border-lawgold-400/30 rounded-lg inline-flex items-center gap-3 bg-lawblack-950">
                <span className="text-lawgold-400 text-xl">★★★★★</span>
                <div className="border-l border-lawgold-400/30 pl-3">
                  <p className="text-white text-sm">Reconhecido entre os melhores escritórios de Medianeira e região</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Logo Section - Only visible on desktop */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <AnimatedSection delay={800}>
              <div className="max-w-[500px] mx-auto">
                <img 
                  src="/images/logo.png" 
                  alt="Advogados experientes" 
                  className="w-full rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


