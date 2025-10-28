import React from 'react';
import './contact.css';
import { MdContactless } from 'react-icons/md';
import { motion } from 'framer-motion';
import { slideVariants, staggerContainer, fadeIn } from '../../utils/motion';

const Contact = () => {
  return React.createElement(
    motion.section,
    {
      id: 'contact',
      className: 'contact-page',
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.25 },
      variants: staggerContainer(0.12)
    },

    // ===== Top CTA =====
    React.createElement(
      motion.div,
      { className: 'contact-hero', variants: slideVariants(false, 80) },
      React.createElement(
        'h2',
        null,
        'Need a place to analyse?',
        React.createElement('br', null),
        React.createElement('span', null, 'This is where to be.')
      ),
      React.createElement(
        motion.p,
        { variants: fadeIn(0.15) },
        'Powerlytics is an excellent choice for households in rwanda, offering many helpful amenities designed to enhance your costs.'
      ),
      React.createElement(
        'button',
        { className: 'contact-btn' },
        'Contact Us ',
        React.createElement(MdContactless, null)
      )
    ),

    // ===== Map with floating card =====
    React.createElement(
      motion.div,
      { className: 'contact-map-wrap', variants: slideVariants(true, 80) },
      React.createElement('iframe', {
        title: 'Kigali, Rwanda',
        className: 'contact-map',
        loading: 'lazy',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63838.87907978794!2d30.016!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425d0c04a9d%3A0x2b2e1b6c1b1c0e5a!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v0000000000000'
      }),
      React.createElement(
        motion.aside,
        { className: 'contact-card', 'aria-label': 'Contact Details', variants: fadeIn(0.2) },
        React.createElement(
          'div',
          { className: 'card-media' },
          React.createElement('img', { src: '/contact.jfif', alt: 'Hotel thumbnail' })
        ),
        React.createElement(
          'div',
          { className: 'card-body' },
          React.createElement('h3', null, 'Powerlytics company ltd'),
          React.createElement(
            'address',
            null,
            'P.O Box 123, Karuruma, Kigali',
            React.createElement('br', null),
            React.createElement('a', { href: 'tel:+2348146842062' }, '(+250) 780032791'),
            React.createElement('br', null),
            React.createElement('a', { href: 'mailto:bamshotel@gmail.com' }, 'info@powerlytics.com')
          )
        )
      )
    ),

    // ===== Footer block =====
    React.createElement(
      'footer',
      { className: 'contact-footer' },
      React.createElement(
        'div',
        { className: 'footer-inner' },

        // Column 1
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement('h4', null, ''),
          React.createElement(
            'ul',
            null,
            ['Services', 'Our products', 'opportunities', 'events', 'Location'].map((item, i) =>
              React.createElement(
                'li',
                { key: i },
                React.createElement('a', { href: '#' }, item)
              )
            )
          )
        ),

        // Column 2
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement('h4', null, ''),
          React.createElement(
            'ul',
            null,
            ['About us', 'Terms and conditions', 'Privacy policy', 'News', 'Contact us'].map((item, i) =>
              React.createElement(
                'li',
                { key: i },
                React.createElement('a', { href: '#' }, item)
              )
            )
          )
        ),

        // Column 3
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement('h4', null, ''),
          React.createElement(
            'ul',
            null,
            ['Households', 'Resorts', 'Lounge', 'Spa'].map((item, i) =>
              React.createElement(
                'li',
                { key: i },
                React.createElement('a', { href: '#' }, item)
              )
            )
          )
        ),

        // Brand Column
        React.createElement(
          'div',
          { className: 'brand-col' },
          React.createElement('div', { className: 'brand' }, 'Powerlytics'),
          React.createElement('a', { className: 'brand-phone', href: 'tel:+2348146842062' }, '+250 780032791'),
          React.createElement('a', { className: 'brand-mail', href: 'mailto:bamshotel@gmail.com' }, 'info@powerlytics.com'),
          React.createElement(
            'form',
            { className: 'newsletter', onSubmit: (e) => e.preventDefault() },
            React.createElement('input', { type: 'email', placeholder: 'Email', 'aria-label': 'Email' }),
            React.createElement('button', { type: 'submit', 'aria-label': 'Subscribe' }, '›')
          ),
          React.createElement(
            'div',
            { className: 'socials', 'aria-label': 'Social media' },
            ['Instagram', 'Twitter', 'Facebook'].map((platform, i) =>
              React.createElement(
                'a',
                { key: i, href: '#', 'aria-label': platform, className: 'ic' },
                React.createElement('svg', { viewBox: '0 0 24 24', 'aria-hidden': 'true' },
                  React.createElement('path', { d: platform === 'Instagram' ? "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" :
                                      platform === 'Twitter' ? "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.48v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" :
                                      "M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" }))
              )
            )
          )
        )
      ),

      // Copyright
      React.createElement(
        'div',
        { className: 'copyright' },
        '\u00A92025 Copyright, All Right Reserved – AwGE'
      )
    )
  );
};

export default Contact;
