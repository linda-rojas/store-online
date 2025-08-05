import { useState, useEffect } from 'react';
'use client'; 
import Image from "next/image";

export default function Carousel() {

  const [currentImage, setCurrentImage] = useState(0);

    const images = [
    "/img/ofertas-img-1.jpg",
    "/img/ofertas-img-2.jpg",
    "/img/ofertas-img-3.jpg",
    "/img/ofertas-img-4.jpg",
    "/img/ofertas-img-5.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => { 
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
      <section className={`w-full overflow-hidden`}>
          {
        images.map((image, index) => (
          
          <Image
            key={index}
            src={image}
            alt={`Oferta ${index + 1}`}
            className={`w-full h-auto object-cover transition-opacity duration-500 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))
      }
      </section>
    </>
  );
}