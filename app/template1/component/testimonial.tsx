'use client';

import styles from "../template1.module.css";
import CardTestimonial from "./cardTestimonial";
import dataTestimonial from "../data/dataTestimonial";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface ITestimonial {
  id: number;
  image: StaticImageData;
  name: string;
  message: string;
}

function Testimonial() {
  const contentTestimonial: ITestimonial[] = dataTestimonial;
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <div className={`${styles.container} bg-[#322D29] text-[#D9D9D9] flex flex-col items-center gap-5 py-14`}>
      <h2 className="text-3xl font-bold">Testimonial</h2>
      <p className="text-base text-center">
        We{`&apos`}ve got about <span className="font-bold">1k+</span> happy customers dropping by every month, and here{`&apos`}s what a few of them have shared about their time with us!
      </p>
      <div className="grid grid-cols-3 gap-5 w-full">
        {contentTestimonial.map((testi) => (
          <CardTestimonial
            key={testi.id}
            id={testi.id}
            image={testi.image}
            name={testi.name}
            message={testi.message}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;