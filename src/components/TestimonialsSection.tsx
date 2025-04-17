import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ana Luiza Costa",
    company: "Diretora, Imobiliária Horizonte",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "Após anos lidando com questões imobiliárias complexas, encontrar o escritório Lawgis foi uma verdadeira mudança de paradigma. Profissionalismo e eficiência impecáveis.",
    rating: 5
  },
  {
    id: 2,
    name: "Roberto Almeida",
    company: "Proprietário, Edifício Central",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "Quando enfrentamos um litígio complexo relacionado ao nosso patrimônio, a equipe do Lawgis demonstrou não apenas competência jurídica, mas também uma dedicação impressionante ao nosso caso.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Mendes",
    company: "CEO, TechSolutions Ltda.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "O escritório Lawgis foi fundamental para a reestruturação legal da nossa empresa. A assessoria jurídica precisa e atenciosa nos permitiu expandir com segurança para novos mercados.",
    rating: 5
  },
  {
    id: 4,
    name: "Fernanda Santos",
    company: "Reitora, Instituto Educacional Superior",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "A consultoria em direito educacional fornecida pelo Lawgis foi essencial para adequarmos nossa instituição às novas legislações. Atendimento personalizado e soluções estratégicas.",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");
  const visibleTestimonials = 2;
  
  // Atualiza a altura do container quando o componente monta
  useEffect(() => {
    const updateHeight = () => {
      const container = document.querySelector(".testimonials-container");
      if (container) {
        const height = container.getBoundingClientRect().height;
        setContainerHeight(`${height}px`);
      }
    };

    // Atualiza após um pequeno delay para garantir que o conteúdo foi renderizado
    setTimeout(updateHeight, 100);
    window.addEventListener("resize", updateHeight);
    
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    if (startIndex + visibleTestimonials < testimonials.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(testimonials.length - visibleTestimonials);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };
  
  return (
    <section id="testimonials" className="section-padding pb-32 bg-lawblack-950 relative">
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-lawgold-400"></div>
              <p className="text-lawgold-400 font-medium uppercase text-sm">DEPOIMENTOS</p>
              <div className="h-px w-12 bg-lawgold-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-8">
              O Que Nossos Clientes Dizem
            </h2>
            
            <p className="text-white/70 max-w-2xl mx-auto">
              A satisfação de nossos clientes é nossa prioridade. Conheça as opiniões de quem confiou em nosso escritório para resolver questões jurídicas importantes.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div 
            className="relative overflow-hidden"
            style={{ height: containerHeight }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={startIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="testimonials-container grid grid-cols-1 lg:grid-cols-2 gap-12 absolute w-full"
              >
                {testimonials.slice(startIndex, startIndex + visibleTestimonials).map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="bg-lawblack-900 p-10 rounded-xl border border-lawblack-800 transition-all duration-300 hover:border-lawgold-400"
                  >
                    <div className="flex gap-4 items-center mb-8">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-xl font-medium">{testimonial.name}</h4>
                        <p className="text-white/60">{testimonial.company}</p>
                        <div className="flex text-lawgold-400 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-16 gap-6 relative z-20">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-lawgold-500 flex items-center justify-center text-lawgold-500 hover:bg-lawgold-500 hover:text-white transition-all"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-lawgold-500 flex items-center justify-center text-lawgold-500 hover:bg-lawgold-500 hover:text-white transition-all"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Gradient overlay for smooth transition */}
      <div className="absolute left-0 right-0 bottom-0 h-32 z-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.5) 50%, white 100%)' }}></div>
    </section>
  );
};

export default TestimonialsSection;
