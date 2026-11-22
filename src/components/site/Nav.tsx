import React, { useState, useEffect } from "react";

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
          ? "bg-[#1c0f09]/90 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-[#1c0f09]/60 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="bg-white/90 hover:bg-white px-3 py-1 rounded-xl transition-all duration-300 shadow-md">
            <img
              src="/assets/logo.png"
              alt="Sabor e Vida Artesanais"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90 tracking-wide">
          <a href="#hero" className="hover:text-[#df9c5e] transition-colors">
            Início
          </a>
          <a href="#scroll-experience" className="hover:text-[#df9c5e] transition-colors">
            A Experiência
          </a>
          <a href="#galeria" className="hover:text-[#df9c5e] transition-colors">
            Nossos Pães
          </a>
          <a href="#fundador" className="hover:text-[#df9c5e] transition-colors">
            O Padeiro
          </a>
          <a href="#localizacao" className="hover:text-[#df9c5e] transition-colors">
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
