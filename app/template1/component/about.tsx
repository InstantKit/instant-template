import Image, { StaticImageData } from "next/image";
import styles from "../template1.module.css";
import dataAbout from "../data/dataAbout";

interface IAbout {
  image: StaticImageData;
  title: string;
  desc: string;
}

function About() {

  const contentAbout: IAbout = dataAbout;

  return (
    <div className={`${styles.container} bg-white py-14 grid grid-cols-2 gap-20`}>
      <Image src={contentAbout.image} alt="about" className="w-full drop-shadow-[12px_12px_0px_rgba(0,0,0,0.3)]" />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-[#322D29] text-3xl font-bold">{contentAbout.title}</h1>
        <p className="text-[#1A1A1A] text-lg">
          {contentAbout.desc}
        </p>
      </div>
    </div>
  );
}

export default About;
