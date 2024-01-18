import Image from "next/image";
import styles from "../template1.module.css";
import { StaticImageData } from "next/image";

interface TestimonialProps {
  id: number;
  name: string;
  image: StaticImageData;
  message: string;
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

const CardTestimonial: React.FC<TestimonialProps> = ({
  id,
  image,
  name,
  message,
  activeId,
  setActiveId,
}) => {
  const isCardActive = activeId === 0 || activeId === id;

  const getCardClass = () => {
    if (isCardActive) {
      return activeId === 0
        ? "w-full transition-all ease-in-out duration-700"
        : "scale-110 transition-all ease-in-out duration-700";
    } else {
      return "opacity-30 transition-all ease-in-out duration-700";
    }
  };

  return (
    <div
      className={`${styles.bgCardTestimonial} bg-[#BDBDBD] flex flex-col gap-3 text-[#1A1A1A]`}
      onMouseEnter={() => setActiveId(id)}
      onMouseLeave={() => setActiveId(0)}
    >
      <div className="w-full overflow-hidden bg-black">
        <Image src={image} alt={`${name}-${id}`} className={getCardClass()} />
      </div>
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-base font-semibold">"{message}"</p>
    </div>
  );
};

export default CardTestimonial;
