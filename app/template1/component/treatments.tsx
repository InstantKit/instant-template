'use client';

import { StaticImageData } from "next/image";
import styles from "../template1.module.css";
import CardTreatments from "./cardTreatments";
import dataTreatments from "../data/dataTreatments";
import { useState } from "react";

interface ITreatments {
  id: number;
  image: StaticImageData;
  title: string;
  desc: string;
}

function Treatments() {
  const contentTreatment: ITreatments[] = dataTreatments;
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <div className={`${styles.bgTreatments}`}>
      <div
        className={`${styles.container} flex flex-col gap-5 items-center py-14 text-[#D9D9D9]`}
      >
        <h2 className="text-3xl font-bold">Treatments</h2>
        <p className="text-center">
          Our treatments are designed to ensure our customers feel totally at
          ease and relaxed. We've curated our services with you in mind, aiming
          to provide a comfortable and enjoyable experience that leaves you
          feeling refreshed and rejuvenated.
        </p>
        <div className="flex justify-center flex-wrap gap-5">
          {contentTreatment.map((item) => (
            <CardTreatments
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treatments;
