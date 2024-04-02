import { useState } from 'react';
import { MapPin, Phone, At } from 'phosphor-react';
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('http://areion.onrender.com/api/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <h5 className="section-subheading text-center">
            Contact Us
          </h5>
          <h2 className="section-heading text-center left right">Stay connected with us for any reason</h2>
          <div className="contact">
            <form action="" className="contact__form" onSubmit={handleSubmit}>
              <h1>Write us a message</h1>
              <input type="text" placeholder="Your Name" id="name" value={formData.name} onChange={handleChange} required />
              <input type="email" placeholder="Your Email" id="email" value={formData.email} onChange={handleChange} required />
              <input type="text" placeholder="Subject" id="subject" value={formData.subject} onChange={handleChange} required />
              <textarea rows="5" placeholder="Your Message" id="message" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit" className="btn btn-primary">Send!</button> 
            </form>
            <div className="contact__details">
              <p className="text">
                Ready to grow your business together? Contact us today!
              </p>
              <div className="details">
                <div className="detail">
                  <div className="detail__icon">
                    <Phone size={22} color="#f7f7f7" weight="duotone" />
                  </div>
                  <div className="detail__content">
                    <h3>Phone</h3>
                    <p>+123456789</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="detail__icon">
                    <At size={22} color="#f7f7f7" weight="duotone" />
                  </div>
                  <div className="detail__content">
                    <h3>Email</h3>
                    <p>hello@gmail.com</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="detail__icon">
                    <MapPin size={22} color="#f7f7f7" weight="duotone" />
                  </div>
                  <div className="detail__content">
                    <h3>Address</h3>
                    <p>123 Street, City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
