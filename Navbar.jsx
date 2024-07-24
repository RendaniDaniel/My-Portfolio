import React, { useState } from 'react';
import './Navbar.css';
import messageIcon from '../../assets/contact.png';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.png'; // Add a menu icon image
import { Link } from 'react-scroll';

const linkProps = {
  spy: true,
  smooth: true,
  duration: 500,
  activeClass: 'active',
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link to="introduction" offset={-70} {...linkProps} className='desktopMenuListItem' onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="skills" offset={-20} {...linkProps} className='desktopMenuListItem' onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="works" offset={-50} {...linkProps} className='desktopMenuListItem' onClick={closeMobileMenu}>
          Portfolio
        </Link>
        <Link to="certificates" offset={-25} {...linkProps} className='desktopMenuListItem' onClick={closeMobileMenu}>
          Certificates
        </Link>
        <Link to="contact" offset={-60} {...linkProps} onClick={closeMobileMenu}>
          <button className="desktopMenuBtn">
            <img src={messageIcon} alt="Message Icon" className='desktopMenuImg' />
            Contact Me
          </button>
        </Link>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        <img src={menuIcon} alt="Menu Icon" />
      </div>
      {isMobileMenuOpen && (
        <div className="mobileMenu">
          <Link to="introduction" offset={-70} {...linkProps} className='mobileMenuListItem' onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="skills" offset={-10} {...linkProps} className='mobileMenuListItem' onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="works" offset={-50} {...linkProps} className='mobileMenuListItem' onClick={closeMobileMenu}>
            Portfolio
          </Link>
          <Link to="certificates" offset={-20} {...linkProps} className='mobileMenuListItem' onClick={closeMobileMenu}>
            Certificates
          </Link>
          <Link to="contact" offset={0} {...linkProps} onClick={closeMobileMenu}>
            <button className="mobileMenuBtn">
              <img src={messageIcon} alt="Message Icon" className='mobileMenuImg' />
              Contact Me
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


