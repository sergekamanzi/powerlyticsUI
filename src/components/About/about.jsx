import React from 'react';
import './about.css';
import { IoHomeSharp, IoStar } from "react-icons/io5";
import { MdSolarPower, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const About = () => {
  return React.createElement(
    'div',
    { className: 'main-about' },
    React.createElement(
      'div',
      { className: 'stats-container' },
      React.createElement(
        'div',
        { className: 'about-icons' },
        React.createElement(
          'div',
          { className: 'stat-item' },
          React.createElement(IoHomeSharp, { className: 'stat-icon' }),
          React.createElement('h3', null, '2,500+'),
          React.createElement('p', null, 'Homes Covered')
        ),
        React.createElement(
          'div',
          { className: 'stat-item' },
          React.createElement(MdSolarPower, { className: 'stat-icon' }),
          React.createElement('h3', null, 'Solar'),
          React.createElement('p', null, 'Company')
        ),
        React.createElement(
          'div',
          { className: 'stat-item' },
          React.createElement(IoStar, { className: 'stat-icon' }),
          React.createElement('h3', null, '5 Years'),
          React.createElement('p', null, 'Of Trust')
        ),
        React.createElement(
          'div',
          { className: 'stat-item' },
          React.createElement(FaUserFriends, { className: 'stat-icon' }),
          React.createElement('h3', null, '1,500+'),
          React.createElement('p', null, 'Happy Customers')
        )
      )
    ),
    // About Content
    React.createElement(
      'div',
      { className: 'about-content' },
      React.createElement(
        'div',
        { className: 'about-description' },
        React.createElement('h2', null, 'Why Partner with Us for Your Solar Energy Solutions?'),
        React.createElement('p', { className: 'subtitle' }, 'Experience, Innovation, and Commitment in Every Project'),
        React.createElement(
          'div',
          { className: 'description-text' },
          React.createElement('p', null, "At the core of our mission lies a profound commitment to transforming the way our world is powered: one solar solution at a time. With years of experience under our belt, our team brings a wealth of knowledge and a fresh perspective to each project, ensuring that every installation is tailored to meet our clients' specific needs.")
        ),
        React.createElement(
          'a',
          { href: '#', className: 'cta-link' },
          'Start Your Project ',
          React.createElement(MdKeyboardDoubleArrowRight, { className: 'arrow-icon' })
        )
      ),
      React.createElement(
        'div',
        { className: 'about-image' },
        React.createElement('img', { src: '/about.jpg', alt: 'Solar panel installation team' })
      )
    )
  );
};

export default About;
