import Image from "next/image";
import styles from "../template1.module.css";
import about from "../assets/about.png";

function About() {
  return (
    <div className={`${styles.container} bg-white py-14 grid grid-cols-2 gap-20`}>
      <Image src={about} alt="about" className="w-full drop-shadow-[12px_12px_0px_rgba(0,0,0,0.3)]" />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-[#322D29] text-3xl font-bold">About Us</h1>
        <p className="text-[#1A1A1A] text-lg">
          At The Barber's Lounge, we've been serving our clients with top-notch
          grooming experiences since 2023. We've built our reputation on trust,
          knowing that our commitment to providing the finest service ensures
          you walk out with the best haircut. Embracing the tradition of the
          England way of cutting, our skilled barbers blend classic techniques
          with modern styles, creating looks that are both timeless and tailored
          to your individuality. Your satisfaction is our priority, and we take
          pride in offering not just a haircut, but an experience that leaves
          you feeling confident and looking your absolute best.
        </p>
      </div>
    </div>
  );
}

export default About;
