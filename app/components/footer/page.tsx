import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { LiaAtomSolid } from "react-icons/lia";
import { roboto } from "../../UI/fonts";
import Image from "next/image";
// import Link from "next/link";

const nosotros = [
  "Quiénes somos",
  "Misión y Visión",
  "Contáctenos",
  "Términos y Condiciones",
  "Política de privacidad"
]

const enlacesRapidos = [
  "Refrigerantes",
  "Suspención",
  "Soportes",
  "Rodamiento",
  "Carburación"
]

const InfoContacto = [
  {
    index: "Dirección",
    name: "Cra 1 N° 6 - 30 La Pola - La Plata -Huila"
  },
  {
    index: "Correo",
    name: "soporte@autoCauchos.gmail.com"
  },
]

export function Foooter() {

  return (
        <footer className={`${roboto.className} w-full bg-[#D9D9D9] text-black `}>
          <section className="w-full max-h-max py-8 px-8 grid grid-cols-1 gap-16 md:gap-4 md:grid-cols-2 lg:gap-4">
            <article className="flex justify-evenly items-center gap-12">
                <div className="flex flex-col justify-center items-center gap-2 md:mb-23 lg:mb-26">
                <div className="gap-2 flex flex-col">
                  <span className={`${roboto.className} font-extrabold text-[#408FD8] pb-1`}>Sobre nosotros</span>
                  {
                    nosotros.map((item, index) => (
                      <p key={index} className="cursor-pointer hover:font-bold">{item}</p>
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 md:mb-22 lg:mb-25">
                <div className="gap-2 flex flex-col">
                  <span className={`${roboto.className} font-extrabold text-[#408FD8] pb-1`}>Enlaces rápidos</span>
                  {
                    enlacesRapidos.map((info, index) => {
                      return (
                        <p key={index}>{info}</p>
                      )
                    })
                  }
                </div>
              </div>
            </article>
            <article className="flex justify-evenly items-center gap-2">
              <div className="gap-6 flex flex-col">
                  <div className="gap-4 flex flex-col">
                    <span className={`${roboto.className} text-center font-extrabold text-[#408FD8] `}>Síguenos para Más Ofertas y Noticias</span>
                    <figure className="flex justify-center items-center gap-4">
                      <FaFacebookSquare className={`cursor-pointer text-black h-10 w-10`} />
                      <FaInstagramSquare className={`cursor-pointer text-black h-10 w-10`} />
                      <IoLogoYoutube className={`cursor-pointer text-black h-10 w-10`} />
                    </figure>
                    <hr className="border-0 border-t-2 border-gray-400 mb-2 mx-2"></hr>
                  </div>
                  <div className="gap-3 flex flex-col">
                    <span className={`${roboto.className} font-extrabold text-[#408FD8]`}>Información de Contácto</span>
                    <div className="gap-1 flex flex-col">
                      <div>
                        <p className="flex items-center gap-2 mb-2">
                          <FaWhatsapp className={`cursor-pointer text-black h-6 w-6`} />
                          <span className={`${roboto.className} font-extrabold text-center text-black`}>
                            +57 321 576 ....
                          </span>
                        </p>
                      </div>
                    {
                      InfoContacto.map((info, index) => {
                        return (
                          <p key={index} className="flex flex-col  ">
                            <span 
                              className={`${roboto.className} font-extrabold text-black pt-1`}
                              >{info.index}</span>
                            <span className={`${roboto.className} font-light text-black`}>{info.name}</span>
                          </p>
                        )
                      })
                    }
                    
                    </div>
                  </div>
              </div>
              <div className="gap-2 flex flex-col align-center">
                  <span className={`${roboto.className} font-extrabold text-[#408FD8] pb-1`}>hecho por:</span>
                  <div className="gap-2 flex flex-row">
                    <p className="font-bold">LR</p>
                    <LiaAtomSolid className={`cursor-pointer text-black h-6 w-6`} />
                  </div>
              </div>
            </article>
          </section>
          <section className="w-full flex flex-col justify-center text-center gap-3 py-5 bg-[#023D71] font-bold text-white">
            <span className={`${roboto.className} text-extrabold text-2xl`}>Formas de Pago</span>
            <div className="flex justify-center items-center gap-4">
                <Image
                  src="/img/mastercard.png"
                  alt="Pago con mastercard"
                  width={50}
                  height={50}
                  className="w-auto h-auto object-contain cursor-pointer"
                />
                <Image
                  src="/img/logo-pse.webp"
                  alt="Pago con pse"
                  width={80}
                  height={80}
                  className="w-auto h-auto object-contain cursor-pointer"
                />
                <figure className="bg-white rounded-[50px]">
                  <Image
                  src="/img/img-bancolombia.png"
                  alt="Pago con bancolombia"
                  width={120}
                  height={120}
                  className="object-contain cursor-pointer w-auto h-auto rounded-md"
                  />
                </figure>
                
            </div>
          </section>
        </footer>
  );
}
