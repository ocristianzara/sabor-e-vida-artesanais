import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#1c0f09] text-white/70 py-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="Sabor e Vida"
            className="h-10 w-auto object-contain brightness-200"
          />
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Sabor e Vida Artesanais. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
          <a href="#hero" className="hover:text-[#df9c5e] transition-colors">
            Início
          </a>
          <a href="#scroll-experience" className="hover:text-[#df9c5e] transition-colors">
            Experiência
          </a>
          <a href="#galeria" className="hover:text-[#df9c5e] transition-colors">
            Pães
          </a>
          <a href="#fundador" className="hover:text-[#df9c5e] transition-colors">
            História
          </a>
          <a
            href="https://www.instagram.com/saborevidaartesanais"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#df9c5e] transition-colors"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
