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

      <div className="container-custom relative z-10 py-12 pt-32">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row">
          {/* Logo Section - Only centered on mobile */}
          <AnimatedSection className="w-full max-w-[380px] mb-12 lg:hidden">
            <img 
              src="/images/logo.webp"
              alt="Logo do escritório" 
              className="w-full rounded-full"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </AnimatedSection>
          
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                Advocacia <br />
                de <span className="bg-gradient-to-r from-[#BFA15C] via-[#DFC686] to-[#BFA15C] text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Excelência</span> <br />
                Para Seu Caso
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 text-justify">
                Nosso escritório está comprometido em oferecer consultoria jurídica personalizada 
                e de alta qualidade, com soluções inovadoras para proteger seus interesses e garantir seus direitos.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="btn-primary flex items-center gap-2 text-sm px-4 py-3 min-w-[120px]"
                >
                  Tire sua dúvida
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                <a 
                  href="#about" 
                  className="btn-secondary flex items-center gap-2 text-sm px-4 py-3 min-w-[120px]"
                >
                  Me conheça
                  <ArrowRight className="h-4 w-4 icon-gradient-gold" />
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600} className="mt-16">
              <div className="px-4 py-2 border-2 border-[#BFA15C] rounded-lg inline-flex items-center gap-3 bg-lawblack-950">
                <span className="text-gradient-gold text-xl">★★★★★</span>
                <div className="border-l-2 border-[#BFA15C] pl-3">
                  <p className="text-white text-sm">Reconhecido entre os melhores escritórios de Medianeira e região</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Logo Section - Only visible on desktop */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <AnimatedSection delay={800}>
              <div className="flex items-center justify-center h-full min-h-[70vh]">
                <div className="w-full">
                  <img 
                    src="/images/logo.webp" 
                    alt="Advogados experientes" 
                    className="w-full rounded-2xl max-w-[1200px]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


