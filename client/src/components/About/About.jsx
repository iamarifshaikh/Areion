import "./About.css";
import about from '../../assets/about.png'

const About = () => {
  return (
    <>
      <section id="about" className="container flex-center flex-column">
        <h5 className="section-subheading">
          build trust first
        </h5>
        <h2 className="section-heading text-center">Control your business with a single tap</h2>
        <div className="features text-center">

          <div className="feature" style={{ "--color": "#fe6786" }}>
            <div className="feature__icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h3 className="feature__title">Complete Business Control</h3>
            <p className="feature__text">
              Get complete control over your business with Areion. We help you create your presence online and give you the
              power to utilize your true potential with the help of the web world.
            </p>
          </div>

          <div className="feature" style={{ "--color": "#5cd8a5" }}>
            <div className="feature__icon">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <h3 className="feature__title">Critical Analysis and Reports</h3>
            <p className="feature__text">
              Areion helps you get the best researched and analysed reports and insights about your business. Our research
              team delivers you the appropriate insights and strategies that will help you scale your business.
            </p>
          </div>

          <div className="feature" style={{ "--color": "#fea95b" }}>
            <div className="feature__icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="feature__title">Business Growth</h3>
            <p className="feature__text">
              Areion can amplify your brand voice. We craft engaging content, target ideal customers across
              platforms, and track results to maximize your reach and growth. Let us help you turn followers into fans and
              fans into customers.
            </p>
          </div>

        </div>
        <div className="about__details flex-center">
          <div className="about__details-content">
            <h1>Most Innovative Creative Team</h1>
            <p>
              Areion boasts a powerhouse creative team known for their infectious enthusiasm and innovative spirit.
              These talented individuals bring a kaleidoscope of perspectives to every project, fostering a collaborative
              environment that pushes boundaries. Their diverse skillsets, seamlessly woven together, ensure every project
              reaches its full potential. With this team at the helm, the agency is poised to tackle any challenge and
              achieve remarkable results.
            </p>
            <p>
            </p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
          <div className="about__details-img">
            <img src={about} alt=""/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
