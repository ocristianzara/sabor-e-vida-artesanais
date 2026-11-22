import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ScrollStory } from "@/components/site/ScrollStory";
import { Gallery } from "@/components/site/Gallery";
import { Founder } from "@/components/site/Founder";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "Sabor e Vida Artesanais — Pães artesanais em Campos do Jordão";
const description = "Pães caseiros feitos com tempo, cuidado e ingredientes selecionados. Mercado Municipal de Campos do Jordão, Box 10. Peça pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <ScrollStory />
      <Gallery />
      <Founder />
      <FinalCta />
      <Footer />
    </main>
  );
}
