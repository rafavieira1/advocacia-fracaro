
import { useState, useEffect } from "react";
import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#about" },
    { name: "Áreas de Atuação", href: "#practice-areas" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-lawblack-950/95 backdrop-blur-sm py-3 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-lawgold-400" />
          <span className="text-2xl font-serif text-white">Lawgis</span>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-lawgold-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact"
          className="hidden md:block px-6 py-2 bg-lawgold-500 text-white rounded-full hover:bg-lawgold-600 transition-all font-medium text-sm"
        >
          Consulta Gratuita
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
                href={link.href}
                className="text-white/80 hover:text-lawgold-400 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 bg-lawgold-500 text-white rounded-full hover:bg-lawgold-600 transition-all font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consulta Gratuita
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
