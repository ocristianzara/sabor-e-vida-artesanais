import React from "react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1c0f09]">
      {/* VÍDEO DE PLANO DE FUNDO FULLSCREEN */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          src="/assets/video-manteiga.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.08] scale-105"
        />
        
        {/* Overlays de iluminação e atmosfera cinematográfica */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f09] via-black/40 to-[#1c0f09]/85" />
        <div className="absolute inset-0 bg-[#26160e]/30 mix-blend-multiply" />
      </div>

      {/* Conteúdo Centralizado Editorial sobre o Vídeo */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20 text-center flex flex-col items-center justify-center">
        
        {/* Badge do Mercado */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#df9c5e] text-xs font-semibold tracking-widest uppercase mb-6 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-[#df9c5e] animate-pulse" />
          Mercado Municipal de Campos do Jordão • Box 10
        </div>

        {/* Headline Principal */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] tracking-tight text-white drop-shadow-xl max-w-4xl mx-auto">
          O sabor do tempo e do afeto em <br className="hidden sm:inline" />
          <span className="font-normal italic text-[#df9c5e]">cada fatia.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
          Pães caseiros feitos com fermentação paciente, farinhas selecionadas e receitas de família. Crosta dourada irresistível e miolo que abraça o paladar.
        </p>

        {/* CTAs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5512996319214?text=Ol%C3%A1!%20Quero%20experimentar%20os%20p%C3%A3es%20artesanais%20da%20Sabor%20e%20Vida!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#bb7840] hover:bg-[#a36431] text-white px-9 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Quero Experimentar</span>
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <a
            href="#scroll-experience"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:border-white"
          >
            <span>Conheça Nossa Experiência</span>
            <svg className="w-4 h-4 text-[#df9c5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
        </div>

        {/* Métricas / Selos */}
        <div className="mt-12 pt-6 grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/20 max-w-xl mx-auto w-full text-white">
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#df9c5e]">100%</p>
            <p className="text-xs uppercase tracking-wider text-white/80 mt-0.5">Artesanal & Natural</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#df9c5e]">Fornadas</p>
            <p className="text-xs uppercase tracking-wider text-white/80 mt-0.5">Diárias & Quentinhas</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#df9c5e]">Campos</p>
            <p className="text-xs uppercase tracking-wider text-white/80 mt-0.5">Do Jordão • Box 10</p>
          </div>
        </div>

      </div>

      {/* Indicador de Descida */}
      <a href="#scroll-experience" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2">
        <span className="text-[11px] uppercase tracking-widest font-medium">Descubra a Produção</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#df9c5e] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
