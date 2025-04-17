import { ArrowRight, Award, Clock, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side with images */}
            <div className="lg:w-1/2 flex flex-col gap-4">
              {/* Top row with two vertical images */}
              <div className="grid grid-cols-2 gap-6">
                {/* First vertical image */}
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/images/f7068d6c-b08f-44aa-95ba-479e297d6bf2.png" 
                    alt="Advogados em reunião" 
                    className="w-full h-[447px] object-cover"
                  />
                </div>
                
                {/* Second vertical image (Years Experience) */}
                <div className="bg-black rounded-2xl h-[447px]">
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <span className="text-[64px] leading-none font-serif text-white mb-2">20+</span>
                    <span className="text-white/80 text-base">Years Experience</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom horizontal image */}
              <div className="rounded-2xl overflow-hidden w-full">
                <img 
                  src="/images/468411a4-4a9a-46bc-9439-816ede6379a8.png" 
                  alt="Advogada em pé" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-lawgold-400"></div>
                <p className="text-lawgold-600 font-medium uppercase text-sm">SOBRE NÓS</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Excelência Jurídica com Tradição e Inovação
              </h2>
              
              <p className="text-lawblack-600 mb-6">
                Fundado há mais de duas décadas, o escritório Lawgis consolidou-se como referência 
                no mercado jurídico brasileiro, combinando tradição, conhecimento técnico e inovação 
                para oferecer as melhores soluções legais aos nossos clientes.
              </p>
              
              <p className="text-lawblack-600 mb-8">
                Nossa equipe de advogados altamente qualificados atua de forma estratégica, buscando 
                resultados efetivos e construindo relacionamentos duradouros baseados na confiança, ética 
                e excelência profissional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-lawgold-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-lawgold-600" />
                  </div>
                  <h4 className="font-medium mb-1">Excelência</h4>
                  <p className="text-sm text-gray-500">Compromisso com resultados</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-lawgold-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-lawgold-600" />
                  </div>
                  <h4 className="font-medium mb-1">Experiência</h4>
                  <p className="text-sm text-gray-500">Expertise consolidada</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-lawgold-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-lawgold-600" />
                  </div>
                  <h4 className="font-medium mb-1">Confiança</h4>
                  <p className="text-sm text-gray-500">Relações duradouras</p>
                </div>
              </div>
              
              <div className="mb-8 p-4 border-l-4 border-lawgold-400 bg-white rounded shadow-sm">
                <p className="text-lawblack-800 italic">
                  "Nosso compromisso é unir conhecimento jurídico sólido com atendimento personalizado, 
                  garantindo soluções efetivas para os desafios legais de nossos clientes."
                </p>
                
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lawgold-100 flex items-center justify-center">
                    <span className="font-semibold text-lawgold-700">DK</span>
                  </div>
                  <div>
                    <p className="font-medium">Daniyel Karlos</p>
                    <p className="text-sm text-lawblack-500">Sócio Fundador</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#practice-areas" 
                className="btn-primary flex items-center gap-2 w-fit"
              >
                Nossas Áreas de Atuação
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
