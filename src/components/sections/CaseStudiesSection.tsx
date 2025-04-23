
import { Play } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const cases = [
  {
    id: 1,
    title: "Fusão corporativa bem-sucedida",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Mediação de conflito imobiliário",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Recuperação judicial de empresa",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Resolução de disputa trabalhista",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="cases" className="section-padding bg-lawblack-950">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-lawgold-400"></div>
              <p className="text-lawgold-400 font-medium uppercase text-sm">CASOS DE SUCESSO</p>
              <div className="h-px w-12 bg-lawgold-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Explore Nossos Casos
            </h2>
            
            <p className="text-white/70 max-w-2xl mx-auto">
              Conheça algumas de nossas histórias de sucesso e como ajudamos nossos clientes 
              a superar desafios jurídicos complexos com estratégias eficientes e personalizadas.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-lawblack-950 to-transparent opacity-70"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-lawgold-500 hover:bg-lawgold-600 transition-all w-16 h-16 rounded-full flex items-center justify-center"
                    aria-label="Assistir vídeo"
                  >
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl text-white font-serif mb-2">{caseItem.title}</h3>
                  <p className="text-white/70 text-sm hidden group-hover:block transition-all">
                    Clique para assistir como resolvemos este caso complexo e entregamos resultados.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
