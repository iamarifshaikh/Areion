import Contact from '../components/Contact/Contact';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/About/About.jsx';
import Hero from '../components/Hero/Hero.jsx';

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;