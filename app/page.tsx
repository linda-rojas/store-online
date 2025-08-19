import ArrowProducts from "./components/Destacados/ArrowProducts";
import Carousel from "./components/carousel/Carousel";
import { Footer } from "./components/footer/page";
import { Header } from "./components/header/page";
import InfoContacto from "./components/infoContacto/infoContacto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <InfoContacto />
        <ArrowProducts title="DESTACADOS" />
      </main>
      <Footer />
    </>
  );
}
