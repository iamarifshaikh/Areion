import "./Services.css";
import squares from '../../assets/squares.png';
import headphones from '../../assets/headphones.png';
import camera from '../../assets/video-camera.png';
import placeholder from '../../assets/placeholder.png';
import upload from '../../assets/upload.png';
import cart from '../../assets/shopping-cart.png';

const Services = () => {
  return (
      <>
         <section id="services" style={{
      background: "url(assets/img/services-bg.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "100px 80%"
    }}>
    <div className="container">
      <h5 className="section-subheading text-center">
        What we do
      </h5>
      <h2 className="section-heading text-center right left">
        Services to solve all kind of business problems
      </h2>
      <div className="services">

        <div className="service">
          <div className="service__icon">
            <img src={squares} alt="" />
          </div>
          <h3 className="services__title">Business Automation</h3>
          <p className="service__text"> By streamlining repetitive tasks with business automation, you can free up your
            team's time for higher-level strategic thinking.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <img src={cart} alt=""/>
          </div>
          <h3 className="services__title">Ecommerce Support</h3>
          <p className="service__text">Ecommerce support can empower your business to offer 24/7 assistance, improve
            customer satisfaction, and free up your staff to focus on complex issues.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <img src={camera} alt=""/>
          </div>
          <h3 className="services__title">Content Creation</h3>
          <p className="service__text"> A stellar content creation strategy fuels customer engagement, attracts new
            audiences, and positions your brand as a thought leader.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <img src={headphones} alt="" />
          </div>
          <h3 className="services__title">Realtime Support</h3>
          <p className="service__text"> Real-time support fosters stronger customer relationships by providing immediate
            assistance and resolving issues as they arise.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <img src={placeholder} alt="" />
          </div>
          <h3 className="services__title">Location Marking</h3>
          <p className="service__text"> Location marking empowers customers to discover your business easily, driving foot
            traffic and boosting local sales.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <img src={upload} alt="" />
          </div>
          <h3 className="services__title">Content Execution</h3>
          <p className="service__text"> Seamless content execution ensures your message reaches the right audience at the
            right time, maximizing impact and achieving your marketing goals.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

      </div>
    </div>
  </section>
      </>
  )
}

export default Services;