import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white">
      <div className="container-custom pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-7 w-7 text-lawgold-400" />
              <span className="text-2xl font-serif text-gray-900">Lawgis</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Escritório de advocacia comprometido com a excelência e resultados efetivos para 
              nossos clientes em diversas áreas do direito.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1.02-1.1h3.2V.46h-4.4C10.4.46 9.3 2.86 9.3 5.46v2H6.16v4.6H9.3v12.28h5.2V12.06h3.53l.44-4.6z" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-lawgold-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-lawgold-600 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-lawgold-600 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#cases" className="text-gray-600 hover:text-lawgold-600 transition-colors">Casos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-lawgold-600 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Áreas de Atuação</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-lawgold-600 transition-colors">Direito Empresarial</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-lawgold-600 transition-colors">Direito Imobiliário</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-lawgold-600 transition-colors">Direito Educacional</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-lawgold-600 transition-colors">Direito Civil</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-lawgold-600 transition-colors">Direito Trabalhista</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>+55 (11) 3333-4444</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>contato@lawgis.com.br</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Lawgis. Todos os direitos reservados.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-lawgold-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-lawgold-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
