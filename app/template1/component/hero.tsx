import styles from "../template1.module.css";
import ButtonBook from "./buttonBook";
import dataHero from "../data/dataHero";

interface IHero {
  title: string;
  desc: string;
}

function Hero() {

  const contentHero: IHero = dataHero;

  return (
    <div className={`${styles.bgHero} flex items-center justify-start`}>
      <div className={`${styles.container} flex flex-col gap-4 w-2/3 ms-10`}>
        <h1 className="text-4xl font-bold">{contentHero.title}</h1>
        <p className="text-xl">
          {contentHero.desc}
        </p>
        <ButtonBook />
      </div>
    </div>
  );
}

export default Hero;
