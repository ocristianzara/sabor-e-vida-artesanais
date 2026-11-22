import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5ede8]/95 backdrop-blur-md shadow-sm border-b border-[#e4d3c7]"
          : "bg-[#f5ede8]/90 backdrop-blur-md border-b border-[#e4d3c7]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/logo.png"
            alt="Sabor e Vida Artesanais"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#432616] tracking-wide">
          <a href="#hero" className="hover:text-[#bb7840] transition-colors">
            Início
          </a>
          <a href="#scroll-experience" className="hover:text-[#bb7840] transition-colors">
            A Experiência
          </a>
          <a href="#galeria" className="hover:text-[#bb7840] transition-colors">
            Nossos Pães
          </a>
          <a href="#fundador" className="hover:text-[#bb7840] transition-colors">
            O Padeiro
          </a>
          <a href="#localizacao" className="hover:text-[#bb7840] transition-colors">
            Onde Estamos
          </a>
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/5512996319214?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20p%C3%A3es%20artesanais."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#bb7840] hover:bg-[#a36431] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          Pedir no WhatsApp
        </a>
      </div>
    </header>
  );
}
