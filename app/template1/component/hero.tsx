import styles from "../template1.module.css";
import ButtonBook from "./buttonBook";

function Hero() {
  return (
    <div className={`${styles.bgHero} flex items-center justify-start`}>
      <div className={`${styles.container} flex flex-col gap-4 w-2/3 ms-10`}>
        <h1 className="text-4xl font-bold">Crafting Confidence, Cut by Cut</h1>
        <p className="text-xl">
          book in and get your cool new haircur. Sit bacl, relax, and let us
          give you the slickest cut you've had.
        </p>
        <ButtonBook />
      </div>
    </div>
  );
}

export default Hero;
