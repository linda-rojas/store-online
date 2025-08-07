// import Image from "next/image";
'use client';
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import styles from "../../UI/home.module.css";
import { montserrat, roboto } from "../../UI/fonts";
import { IconAutocaucho } from "../icons/icon-autocaucho/Icon-autocaucho";

export function Navbar() {
  return (
    <nav className={`${styles.color_bg_red} flex items-center justify-between px-6 p-2 md:px-6 lg:px-12`}>
      <IoMenu className="h-9 w-9 text-white cursor-pointer md:hidden lg:hidden"/>
      <IconAutocaucho />
      <div className={`${styles.gray_bg_input} hidden rounded-[10px] md:relative md:block md:top-0 lg:block`}>
        <input
          type="text"
          placeholder="Buscar producto"
          className={`${styles.color_gray_input} ${styles.color_gray_input_hover} rounded-[10px] p-[5px] pl-6 focus:outline-blue-500 bg-white sm:w-[400px]`}
        />
        <FaSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 underline" 
        />
      </div>
      <section className="flex justify-center items-center gap-8 md:gap-3 lg:gap-8">
          <div className="hidden items-center gap-2 cursor-pointer md:flex md:gap-1 lg:flex ">
            <span className={`${montserrat.className} text-white text-center`}>Mi cuenta</span>
            <FaUser className="h-5 w-5 text-white"/>
          </div>
        <div className="relative cursor-pointer">
          <span className={`w-5 h-5 absolute text-center top-[-10] left-1/2 text-[14px] font-bold ${roboto.className} bg-[#408FD8] text-white rounded-full`}>2</span>
          <figure className="rounded-full bg-white p-2 hover:bg-[#408FD8] transition-colors duration-300">
            <FaShoppingCart className={`text-[#b21b13]  h-5 w-5 hover:text-white`}/>
          </figure>
        </div>  
      </section>
    </nav>
  );
}
