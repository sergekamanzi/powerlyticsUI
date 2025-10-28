import React from 'react';
import './about.css';
import { IoHomeSharp, IoStar } from "react-icons/io5";
import { MdSolarPower, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { motion } from 'framer-motion';
import { slideVariants, staggerContainer, fadeIn } from '../../utils/motion';

const About = () => {
  return React.createElement(
    motion.div,
    {
      id: 'why-us',
      className: 'main-about',
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.25 },
      variants: staggerContainer(0.12)
    },
    React.createElement(
  motion.div,
  { className: 'stats-container', variants: fadeIn(0.05) },
      React.createElement(
  motion.div,
  { className: 'about-icons', variants: staggerContainer(0.08) },
        React.createElement(
          motion.div,
          { className: 'stat-item', variants: slideVariants(false, 60) },
          React.createElement(IoHomeSharp, { className: 'stat-icon' }),
          React.createElement('h3', null, '2,500+'),
          React.createElement('p', null, 'Homes Covered')
        ),
        React.createElement(
          motion.div,
          { className: 'stat-item', variants: slideVariants(true, 60) },
          React.createElement(MdSolarPower, { className: 'stat-icon' }),
          React.createElement('h3', null, 'Solar'),
          React.createElement('p', null, 'Company')
        ),
        React.createElement(
          motion.div,
          { className: 'stat-item', variants: slideVariants(false, 60) },
          React.createElement(IoStar, { className: 'stat-icon' }),
          React.createElement('h3', null, '5 Years'),
          React.createElement('p', null, 'Of Trust')
        ),
        React.createElement(
          motion.div,
          { className: 'stat-item', variants: slideVariants(true, 60) },
          React.createElement(FaUserFriends, { className: 'stat-icon' }),
          React.createElement('h3', null, '1,500+'),
          React.createElement('p', null, 'Happy Customers')
        )
      )
    ),
    // About Content
    React.createElement(
  motion.div,
  { className: 'about-content', variants: fadeIn(0.15) },
      React.createElement(
  motion.div,
  { className: 'about-description', variants: slideVariants(false, 70) },
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
  motion.div,
  { className: 'about-image', variants: slideVariants(true, 70) },
        React.createElement('img', { src: '/about.jpg', alt: 'Solar panel installation team' })
      )
    )
  );
};

export default About;
