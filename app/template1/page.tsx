// Template 1 - Web Barbershop

"use client";

import Navbar from "./component/navbar";
import Hero from "./component/hero";
import About from "./component/about";
import Testimonial from "./component/testimonial";
import Treatments from "./component/treatments";
import Footer from "./component/footer";
import { useRef, useEffect } from "react";

function Barbershop() {
  const toAbout = useRef(null);
  const toTestimonial = useRef(null);
  const toTreatments = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar
        moveTo={{
          toAbout,
          toTestimonial,
          toTreatments,
        }}
      />
      <Hero />
      <div ref={toAbout}>
        <About />
      </div>
      <div ref={toTestimonial}>
        <Testimonial />
      </div>
      <div ref={toTreatments}>
        <Treatments />
      </div>
      <Footer />
    </>
  );
}

// Path: app/barbershop-template/page.tsx
export default Barbershop;
