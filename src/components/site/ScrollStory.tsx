import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 55;

const STORY_STEPS = [
  {
    step: "Etapa 01 • A Origem",
    headline: "TUDO COMEÇA COM OS MELHORES INGREDIENTES.",
    subtitle: "Ingredientes selecionados para dar origem a algo verdadeiramente especial.",
  },
  {
    step: "Etapa 02 • O Trabalho Manual",
    headline: "A PERFEIÇÃO ESTÁ EM CADA DETALHE.",
    subtitle: "Tempo, técnica e cuidado transformam a massa em uma verdadeira obra de arte.",
  },
  {
    step: "Etapa 03 • O Respeito ao Tempo",
    headline: "UM BOM PÃO NÃO SE FAZ COM PRESSA.",
    subtitle: "Cada textura, cada detalhe e cada movimento têm um propósito.",
  },
  {
    step: "Etapa 04 • A Transformação",
    headline: "É AQUI QUE A MAGIA ACONTECE.",
    subtitle: "O calor transforma ingredientes simples em algo extraordinário.",
  },
  {
    step: "Etapa 05 • O Ponto Perfeito",
    headline: "RECÉM-SAÍDO DO FORNO. IMPOSSÍVEL RESISTIR.",
    subtitle: "Dourado, crocante e quentinho. Feito com tempo, cuidado e paixão em cada detalhe.",
    cta: true,
  },
];

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [currentFrameNum, setCurrentFrameNum] = useState(1);
  const [progressPercent, setProgressPercent] = useState(0);

  // Preload frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, "0");
      img.src = `/frames/frame_${numStr}.jpg`;
      img.onload = () => {
        if (i === 1 && canvasRef.current) {
          drawFrame(0);
        }
      };
      loadedImages.push(img);
    }
    framesRef.current = loadedImages;

    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        drawFrame(currentFrameNum - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = framesRef.current[index];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1280;
    const ih = img.naturalHeight || 720;

    const ratio = Math.max(cw / iw, ch / ih);
    const nw = iw * ratio;
    const nh = ih * ratio;
    const cx = (cw - nw) / 2;
    const cy = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, cx, cy, nw, nh);
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const currentScrolled = -rect.top;

      let progress = currentScrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      setProgressPercent(progress * 100);

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );
      setCurrentFrameNum(frameIdx + 1);
      drawFrame(frameIdx);

      let stepIdx = Math.floor(progress * 5);
      if (stepIdx >= 5) stepIdx = 4;
      setActiveStep(stepIdx);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="scroll-experience"
      ref={containerRef}
      className="relative bg-[#26160e] text-[#f5ede8]"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Canvas de alta performance */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

        {/* Efeito de vinheta para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#26160e]/85 via-transparent to-[#26160e]/60 pointer-events-none z-10" />

        {/* Top Overlay com contador e progresso */}
        <div className="absolute top-6 left-0 right-0 z-20 max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#df9c5e] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#df9c5e]">
              A Arte da Panificação Artesanal
            </span>
          </div>

          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="text-xs tracking-wider text-white/70">
              Frame {String(currentFrameNum).padStart(2, "0")} / {TOTAL_FRAMES}
            </span>
            <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#df9c5e] transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Narrativa Sincronizada com Scroll */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pointer-events-none w-full">
          {STORY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                activeStep === idx
                  ? "opacity-100 transform translate-y-0 block"
                  : "opacity-0 transform translate-y-6 hidden"
              }`}
            >
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#df9c5e] font-semibold mb-3 bg-[#bb7840]/20 px-4 py-1 rounded-full border border-[#bb7840]/30">
                {step.step}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-tight">
                {step.headline}
              </h2>
              <p className="mt-4 text-base sm:text-xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed">
                {step.subtitle}
              </p>
              {step.cta && (
                <div className="mt-8 pointer-events-auto">
                  <a
                    href="https://wa.me/5512996319214?text=Ol%C3%A1!%20Acompanhei%20a%20produ%C3%A7%C3%A3o%20e%20quero%20um%20p%C3%A3o%20quentinho!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#bb7840] hover:bg-[#a36431] text-white px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
                  >
                    <span>Garantir Meu Pão do Dia</span>
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dica de scroll */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center text-white/60 pointer-events-none">
          <span className="text-xs uppercase tracking-widest font-medium mb-2">
            Role para controlar a produção
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-[#df9c5e] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
