import "./Hero.css";
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
      <>
        <section id="hero" className="container flex-row">
    <div className="hero__content">
      <h1 className="title">Work Smartly with Endless Possibilities</h1>
      <p className="text">
        Grow your presence | Get more leads | Increase sales.
      </p>
      <a href="" className="btn btn-primary">Get Started</a>
    </div>
    <div className="hero__img">
      <img src={hero} alt=""/>
    </div>
  </section>
      </>
  )
}

export default Hero;