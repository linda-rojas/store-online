// import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { montserrat } from "../../UI/fonts";

const links = [
    {
      name: "REFRIGERANTES",
      icon: IoMdArrowDropdown,
      url: "panel/Refrigerantes",
    },
    {
      name: "SUSPENCIÓN",
      icon: IoMdArrowDropdown,
      url: "panel/Suspención",
    },
    {
      name: "SOPORTES",
      icon: IoMdArrowDropdown,
      url: "panel/Soportes",
    },
    {
      name: "RODAMIENTO",
      icon: IoMdArrowDropdown,
      url: "panel/Rodamiento",
    },
    {
      name: "CARBURACIÓN",
      icon: IoMdArrowDropdown,
      url: "panel/Carburación",
    },

  ]

export function NavLinks() {

  return (
        <div className="hidden md:w-full md:flex md:justify-around lg:flex lg:justify-center lg:gap-12 lg:px-6">
          {
            links.map( (product) => {

              const Icon = product.icon;
              return (
                <a 
                  key={product.name}
                  href={product.url}
                  className={`${montserrat.className} hidden items-center gap-2 font-semibold cursor-pointer hover:text-[17px] hover:p-1 hover:border-2 hover:border-white hover:rounded-md border-transparent transition-all duration-300 ease-in-out  md:flex md:gap-1 lg:flex `}
                  >
                  <span className={`${montserrat.className} text-white text-center`}>{product.name}</span>
                  <Icon className="h-5 w-5 text-white"/>
                </a>
              )
            })
          }
        </div>
  );
}
