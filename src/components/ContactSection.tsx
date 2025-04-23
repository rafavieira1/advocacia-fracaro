import { useState } from "react";
import { Handshake, Users, ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554599700570";
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <AnimatedSection className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#BFA15C] p-1 rounded-full">
                <Handshake className="h-5 w-5 text-white" />
              </div>
              <p className="text-[#BFA15C] font-medium uppercase text-sm tracking-wider">CONTATO</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-gray-900">
              Vamos Conversar<br />Pelo WhatsApp
            </h2>
            
            <p className="text-gray-600 mb-12 max-w-xl">
              Agende sua consulta diretamente pelo WhatsApp. Nossa equipe está pronta para atender você de forma ágil e personalizada.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="h-16 w-16 rounded-full bg-[#BFA15C]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-8 w-8 text-[#BFA15C]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Atendimento Rápido</h3>
                  <p className="text-gray-600">
                    Respostas ágeis e diretas pelo WhatsApp, facilitando a comunicação e agilizando seu atendimento
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="h-16 w-16 rounded-full bg-[#BFA15C]/10 flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-[#BFA15C]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600">
                    Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução jurídica
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="lg:w-1/2">
            <div className="relative p-8 md:p-12 rounded-2xl border border-lawgold-400/10 bg-gradient-to-br from-lawblack-800 to-lawblack-900 text-center transition-all duration-300 hover:border-lawgold-400/30 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-xl bg-[#BFA15C]/10 flex items-center justify-center mx-auto mb-6 group-hover:from-[#BFA15C]/20 group-hover:to-[#BFA15C]/5 transition-all duration-300">
                  <MessageCircle className="h-8 w-8 text-[#BFA15C]" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-white">Fale Conosco pelo WhatsApp</h3>
                <p className="text-white/70 mb-8">
                  Clique no botão abaixo para iniciar uma conversa com nossa equipe
                </p>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors w-full max-w-md mx-auto"
              >
                <MessageCircle className="h-6 w-6" />
                Iniciar Conversa no WhatsApp
              </button>
              
              <p className="text-white/50 text-sm mt-4">
                Horário de atendimento: Segunda a sexta das 9:00 às 11:30 e das 14h às 17h
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
