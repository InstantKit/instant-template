import Image, { StaticImageData } from "next/image";
import styles from "../template1.module.css";
import dataFooter from "../data/dataFooter";
import ButtonToTop from "./buttonToTop";

interface OpeningHour {
  day: string;
  time: string;
}

interface IFooter {
  OpeningHours: OpeningHour[];
  ADDRESS: string;
  KEEPINTOUCH: StaticImageData[];
  COPYRIGHT: string;
}

function Footer() {
  const contentFooter: IFooter[] = [dataFooter];

  const openingHours = contentFooter[0].OpeningHours;
  const address = contentFooter[0].ADDRESS;
  const keepInTouch = contentFooter[0].KEEPINTOUCH;
  const copyRight = contentFooter[0].COPYRIGHT;

  return (
    <div
      className={`${styles.container} bg-[#F0E9E1] text-[#1A1A1A] flex flex-col gap-5 py-14`}
    >
      <div className="grid grid-cols-3 justify-start text-sm items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#322D29] text-xl font-bold">OPENING HOURS</h2>
          {openingHours.map((item, index) => (
            <div key={index} className="grid grid-cols-3">
              <p>{item.day}</p>
              <p className="col-span-2">{item.time}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[#322D29] text-xl font-bold">ADDRESS</h2>
          <p>{address}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[#322D29] text-xl font-bold">KEEP IN TOUCH</h2>
          <div className="flex gap-3">
            {keepInTouch.map((item, index) => (
              <Image key={index} src={item} alt="icon" height={25} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <p className="text-[#322D29] text-lg font-bold">
          Copyright © 2024 [{copyRight}] | All rights reserved.
        </p>
        <ButtonToTop />
      </div>
    </div>
  );
}

// Path: app/template1/component/header.tsx
export default Footer;
