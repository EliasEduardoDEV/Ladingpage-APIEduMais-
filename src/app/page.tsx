import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import DicasEstudo from "@/components/DicasEstudo";
import Plataformas from "@/components/Plataformas";
import Tecnicas from "@/components/Tecnicas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Sobre />
      <DicasEstudo />
      <Plataformas />
      <Tecnicas />
      <Footer />
    </main>
  );
}