
import { Building, Home, GraduationCap, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceItems = [
  {
    title: "Direito Empresarial",
    description: "Nossa equipe especializada entende as complexidades legais que empresas enfrentam e oferece soluções personalizadas para proteger seus interesses.",
    icon: <Building className="h-10 w-10 text-lawblack-800" />,
    className: "service-gold"
  },
  {
    title: "Direito Imobiliário",
    description: "Assessoria completa em questões de propriedade, contratos de compra e venda, locação e resolução de conflitos relacionados a imóveis.",
    icon: <Home className="h-10 w-10 text-white" />,
    className: "service-dark"
  },
  {
    title: "Direito Educacional",
    description: "Representação jurídica para instituições de ensino e estudantes, garantindo conformidade legal e defesa de direitos educacionais.",
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    className: "service-dark"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-lawgold-400"></div>
              <p className="text-lawgold-600 font-medium uppercase text-sm">NOSSOS SERVIÇOS</p>
            </div>
            <h2 className="section-title max-w-2xl">
              Pessoas não ganham casos, Advogados sim
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <div 
                key={index} 
                className={`card-service ${service.className}`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="mb-8 opacity-80">{service.description}</p>
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 font-medium hover:text-lawgold-500 transition-colors"
                >
                  Saiba Mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
