import { FaImages } from "react-icons/fa";
import Image from "next/image";

function ProductCard(Props: {
  nombre: string;
  descuento: number;
  imagen_url: string;
  subtitulo: string;
  precio: number;
}) {
  const { nombre, descuento, imagen_url, subtitulo, precio } = Props;
  return (
    <div className="w-[230px] h-[400px] rounded-lg border border-gray-300 overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="relative h-45 w-full">
        {imagen_url ? (
          <Image
            src={imagen_url}
            alt={nombre}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 text-center text-gray-600">
            <FaImages className="text-4xl mb-2" />
            <p>Imagen no disponible</p>
          </div>
        )}

        {descuento > 0 && (
          <div className="absolute top-0 left-0 transform text-[12px] bg-[#023d71] text-white font-semibold px-3 py-[2px] shadow-lg z-10">
            ¡{descuento}% descuento!
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-[14px] font-bold text-gray-800 mb-2">{nombre}</h3>

        <p className="text-[13px] text-gray-600 mb-2 overflow-hidden font-medium text-ellipsis whitespace-nowrap max-w-full">
          {subtitulo}
        </p>

        <div className="flex flex-col items-start space-x-3 mb-2">
          <span className="text-sm text-gray-500 line-through">${precio}</span>
          <span className="text-lg font-semibold text-[#b21b13]">
            ${precio}
          </span>
        </div>

        <button className="w-full bg-[#b21b13] text-white py-[6px] rounded-lg hover:bg-[#780f09] transition duration-200 cursor-pointer font-medium text-[14px]">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
