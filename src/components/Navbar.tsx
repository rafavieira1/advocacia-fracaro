import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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
    { name: "Áreas de Atuação", href: "practice-areas" },
    { name: "Depoimentos", href: "testimonials" },
    { name: "Contato", href: "contact" }
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
        isScrolled ? "bg-lawblack-950/95 backdrop-blur-sm py-3 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to={isHome ? "#inicio" : "/"} className="flex items-center">
          <img src="/images/navbar.png" alt="Débora B. Fracaro Advogada" className="h-12" />
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-lawgold-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#ccb884] via-[#e0cc96] to-[#ccb884] text-white rounded-full hover:shadow-lg hover:from-[#e0cc96] hover:via-[#f2dda8] hover:to-[#e0cc96] transition-all font-medium text-sm border border-[#e0cc96]/20 animate-shimmer"
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
              <a
                key={link.name}
                href={`#${link.href}`}
                className="text-white/80 hover:text-lawgold-400 transition-colors font-medium py-2"
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-[#ccb884] via-[#e0cc96] to-[#ccb884] text-white rounded-full hover:shadow-lg hover:from-[#e0cc96] hover:via-[#f2dda8] hover:to-[#e0cc96] transition-all font-medium text-center mt-2 border border-[#e0cc96]/20 animate-shimmer"
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
