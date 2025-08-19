import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Card from "./layout/card";

export default function InfoContacto() {
  return (
    <div className="fixed right-[-45] top-1/2 transform -translate-y-1/2 z-50 cursor-pointer">
      <div className="flex flex-col gap-35 md:gap-34 lg:gap-30 hover:gap-34">
        <Card
          texto={"Llámanos"}
          imagenSrc="/img-comunicate/llamanos-3.png"
          imagenAlt="Llámanos"
          horario="Lunes a Viernes: 8:00 a.m a 5:00 p.m"
          horarioFinDeSemana="Sábados: 8:00 a.m a 1:00 p.m"
          icono={<IoCall className="text-white text-[20px]" />}
          color="bg-[#023d71]"
          flexShrink="2"
          whatsappLink={"tel:11234567890"}
          telefono={"11234567890"}
        />
        <Card
          texto="Escríbenos"
          imagenSrc="/img-comunicate/escribenos.png"
          imagenAlt="Escríbenos"
          horario="Lunes a Viernes: 8:00 a.m a 5:00 p.m"
          horarioFinDeSemana="Sábados: 8:00 a.m a 1:00 p.m"
          icono={<FaWhatsapp className="text-white text-[20px]" />}
          color="bg-green-500"
          flexShrink="0"
          telefono={"11234567890"}
          whatsappLink={"https://wa.me/11234567890"}
        />
      </div>
    </div>
  );
}
