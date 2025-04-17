
import { Link } from "react-router-dom";
import { Building, Home, GraduationCap, Scale, FileText, Users, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const practiceAreas = [
  {
    title: "Direito Empresarial",
    description: "Nossa equipe especializada entende as complexidades legais que empresas enfrentam e oferece soluções personalizadas para proteger seus interesses comerciais e garantir conformidade legal.",
    icon: <Building className="h-10 w-10 text-lawblack-800" />,
    className: "service-gold",
    slug: "direito-empresarial"
  },
  {
    title: "Direito Imobiliário",
    description: "Assessoria completa em questões de propriedade, contratos de compra e venda, locação, regularização de imóveis e resolução de conflitos relacionados a propriedades.",
    icon: <Home className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-imobiliario"
  },
  {
    title: "Direito Educacional",
    description: "Representação jurídica para instituições de ensino e estudantes, garantindo conformidade legal e defesa de direitos educacionais em todos os níveis acadêmicos.",
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-educacional"
  },
  {
    title: "Direito Civil",
    description: "Orientação jurídica em questões familiares, contratos, responsabilidade civil e proteção de direitos pessoais, com foco em soluções eficientes e personalizadas.",
    icon: <FileText className="h-10 w-10 text-lawblack-800" />,
    className: "service-gold",
    slug: "direito-civil"
  },
  {
    title: "Direito Trabalhista",
    description: "Defesa de empregados e empregadores, assessoria em relações de trabalho, negociações sindicais e representação em processos administrativos e judiciais.",
    icon: <Users className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-trabalhista"
  },
  {
    title: "Direito Tributário",
    description: "Planejamento tributário, consultoria fiscal, defesa em processos administrativos e judiciais, visando economia legal de impostos e regularização fiscal.",
    icon: <Scale className="h-10 w-10 text-white" />,
    className: "service-dark",
    slug: "direito-tributario"
  }
];

const PracticeAreasSection = () => {
  return (
    <section id="practice-areas" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-lawgold-400"></div>
              <p className="text-lawgold-600 font-medium uppercase text-sm">ÁREAS DE ATUAÇÃO</p>
            </div>
            <h2 className="section-title max-w-2xl">
              Expertise Jurídica Especializada
            </h2>
            <p className="text-lawblack-600 max-w-2xl">
              Oferecemos assessoria jurídica em diversas áreas do direito, com profissionais especializados e comprometidos com a excelência no atendimento e resultados para nossos clientes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link 
                to={`/areas/${area.slug}`} 
                key={index} 
                className={`card-service ${area.className} cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{area.title}</h3>
                <p className="mb-8 opacity-80">{area.description}</p>
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
