import { useState } from "react";
import { Handshake, Users, ArrowRight, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos pelo contato. Retornaremos em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <AnimatedSection className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lawgold-400 p-1 rounded-full">
                <Handshake className="h-5 w-5 text-white" />
              </div>
              <p className="text-lawgold-400 font-medium uppercase text-sm tracking-wider">CONTATO</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-gray-900">
              Vamos Construir Algo<br />Incrível Juntos
            </h2>
            
            <p className="text-gray-600 mb-12 max-w-xl">
              Cada cliente é único. Você pode personalizar nossa assessoria jurídica para atender às necessidades 
              específicas do seu caso com apenas algumas conversas. Nossa abordagem é personalizada e eficiente.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="h-16 w-16 rounded-full bg-lawgold-100 flex items-center justify-center shrink-0">
                  <Handshake className="h-8 w-8 text-lawgold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">350+ Casos de Sucesso</h3>
                  <p className="text-gray-600">
                    De ações empresariais a defesa de direitos, nossa experiência abrange diversas áreas do direito
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="h-16 w-16 rounded-full bg-lawgold-100 flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-lawgold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">500+ Clientes Satisfeitos</h3>
                  <p className="text-gray-600">
                    Nossa equipe dedicada garante que cada cliente receba atenção personalizada e resultados concretos
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="lg:w-1/2">
            <div className="bg-lawgold-100 p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-3xl font-serif mb-8 text-gray-900">Envie-nos uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome Completo"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 h-12 rounded-lg bg-white text-black border-0 focus:ring-2 focus:ring-lawgold-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Profissional"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 h-12 rounded-lg bg-white text-black border-0 focus:ring-2 focus:ring-lawgold-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefone com DDD"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 h-12 rounded-lg bg-white text-black border-0 focus:ring-2 focus:ring-lawgold-400"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 h-12 rounded-lg bg-white text-black border-0 focus:ring-2 focus:ring-lawgold-400"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Digite sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black border-0 focus:ring-2 focus:ring-lawgold-400 resize-none"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4 ml-1" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
