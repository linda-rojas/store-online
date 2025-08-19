import ArrowProducts from "./components/Destacados/ArrowProducts";
import Carousel from "./components/carousel/Carousel";
import { Footer } from "./components/footer/page";
import { Header } from "./components/header/page";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <ArrowProducts title="DESTACADOS" />
      <Footer />
    </>
  );
}
