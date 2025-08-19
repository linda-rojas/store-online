"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import ProductCard from "../products/page";

interface Producto {
  id: number;
  nombre: string;
  descuento: number;
  imagen_url: string;
  subtitulo: string;
  precio: number;
}

export default function ArrowProducts(Props: { title: string }) {
  const { title } = Props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/api/Allproductos");
        const data = await response.json();
        // Filtra los productos en el frontend como última medida
        const filteredData = data.filter((producto) => producto.descuento > 10);
        setProductos(filteredData);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchProductos();
  }, []);

  const productsToShow = 4;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productos.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + productos.length) % productos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [productos.length]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-15">
      <section className="flex items-center justify-center">
        <span className="bg-[#D9D9D9] text-[#408fd8] font-extrabold text-[20px] p-2 rounded-md">
          {title}
        </span>
      </section>
      <section className="relative w-[90%] max-h-max overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out md:gap-7 lg:gap-6"
          style={{
            transform: `translateX(-${(currentIndex * 100) / productsToShow}%)`,
          }}
        >
          {productos.concat(productos).map((producto) => (
            <div
              key={producto.id}
              className="w-[calc(100%/1)]  md:w-[calc(100%/3)] lg:w-[calc(100%/4)] p-2"
            >
              <ProductCard
                imagen_url={producto.imagen_url}
                nombre={producto.nombre}
                subtitulo={producto.subtitulo}
                descuento={producto.descuento}
                precio={producto.precio}
              />
            </div>
          ))}
        </div>

        <IoIosArrowBack
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#408fd8] text-white text-[35px] rounded-full cursor-pointer"
        />

        <IoIosArrowForward
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#408fd8] text-white text-[35px] text-center rounded-full cursor-pointer "
        />
      </section>
    </div>
  );
}
