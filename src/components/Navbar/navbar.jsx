import './navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='main-navbar'>
      <div className='logo'>
        <img src='/logo3.png' alt='Company Logo' className='logo-img' />
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href='#' onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href='#' onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
          <li><a href='#' onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href='#' onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
          <li><a href='#' onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <div className='auth-buttons'>
        <button className='login-btn'>Log in</button>
      </div>

      <div className='mobile-menu-toggle' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;