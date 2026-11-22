import React from "react";

const PRODUCTS = [
  {
    image: "/assets/paes/foto-01.png",
    tag: "O Mais Querido",
    title: "Pão Caseiro Tradicional",
    description: "A receita clássica da família. Massa leve, miolo aerado e sabor reconfortante perfeito para começar o dia com manteiga da serra.",
    badge: "Fornadas Diárias",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20Caseiro%20Tradicional.",
  },
  {
    image: "/assets/paes/foto-02.png",
    tag: "Recheio Generoso",
    title: "Pão Recheado da Casa",
    description: "Carregado com temperos caseiros e recheios suculentos enrolados em camadas de massa macia que desmancha na boca.",
    badge: "Receita Especial",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20Recheado.",
  },
  {
    image: "/assets/paes/foto-03.png",
    tag: "Crosta Crocante",
    title: "Pão Artesanal Dourado",
    description: "Descanso prolongado para realçar aromas e notas amendoadas naturais da farinha. Textura sublime e corte impecável.",
    badge: "Fermentação Longa",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20Artesanal%20Dourado.",
  },
  {
    image: "/assets/paes/foto-04.png",
    tag: "Trançado Manual",
    title: "Pão Nobre Trançado",
    description: "Moldado à mão com dobras nobres que criam uma textura única e desfiante a cada pedaço. O favorito das tardes em família.",
    badge: "Feito à Mão",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20Nobre%20Tran%C3%A7ado.",
  },
  {
    image: "/assets/paes/foto-05.png",
    tag: "Clima da Serra",
    title: "Pão Caseiro da Serra",
    description: "Inspirado nas manhãs frias de Campos do Jordão, perfeito quentinho saindo do forno com café passado na hora.",
    badge: "Edição Diária",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20Caseiro%20da%20Serra.",
  },
  {
    image: "/assets/paes/06.png",
    tag: "Primeira Dobra",
    title: "Pão Rústico Primeira Dobra",
    description: "Processo de dobras ritmadas que confere uma estrutura de miolo invejável e retenção de sabor inigualável.",
    badge: "Técnica Artesanal",
    whatsappText: "Ol%C3%A1!%20Gostaria%20de%20pedir%20o%20P%C3%A3o%20R%C3%BAstico.",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-28 relative bg-[#f5ede8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#bb7840] font-semibold bg-[#bb7840]/10 px-4 py-1.5 rounded-full border border-[#bb7840]/20">
            Nossa Vitrine Artesanal
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#26160e]">
            Feitos à mão, <span className="italic text-[#bb7840]">um a um.</span>
          </h2>
          <p className="text-base text-[#7a6558] font-light">
            Cada receita carrega o calor do nosso forno no Mercado Municipal de Campos do Jordão. Descubra os nossos destaques.
          </p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#e4d3c7] shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#faf5f2]">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#26160e]/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                  {prod.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#26160e]">{prod.title}</h3>
                  <p className="text-sm text-[#7a6558] font-light mt-1 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e4d3c7]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#bb7840] uppercase tracking-wider">
                    {prod.badge}
                  </span>
                  <a
                    href={`https://wa.me/5512996319214?text=${prod.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#bb7840] hover:text-[#a36431] uppercase tracking-wider"
                  >
                    Pedir Pelo WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
