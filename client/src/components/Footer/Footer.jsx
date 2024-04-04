import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
    <div className="container">
      <div className="footer__content">
        <div className="footer__details">
          <div className="footer__logo">
            <img src="assets/img/areion.png" alt=""/>
          </div>
          <p className="footer__text">
            Expand your business with us! Get the best content stategies and insights by signing up for our Newsletter!
          </p>
          <div className="footer__newletter">
            <form action="#" className="footer__newsletter-form">
              <input type="email" placeholder="Submit Email" required/>
              <div className="icon">
                <i className="fa fa-envelope">
                </i>
              </div>
            </form>
          </div>
        </div>
        <div className="footer__menu">
          <h3 className="footer__menu-title">
            Quick Links
          </h3>
          <ul className="footer__menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Packs</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer__menu">
          <h3 className="footer__menu-title">
            Quick Links
          </h3>
          <ul className="footer__menu-list">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Linkdin</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-icons">
          <p>
            Follow Us
          </p>
          <a href="#" className="facebook">
           
          </a>
          <a href="#" className="twitter">
            
          </a>
              <a href="#" className="instagram">
                
          </a>
          <a href="#" className="linkedin">
            
          </a>
        </div>
        <p>&copy; 2024 Areion. All Rights Reserved.</p>
      </div>

    </div>
  </footer>

    </>
  )
}

export default Footer;