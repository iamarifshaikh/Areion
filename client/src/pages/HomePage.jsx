import Contact from '../components/Contact/Contact';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/About/About.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Services from '../components/Services/Services.jsx';
import Header from '../components/Header/Header.jsx';

const HomePage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <Services/>
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;