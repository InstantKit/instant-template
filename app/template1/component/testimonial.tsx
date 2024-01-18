import styles from "../template1.module.css";
import CardTestimonial from "./cardTestimonial";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";

function Testimonial() {

    const dataTestimonial = [
        {
            id: 1,
            image: testi1,
            name: "WILLIAM THOMPSON",
            message: "The Barber's Lounge isn't just a grooming salon; it's an experience. As a meticulous architect, I appreciate the attention to detail in every cut. It's where precision meets pampering."
        },
        {
            id: 2,
            image: testi2,
            name: "GEORGE RICHARDSON",
            message: "Being in the public eye demands a polished look. The Barber's Lounge not only delivers exceptional service but also understands the essence of a professional yet stylish haircut."
        },
        {
            id: 3,
            image: testi3,
            name: "SAMUEL TURNER",
            message: "The Barber's Lounge isn't just about style; it's about respect for individual preferences. They understand my need for a sharp yet manageable look that suits my role."
        },
    ]

    return (
        <div className={`${styles.container} bg-[#322D29] color-[#D9D9D9] flex flex-col items-center gap-5 py-14`}>
            <h2 className="text-3xl font-bold">Testimonial</h2>
            <p className="text-base">We've got about <span className="font-bold">1k+</span> happy customers dropping by every month, and here's what a few of them have shared about their time with us!</p>
            <div className="grid grid-cols-3 gap-5 w-full">
                {dataTestimonial.map((testi,index) => (
                    <CardTestimonial key={index} id={testi.id} image={testi.image} name={testi.name} message={testi.message} />
                ))}
            </div>
        </div>
    )
}

export default Testimonial;