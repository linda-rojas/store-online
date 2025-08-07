import Carousel from "./components/carousel/Carousel";
import { Foooter } from "./components/footer/page";
import { Header } from "./components/header/page"; 

export default function Home() {

  return (
    <>
      <Header />
      <Carousel />
      <Foooter />
    </>
  );
}