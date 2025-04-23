import { ArrowRight, Award, Clock, Shield, Instagram, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554599700570";
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/adv.deborabertolini/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:deborabfracaro.adv@gmail.com';
  };

  return (
    <section id="about" className="section-padding pb-2 bg-gray-50">
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
                    src="/src/assets/images/fotovertical.jpg" 
                    alt="Advogados em reunião" 
                    className="w-full h-[447px] object-cover"
                  />
                </div>
                
                {/* Second vertical image (Years Experience) */}
                <div className="bg-black rounded-2xl h-[447px]">
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <span className="text-[64px] leading-none font-serif text-white mb-2">FOTO</span>
                    <span className="text-white/80 text-base">Imagem Ilustrativa</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom horizontal image */}
              <div className="rounded-2xl overflow-hidden w-full">
                <img 
                  src="/src/assets/images/aboutinferior.png" 
                  alt="Advogada em pé" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-[#BFA15C]"></div>
                <h3 className="text-[#BFA15C] font-medium uppercase text-sm">SOBRE</h3>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Minha Trajetória no Direito
              </h2>
              
              <p className="text-lawblack-600 mb-6 text-justify">
                Sou Débora Bertolini Fracaro, advogada regularmente inscrita na OAB/PR sob o nº 101.765. 
                Iniciei minha trajetória no Direito em 2015, com formação concluída em 2019 e aprovação na OAB ainda 
                durante a graduação.
                Desde então, venho atuando de forma independente, sempre pautada na ética, na responsabilidade e na busca 
                por constante aprimoramento. Em março de 2024, fundei o Débora B. Fracaro Advocacia, com o objetivo de 
                oferecer serviços jurídicos de qualidade e comprometimento.
              </p>
              
              <p className="text-lawblack-600 mb-8 text-justify">
                Possuo quatro pós-graduações concluídas nas áreas de Direito do Trabalho com ênfase em auxílio acidentário, 
                Direito Previdenciário, Direito Penal e Processo Penal, e Direito de Família e Sucessões. Atualmente, 
                curso mais quatro especializações: Direito Civil e Processo Civil, Direito Médico e da Saúde, Execução Penal e 
                Direito das Mulheres, além de diversos cursos complementares.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-[#BFA15C]" />
                  </div>
                  <h4 className="font-medium mb-1">Excelência</h4>
                  <p className="text-sm text-gray-500">Compromisso com resultados</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#BFA15C]" />
                  </div>
                  <h4 className="font-medium mb-1">Experiência</h4>
                  <p className="text-sm text-gray-500">Expertise consolidada</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#BFA15C]" />
                  </div>
                  <h4 className="font-medium mb-1">Confiança</h4>
                  <p className="text-sm text-gray-500">Relações duradouras</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-[#BFA15C]"></div>
                  <h3 className="text-[#BFA15C] font-medium uppercase text-sm">ENTRE EM CONTATO</h3>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="group relative inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-[#25D366] text-white rounded-full hover:shadow-lg hover:bg-[#20BD5C] transition-all font-medium overflow-hidden transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </span>
                  </button>

                  <button 
                    onClick={handleInstagramClick}
                    className="group relative inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white rounded-full hover:shadow-lg hover:from-[#C13584] hover:via-[#E1306C] hover:to-[#833AB4] transition-all font-medium overflow-hidden transform hover:-translate-y-0.5 text-sm"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <button 
                    onClick={handleEmailClick}
                    className="group relative inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-[#EA4335] text-white rounded-full hover:shadow-lg hover:bg-[#D93025] transition-all font-medium transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
                      <Mail className="w-4 h-4" />
                      <span className="whitespace-nowrap">E-mail</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quote section - Now full width and centered */}
          <div className="mt-12">
            <div className="p-8 border-l-4 border-[#BFA15C] bg-white rounded shadow-sm">
              <p className="text-lawblack-800 italic text-lg text-center">
                "O escritório nasce com a missão de acolher e representar cada cliente com empatia, 
                excelência técnica e responsabilidade, oferecendo soluções jurídicas personalizadas, 
                sempre pautadas na ética e no respeito à dignidade humana."
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center">
                  <span className="font-semibold text-[#BFA15C]">DF</span>
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
