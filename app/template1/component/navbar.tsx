import styles from "../template1.module.css";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import ButtonBook from "./buttonBook";

function Navbar() {
  return (
    <div className={styles.containerNavbar}>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" width={25} height={25} />
          <p className="font-semibold text-xl mb-0.5">The Barber's Lounge</p>
        </div>
        <div className="flex justify-around items-center gap-5 text-base">
          <Link href={""} className="hover:text-white">About Us</Link>
          <Link href={""} className="hover:text-white">Testimonial</Link>
          <Link href={""} className="hover:text-white">Treatments</Link>
          <ButtonBook />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
