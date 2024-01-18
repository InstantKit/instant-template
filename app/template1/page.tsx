// Template 1 - Web Barbershop

import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Testimonial from './component/testimonial';

function Barbershop() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Testimonial />
        </div>
    );
}

// Path: app/barbershop-template/page.tsx
export default Barbershop;