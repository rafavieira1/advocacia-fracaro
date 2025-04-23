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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    <section id="testimonials" className="section-padding pb-6 bg-lawblack-950 relative">
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-[#BFA15C] text-sm tracking-wider uppercase mb-4 inline-block">
              DEPOIMENTOS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
              A satisfação de nossos clientes é nossa prioridade. Conheça as opiniões de quem 
              confiou em nosso escritório para resolver questões jurídicas importantes.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className="bg-lawblack-900 p-10 rounded-xl border border-[#BFA15C] transition-all duration-300 hover:border-[#DFC686]">
                <div className="flex flex-col md:flex-row gap-8 items-start min-h-[300px]">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="flex text-lawgold-400 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-white/80 italic text-xl leading-relaxed mb-6 flex-grow">{testimonials[currentIndex].text}</p>
                    <div>
                      <h4 className="text-white text-xl font-medium">{testimonials[currentIndex].name}</h4>
                      <p className="text-white/60">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#BFA15C] flex items-center justify-center text-[#BFA15C] hover:bg-[#BFA15C] hover:text-white transition-all"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#BFA15C] flex items-center justify-center text-[#BFA15C] hover:bg-[#BFA15C] hover:text-white transition-all"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
