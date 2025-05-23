import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/helpers";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "554599700570";
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Função para navegação suave para seções
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-white relative">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo e Descrição */}
          <div>
            <img 
              src="/images/footer.png" 
              alt="Débora B. Fracaro Advogada" 
              className="h-16 mb-3"
            />
            <p className="text-lawblack-600 mb-3 text-sm">
              Advocacia especializada e comprometida com a excelência no atendimento 
              e na defesa dos interesses de nossos clientes.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://www.instagram.com/adv.deborabertolini/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-lawblack-200 flex items-center justify-center text-lawblack-600 hover:bg-lawgold-400 hover:border-lawgold-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/adv.deborabertolini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-lawblack-200 flex items-center justify-center text-lawblack-600 hover:bg-lawgold-400 hover:border-lawgold-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base font-medium text-lawblack-900 mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#inicio" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="#about" className="text-lawblack-600 hover:text-lawgold-600 transition-colors" onClick={e => handleSectionClick(e, 'about')}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-lawblack-600 hover:text-lawgold-600 transition-colors" onClick={e => handleSectionClick(e, 'practice-areas')}>
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lawblack-600 hover:text-lawgold-600 transition-colors" onClick={e => handleSectionClick(e, 'contact')}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h3 className="text-base font-medium text-lawblack-900 mb-3">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/areas/direito-criminal" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Direito Criminal
                </Link>
              </li>
              <li>
                <Link to="/areas/direito-civil" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Direito Civil
                </Link>
              </li>
              <li>
                <Link to="/areas/direito-familia-sucessoes" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Direito de Família e Sucessões
                </Link>
              </li>
              <li>
                <Link to="/areas/execucao-penal" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Execução Penal
                </Link>
              </li>
              <li>
                <Link to="/areas/direito-previdenciario" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Direito Previdenciário
                </Link>
              </li>
              <li>
                <Link to="/areas/direito-consumidor" className="text-lawblack-600 hover:text-lawgold-600 transition-colors">
                  Direito do Consumidor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base font-medium text-lawblack-900 mb-3">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3 text-lawblack-600">
                <div className="w-10 h-10 rounded-full border border-lawblack-200 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <p>Avenida José Calegari 820 - Sala 02 - Centro, Medianeira - PR, 85720-025</p>
              </li>
              <li className="flex items-center gap-3 text-lawblack-600">
                <div className="w-10 h-10 rounded-full border border-lawblack-200 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <button onClick={handleWhatsAppClick} className="hover:text-lawgold-600 transition-colors">
                  (45) 9970-0570
                </button>
              </li>
              <li className="flex items-center gap-3 text-lawblack-600">
                <div className="w-10 h-10 rounded-full border border-lawblack-200 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <a href="mailto:advdeborabertolini@hotmail.com" className="hover:text-lawgold-600 transition-colors">
                advdeborabertolini@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-lawblack-100">
        <div className="container-custom py-2">
          <p className="text-center text-lawblack-500 text-xs">
            © {new Date().getFullYear()} Débora B. Fracaro Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
