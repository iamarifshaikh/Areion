import "./Testimonial.css";

const Testimonial = () => {
  return (
      <>
          <section id="testimonial" className="container">
            <h5 className="section-subheading text-center"> Testimonials</h5>
            <h2 className="section-heading text-center right left">What Client Says</h2>
          </section>
          <section className="testis">
             {/*  <div className="wrapper">
                  <div className="testimonial-container" id="testimonial-container"></div>
                  <button id="prev">&lt;</button>
                  <button id="next">&gt;</button>
              </div> */}
          </section>
      </>
  )
}

export default Testimonial