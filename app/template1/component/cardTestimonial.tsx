"use client";

import Image, { StaticImageData } from "next/image";
import styles from "../template1.module.css";
import { useState } from "react";

interface ITestimonial {
  id: number;
  image: StaticImageData;
  name: string;
  message: string;
}

const CardTestimonial = ({ id, image, name, message }: ITestimonial) => {
  const [idHover, setIdHover] = useState<number>(0);

  return (
    <div
      className={`${styles.bgCardTestimonial} bg-[#BDBDBD] flex flex-col gap-3 text-[#1A1A1A]`}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={name + id}
          className={`
            ${
              idHover == 0
                ? "w-full transition-all ease-in-out duration-700"
                : idHover == id 
                ? "scale-110 transition-all ease-in-out duration-700"
                : "backdrop-blur-md transition-all ease-in-out duration-700"
            }
          `}
          onMouseEnter={() => setIdHover(id)}
          onMouseLeave={() => setIdHover(0)}
        />
      </div>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-base font-semibold">"{message}"</p>
    </div>
  );
};

export default CardTestimonial;
