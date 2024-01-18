"use client";

import Image from "next/image";
import scrollToTop from "../assets/scrollToTop.svg";

const ButtonToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleScrollToTop} className="cursor-pointer">
      <Image src={scrollToTop} alt="icon" height={25} />
    </div>
  );
};

export default ButtonToTop;
