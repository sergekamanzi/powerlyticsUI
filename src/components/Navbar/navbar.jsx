import './navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoSignIn } from "react-icons/go";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAuthNavigation = () => {
    navigate('/auth');
    setIsMobileMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='main-navbar'>
      <div className='logo' onClick={handleHomeNavigation} style={{cursor: 'pointer'}}>
        <img src='/logo3.png' alt='Company Logo' className='logo-img' />
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href='/' onClick={handleHomeNavigation}>Home</a></li>
          <li><a href='#why-us' onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
          <li><a href='#services' onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href='#blog' onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
          <li><a href='#contact' onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <div className='auth-buttons'>
        <button className='login-btn' onClick={handleAuthNavigation}>Start free trial<GoSignIn /></button>
      </div>

      <div className='mobile-menu-toggle' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;