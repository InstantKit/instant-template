import Image, { StaticImageData } from "next/image";
import React from "react";

interface TreatmentsProps {
  id: number;
  image: StaticImageData;
  title: string;
  desc: string;
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

const CardTreatments: React.FC<TreatmentsProps> = ({
  id,
  image,
  title,
  desc,
  activeId,
  setActiveId,
}) => {
  const isCardActive = activeId === 0 || activeId === id;

  const getCardClass = () => {
    if (isCardActive) {
      return activeId === 0
        ? "saturate-0 transition-all ease-in-out duration-300"
        : "saturate-100 transition-all ease-in-out duration-300";
    } else {
      return "saturate-0 transition-all ease-in-out duration-300";
    }
  };

  return (
    <div
      className="w-[360px] flex flex-col gap-3"
      onMouseEnter={() => setActiveId(id)}
      onMouseLeave={() => setActiveId(0)}
    >
      <Image
        src={image}
        width={360}
        height={100}
        alt="treatments1"
        className={getCardClass()}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default CardTreatments;
