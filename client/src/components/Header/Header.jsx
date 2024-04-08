import './Header.css';
import areion from '../../assets/areion.png';

const Header = () => {
  return (
      <>
        <header>
    <div className="container flex-row">
      <div className="header__logo">
        <img src={areion} alt="Logo" />
      </div>
      <nav>
        <ul className="header__menu flex-row">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#packs">Packs</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="right flex-center">
        <a href="#contact" className="btn btn-secondary">Get a Quote</a>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  </header>
      </>
  )
}

export default Header;