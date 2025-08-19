"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  texto: string;
  imagenSrc: string;
  imagenAlt: string;
  horario: string;
  horarioFinDeSemana: string;
  icono: React.ReactNode;
  color: string;
  flexShrink: string;
  telefono: string;
  whatsappLink: string;
}

export default function Card({
  texto,
  imagenSrc,
  imagenAlt,
  horario,
  horarioFinDeSemana,
  icono,
  color,
  flexShrink,
  telefono,
  whatsappLink,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleInfo}
      className="relative group inline-block right-[-5]"
    >
      <div
        className={`flex justify-center items-center gap-2 transform rotate-[-90deg] text-white font-medium rounded-md p-2 whitespace-nowrap ${color} opacity-100 group-hover:opacity-0 transition-opacity duration-100 ease-in-out`}
      >
        <p className="text-white font-medium">{texto}</p>
        {icono}
      </div>

      <div
        className={`absolute right-10 bottom-[-65px] text-white hover:p-2 rounded-lg shadow-lg w-0 opacity-0 group-hover:w-[338px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out ${color} ${
          isOpen ? "w-[330px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <figure className={`flex-shrink-${flexShrink}`}>
            <Image
              src={imagenSrc}
              alt={imagenAlt}
              layout="intrinsic"
              width={140}
              height={130}
              className="object-contain"
            />
          </figure>

          <div className="flex flex-col justify-center gap-2">
            <section className="flex justify-start items-center gap-2">
              <p className="text-white font-bold">{texto}</p>
              {icono}
            </section>

            <section className="text-[13px]">
              <p className="font-medium">Horario de atención:</p>
              <p>{horario}</p>
              <Link href={whatsappLink}>
                <p>{horarioFinDeSemana}</p>
                <p className="font-medium">{telefono}</p>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
