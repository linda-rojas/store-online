"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import ProductCard from "../../../components/products/page";

interface Producto {
  id: number;
  nombre: string;
  descuento: number;
  imagen_url: string;
  subtitulo: string;
  precio: number;
}

export default function Suspencion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/api/suspencion");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };
    fetchProductos();
  }, []);

  const totalPages = Math.ceil(productos.length / productsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToPage = (page: number) => {
    setCurrentIndex(page);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-15">
      <section className="flex items-center justify-center w-full mb-8">
        <span className="bg-[#D9D9D9] text-[#408fd8] font-extrabold text-[20px] p-2 rounded-md">
          SUSPENCIÓN
        </span>
      </section>

      <section className="w-[90%] flex items-center justify-center max-h-max overflow-hidden">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 sm:grid-cols-2 md:gap-14 md:grid-cols-2 lg:gap-20 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
          {productos
            .slice(
              currentIndex * productsPerPage,
              (currentIndex + 1) * productsPerPage
            )
            .map((producto) => (
              <ProductCard
                key={producto.id}
                imagen_url={producto.imagen_url}
                nombre={producto.nombre}
                subtitulo={producto.subtitulo}
                descuento={producto.descuento}
                precio={producto.precio}
              />
            ))}
        </div>
      </section>

      <section className="flex items-center justify-center gap-3 mt-4 relative">
        <div className="flex items-center justify-center z-10">
          <IoIosArrowBack
            onClick={goToPrev}
            className="text-gray-600 text-[35px] rounded-full cursor-pointer"
          />
        </div>

        <div className="flex gap-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`px-4 py-2 font-bold rounded-full border cursor-pointer hover:bg-[#b21b13] hover:text-white ${
                currentIndex === index
                  ? "bg-[#023d71] text-white"
                  : "bg-white text-[#023d71]"
              } transition duration-300 ease-in-out`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center z-10">
          <IoIosArrowForward
            onClick={goToNext}
            className="text-gray-600 text-[35px] rounded-full cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
}
