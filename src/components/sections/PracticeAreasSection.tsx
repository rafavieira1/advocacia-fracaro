import { Link } from "react-router-dom";
import { Scale, Home, Users, FileText, Shield, ShoppingCart, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const practiceAreas = [
  {
    title: "Direito Criminal",
    description: "Atuação na defesa de direitos e garantias individuais em investigações, processos criminais com acompanhamento desde o inquérito policial até a sentença e fases recursais, sempre buscando um julgamento justo e dentro da legalidade.",
    icon: <Scale className="h-10 w-10 text-white" />,
    className: "bg-gradient-to-br from-[#BFA15C] via-[#8E7744] to-[#BFA15C] text-white",
    slug: "direito-criminal"
  },
  {
    title: "Direito Civil",
    description: "Consultoria e representação em temas que envolvem obrigações, responsabilidade civil, contratos, posse e propriedade, oferecendo suporte completo para a defesa dos interesses dos clientes nas relações privadas.",
    icon: <Home className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-civil"
  },
  {
    title: "Direito de Família e Sucessões",
    description: "Atendimento humanizado em questões como divórcio, guarda, pensão alimentícia, reconhecimento de união estável, inventários e partilhas, buscando sempre soluções justas e equilibradas para as partes envolvidas.",
    icon: <Users className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-familia-sucessoes"
  },
  {
    title: "Execução Penal",
    description: "Acompanhamento jurídico especializado na fase de cumprimento da pena, incluindo pedidos de progressão de regime, livramento condicional, indulto e demais direitos do apenado, visando assegurar o respeito às normas legais e à dignidade do condenado.",
    icon: <Shield className="h-10 w-10 text-white" />,
    className: "bg-gradient-to-br from-[#BFA15C] via-[#8E7744] to-[#BFA15C] text-white",
    slug: "execucao-penal"
  },
  {
    title: "Direito Previdenciário",
    description: "Atuação voltada à obtenção e revisão de benefícios previdenciários, como aposentadorias, auxílios e pensões, garantindo que os direitos dos segurados sejam respeitados junto ao INSS e à Justiça.",
    icon: <FileText className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-previdenciario"
  },
  {
    title: "Direito do Consumidor",
    description: "Defesa dos direitos do consumidor em situações de cobrança indevida, vícios em produtos ou serviços, cláusulas abusivas e relações contratuais desequilibradas, com foco na reparação de danos e no cumprimento do Código de Defesa do Consumidor.",
    icon: <ShoppingCart className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-consumidor"
  }
];

const PracticeAreasSection = () => {
  return (
    <section id="practice-areas" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#BFA15C]"></div>
              <p className="text-[#BFA15C] font-medium uppercase text-sm">ÁREAS DE ATUAÇÃO</p>
            </div>
            <h2 className="section-title max-w-2xl">
            Especialidades Jurídicas que Fazem a Diferença
            </h2>
            <p className="text-lawblack-600 max-w-2xl">
            Atendimento especializado nas principais demandas do Direito, com soluções personalizadas para cada cliente.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link 
                to={`/areas/${area.slug}`} 
                key={index} 
                className={`card-service ${area.className} cursor-pointer hover:shadow-lg transition-shadow ${
                  area.slug === 'direito-criminal' ? 'order-first md:order-none' :
                  area.slug === 'execucao-penal' ? 'order-2 md:order-none' :
                  area.slug === 'direito-civil' ? 'order-3 md:order-none' :
                  area.slug === 'direito-familia-sucessoes' ? 'order-4 md:order-none' :
                  area.slug === 'direito-previdenciario' ? 'order-5 md:order-none' :
                  'order-last md:order-none'
                }`}
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{area.title}</h3>
                <p className="mb-8 opacity-80 card-description">{area.description}</p>
                <span 
                  className="flex items-center gap-2 font-medium hover:text-lawgold-500 transition-colors"
                >
                  Saiba Mais <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
