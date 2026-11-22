export function Founder() {
  return (
    <section id="fundador" className="py-24 relative bg-white border-y border-[#e4d3c7]/60 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#bb7840]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Foto do Fundador */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#bb7840]/20 rounded-3xl blur-2xl transform rotate-3" />
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5ede8] bg-[#faf5f2]">
                <img
                  src="/assets/founder.png"
                  alt="Fundador da Sabor e Vida Artesanais"
                  className="w-full h-auto object-cover max-h-[550px]"
                />
                
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#e4d3c7]">
                  <p className="font-serif text-xl font-bold text-[#26160e]">Feito com as próprias mãos</p>
                  <p className="text-xs text-[#7a6558] mt-0.5">Amor e dedicação diária no Mercado Municipal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo da História */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#bb7840] font-semibold bg-[#bb7840]/10 px-4 py-1.5 rounded-full border border-[#bb7840]/20">
              Quem Faz o Seu Pão
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#26160e] leading-tight">
              "Para nós, o pão não é apenas um produto. É um <span className="italic text-[#bb7840]">abraço quentinho</span> em forma de receita."
            </h2>

            <div className="space-y-4 text-[#7a6558] font-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                A <strong className="text-[#26160e] font-semibold">Sabor e Vida Artesanais</strong> nasceu do desejo de resgatar o sabor autêntico do pão caseiro — aquele que perfuma a casa inteira e reúne a família ao redor da mesa.
              </p>
              <p>
                Instalados no coração de Campos do Jordão, no <strong className="text-[#26160e] font-semibold">Mercado Municipal (Box 10)</strong>, acordamos cedo todos os dias para sovar, dobrar e assar pães frescos, sem pressa e sem aditivos industriais.
              </p>
              <p>
                Cada fornada é a celebração do tempo: farinhas puras, fermentação equilibrada e muito carinho para que cada mordida seja uma experiência inesquecível.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e4d3c7] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div>
                <p className="font-serif text-2xl font-bold text-[#26160e]">Sabor e Vida Artesanais</p>
                <p className="text-xs uppercase tracking-widest text-[#bb7840] font-semibold mt-0.5">Campos do Jordão • SP</p>
              </div>
              <div className="h-10 w-px bg-[#e4d3c7] hidden sm:block" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-[#7a6558]">Atendimento Presencial</p>
                <p className="text-sm font-semibold text-[#432616]">Segunda a Sábado • 8h às 18h</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
