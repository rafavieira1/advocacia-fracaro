import { ArrowRight, Award, Clock, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554599700570";
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
                  src="/images/aboutinferior.png" 
                  alt="Advogada em pé" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-lawgold-400"></div>
                <h3 className="text-lawgold-600 font-medium uppercase text-sm">SOBRE</h3>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Minha Trajetória no Direito
              </h2>
              
              <p className="text-lawblack-600 mb-6">
                Sou Débora Bertolini Fracaro, advogada regularmente inscrita na OAB/PR sob o nº 101.765. 
                Iniciei minha trajetória no Direito em 2015, com formação concluída em 2019 e aprovação na OAB ainda 
                durante a graduação.
                Desde então, venho atuando de forma independente, sempre pautada na ética, na responsabilidade e na busca 
                por constante aprimoramento. Em março de 2024, fundei o Débora B. Fracaro Advocacia, com o objetivo de 
                oferecer serviços jurídicos de qualidade e comprometimento.
              </p>
              
              <p className="text-lawblack-600 mb-8">
                Possuo quatro pós-graduações concluídas nas áreas de Direito do Trabalho com ênfase em auxílio acidentário, 
                Direito Previdenciário, Direito Penal e Processo Penal, e Direito de Família e Sucessões. Atualmente, 
                curso mais quatro especializações: Direito Civil e Processo Civil, Direito Médico e da Saúde, Execução Penal e 
                Direito das Mulheres, além de diversos cursos complementares.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
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
              
              <button 
                onClick={handleWhatsAppClick}
                className="btn-primary flex items-center gap-2 w-fit"
              >
                Fale Comigo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quote section - Now full width and centered */}
          <div className="mt-24">
            <div className="p-8 border-l-4 border-lawgold-400 bg-white rounded shadow-sm">
              <p className="text-lawblack-800 italic text-lg text-center">
                "O escritório nasce com a missão de acolher e representar cada cliente com empatia, 
                excelência técnica e responsabilidade, oferecendo soluções jurídicas personalizadas, 
                sempre pautadas na ética e no respeito à dignidade humana."
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-lawgold-100 flex items-center justify-center">
                  <span className="font-semibold text-lawgold-700">DF</span>
                </div>
                <div>
                  <p className="font-medium">Débora B. Fracaro</p>
                  <p className="text-sm text-lawblack-500">Advogada</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
