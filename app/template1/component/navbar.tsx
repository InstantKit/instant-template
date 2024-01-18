import styles from "../template1.module.css";
import logo from "../assets/logo.svg";
import Image from "next/image";
import ButtonBook from "./buttonBook";
import dataNavLink from "../data/dataNavLink";

interface INavbar {
  id: number;
  title: string;
}

interface NavbarProps {
  moveTo: any;
}

function Navbar({ moveTo }: NavbarProps) {
  const dataNav: INavbar[] = dataNavLink;

  const handleClick = (title: string) => {
    const value = title.split(" ").join("").toLowerCase();

    switch (value) {
      case "aboutus":
        return moveTo.toAbout.current.scrollIntoView({
          behavior: "smooth",
        });
      case "testimonials":
        return moveTo.toTestimonial.current.scrollIntoView({
          behavior: "smooth",
        });
      case "treatments":
        return moveTo.toTreatments.current.scrollIntoView({
          behavior: "smooth",
        });
      default:
        break;
    }
    moveTo.toAbout.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.containerNavbar}>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" width={25} height={25} />
          <p className="font-semibold text-xl mb-0.5">The Barber's Lounge</p>
        </div>
        <div className="flex justify-around items-center gap-5 text-base">
          {dataNav.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(item.title)}
                key={index}
                className="hover:text-white cursor-pointer"
              >
                {item.title}
              </div>
            );
          })}
          <ButtonBook />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
