import React from "react";

export function FinalCta() {
  const mapsUrl = "https://www.google.com/maps/place/Mercado+Municipal+de+Campos+do+Jord%C3%A3o/@-22.7391792,-45.5929924,1598a,75y,316.15h,89.36t/data=!3m7!1e1!3m5!1sSksoNIjNiShnwJlccnzWcg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.6376965383602311%26panoid%3DSksoNIjNiShnwJlccnzWcg%26yaw%3D316.15011662536364!7i16384!8i8192!4m14!1m7!3m6!1s0x94cc89d05bc2285b:0xc6cb80505686b755!2sMercado+Municipal+de+Campos+do+Jord%C3%A3o!8m2!3d-22.7391093!4d-45.5931953!16s%2Fg%2F11bwqfswmm!3m5!1s0x94cc89d05bc2285b:0xc6cb80505686b755!8m2!3d-22.7391093!4d-45.5931953!16s%2Fg%2F11bwqfswmm?entry=ttu";

  return (
    <>
      {/* SEÇÃO DO MAPA & LOCALIZAÇÃO COM PIN PISCANTE */}
      <section id="localizacao" className="py-24 relative bg-[#faf5f2] border-b border-[#e4d3c7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#bb7840] font-semibold bg-[#bb7840]/10 px-4 py-1.5 rounded-full border border-[#bb7840]/20">
              Como Chegar
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#26160e]">
              Venha nos visitar no <br className="hidden sm:inline" />
              <span className="italic text-[#bb7840] font-normal">Mercado Municipal</span>
            </h2>
            <p className="text-base text-[#7a6558] font-light">
              Estamos no <strong>Box 10</strong>, esperando você com o cheirinho inconfundível de pão saindo do forno quentinho.
            </p>
          </div>

          {/* Container do Mapa com Pin Piscante */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#26160e]">
            <div className="w-full h-[450px] sm:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=-22.7391093,-45.5931953&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.97]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Mercado Municipal de Campos do Jordão"
              />
            </div>

            {/* Overlaid Pin Callout */}
            <div className="absolute top-6 left-6 right-6 sm:right-auto z-20 max-w-sm">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#e4d3c7] hover:border-[#bb7840] transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  {/* Pin piscante com animação radar */}
                  <div className="relative flex-shrink-0 mt-1">
                    <span className="absolute -inset-2 rounded-full bg-[#bb7840]/40 animate-ping pointer-events-none" />
                    <div className="relative w-10 h-10 rounded-full bg-[#bb7840] text-white flex items-center justify-center shadow-lg shadow-[#bb7840]/40">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[11px] uppercase tracking-wider text-[#bb7840] font-bold">
                        Localização Exata
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#26160e] leading-tight mt-0.5">
                      Mercado Municipal • Box 10
                    </h4>
                    <p className="text-xs text-[#7a6558] mt-0.5">Campos do Jordão, SP</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#bb7840] group-hover:text-[#a36431] uppercase tracking-wider">
                      <span>Abrir no Google Maps</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO FINAL — AGRADECIMENTO & CONVERSÃO */}
      <section id="contato" className="py-28 relative overflow-hidden bg-[#26160e] text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#bb7840]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#df9c5e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bb7840]/20 border border-[#bb7840]/30 text-[#df9c5e] mb-2">
            <svg className="w-8 h-8 stroke-current stroke-1.5 fill-none" viewBox="0 0 24 24">
              <path d="M12 2v20M8 5c1 1 3 1 4 0M12 5c1 1 3 1 4 0M7 9c1.5 1.5 3.5 1.5 5 0M12 9c1.5 1.5 3.5 1.5 5 0M6 13c2 2 4 2 6 0M12 13c2 2 4 2 6 0M5 17c2.5 2.5 4.5 2.5 7 0M12 17c2.5 2.5 4.5 2.5 7 0" />
            </svg>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] max-w-3xl mx-auto">
            AGORA SÓ FALTA UMA COISA: <br />
            <span className="italic text-[#df9c5e] font-normal">EXPERIMENTAR.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            A Sabor e Vida Artesanais chegou a Campos do Jordão para transformar sua maneira de apreciar um bom pão caseiro.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/5512996319214?text=Ol%C3%A1!%20Quero%20fazer%20meu%20pedido%20na%20Sabor%20e%20Vida%20Artesanais!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#bb7840] hover:bg-[#a36431] text-white px-10 py-5 rounded-full font-bold text-sm sm:text-base tracking-widest uppercase shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>QUERO PEDIR O MEU</span>
            </a>

            <a
              href="https://www.instagram.com/saborevidaartesanais"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            >
              <span>Instagram @saborevidaartesanais</span>
            </a>
          </div>

          {/* Cards com Pin Piscante no Endereço */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 text-left">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-[#bb7840]/40 p-5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group block"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bb7840] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#df9c5e]" />
                </span>
                <p className="text-xs uppercase tracking-wider text-[#df9c5e] font-semibold">
                  Localização • Abrir Mapa &rarr;
                </p>
              </div>
              <p className="text-sm font-medium text-white group-hover:text-[#df9c5e] transition-colors">
                Mercado Municipal
              </p>
              <p className="text-xs text-white/70">Box 10 • Campos do Jordão</p>
            </a>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-[#df9c5e] font-semibold mb-1">Horário de Fornada</p>
              <p className="text-sm font-medium text-white">Segunda a Sábado</p>
              <p className="text-xs text-white/70">Das 8h às 18h</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-[#df9c5e] font-semibold mb-1">WhatsApp Oficial</p>
              <p className="text-sm font-medium text-white">(12) 99631-9214</p>
              <p className="text-xs text-white/70">Pedidos rápidos e reservas</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-[#df9c5e] font-semibold mb-1">Compromisso</p>
              <p className="text-sm font-medium text-white">100% Caseiro</p>
              <p className="text-xs text-white/70">Sem conservantes artificiais</p>
            </div>
          </div>

          <div className="pt-8">
            <p className="font-serif text-2xl sm:text-3xl font-light italic text-[#df9c5e]/90">
              "Obrigado por chegar até aqui. Nos vemos no primeiro pedido."
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
