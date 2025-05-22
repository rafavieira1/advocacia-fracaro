import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const practiceAreas = [
    { name: "Direito Criminal", href: "/areas/direito-criminal" },
    { name: "Direito Civil", href: "/areas/direito-civil" },
    { name: "Direito de Família e Sucessões", href: "/areas/direito-familia-sucessoes" },
    { name: "Execução Penal", href: "/areas/execucao-penal" },
    { name: "Direito Previdenciário", href: "/areas/direito-previdenciario" },
    { name: "Direito do Consumidor", href: "/areas/direito-consumidor" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "inicio" },
    { name: "Sobre", href: "about" },
    { name: "Áreas de Atuação", href: "practice-areas", hasDropdown: true },
    { name: "Contato", href: "contact" },
    { name: "Localização", href: "location" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (!isHome) {
      navigate(`/#${href}`);
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-lawblack-950 backdrop-blur-sm py-3 shadow-md" : "bg-lawblack-950 py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to={isHome ? "#inicio" : "/"} className="flex items-center">
          <img src="/images/navbar.png" alt="Débora B. Fracaro Advogada" className="h-12" />
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => {
                if (link.hasDropdown) {
                  // Pequeno delay para permitir que o mouse alcance o submenu
                  setTimeout(() => {
                    const submenu = document.querySelector('.submenu');
                    if (submenu && !submenu.matches(':hover')) {
                      setActiveDropdown(null);
                    }
                  }, 100);
                }
              }}
            >
              <a
                href={`#${link.href}`}
                onClick={(e) => !link.hasDropdown && handleNavClick(e, link.href)}
                className="text-white/80 hover:text-lawgold-400 transition-colors text-sm font-medium inline-flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>

              {/* Dropdown menu */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div 
                  className="submenu absolute top-full left-0 mt-2 w-72 bg-lawblack-950 rounded-lg shadow-lg border border-[#BFA15C]/20 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.href}
                      to={area.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-[#BFA15C] hover:bg-white/5 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#BFA15C] via-[#DFC686] to-[#BFA15C] text-white rounded-full hover:shadow-lg transition-all font-medium text-sm border border-[#BFA15C]/20 animate-shimmer"
          style={{
            backgroundSize: '200% 100%',
          }}
        >
          Entre em contato
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-lawblack-950/95 backdrop-blur-sm shadow-md p-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={`#${link.href}`}
                  className="text-white/80 hover:text-lawgold-400 transition-colors font-medium py-2 block"
                  onClick={(e) => {
                    if (!link.hasDropdown) {
                      handleNavClick(e, link.href);
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                </a>
                
                {/* Mobile dropdown items */}
                {link.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-lawgold-400/20">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.href}
                        to={area.href}
                        className="block py-2 text-sm text-white/80 hover:text-lawgold-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-[#BFA15C] via-[#DFC686] to-[#BFA15C] text-white rounded-full hover:shadow-lg transition-all font-medium text-center mt-2"
              style={{
                backgroundSize: '200% 100%',
              }}
              onClick={(e) => {
                handleNavClick(e, "contact");
                setMobileMenuOpen(false);
              }}
            >
              Consulta Gratuita
            </a>
          </div>
        )}
      </div>

      {/* Linha dourada */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#BFA15C] via-[#DFC686] to-[#BFA15C] transition-opacity duration-300",
        isScrolled ? "opacity-100" : "opacity-0"
      )}></div>

      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }
          .animate-shimmer {
            animation: shimmer 2s linear infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
