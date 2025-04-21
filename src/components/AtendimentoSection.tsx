import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Calendar, FileSearch, Scale, MessageCircle } from "lucide-react";

const AtendimentoSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Agendamento",
      description: "Entre em contato para agendar uma consulta inicial"
    },
    {
      icon: FileSearch,
      title: "Análise do Caso",
      description: "Vamos entender todos os detalhes e identificar as melhores estratégias."
    },
    {
      icon: Scale,
      title: "Ação Imediata",
      description: "Com sua autorização, tomamos as medidas legais necessárias para proteger seus direitos."
    },
    {
      icon: MessageCircle,
      title: "Acompanhamento",
      description: "Você será informado(a) sobre cada etapa do processo."
    }
  ];

  return (
    <section id="atendimento" className="relative py-24 bg-gradient-to-b from-lawblack-950 to-lawblack-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/subtle-dark-texture.png')] bg-repeat opacity-5"></div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-lawblack-950 to-transparent"></div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-lawgold-400 text-sm tracking-wider uppercase mb-4 inline-block">
              NOSSO PROCESSO
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Como funciona o <span className="text-lawgold-400">atendimento</span>
            </h2>
            <p className="text-white/70 text-lg mb-16">
              Conheça nosso processo de atendimento, desenvolvido para proporcionar 
              a melhor experiência e resultados para nossos clientes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 200}>
              <div className="group h-full">
                <div className="relative h-full p-8 rounded-2xl border border-lawgold-400/10 bg-gradient-to-br from-lawblack-800 to-lawblack-900 text-center transition-all duration-300 hover:border-lawgold-400/30 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-lawgold-400/10 to-transparent flex items-center justify-center group-hover:from-lawgold-400/20 group-hover:to-lawgold-400/5 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-lawgold-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AtendimentoSection; 