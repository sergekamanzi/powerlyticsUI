import React, { useEffect, useState } from 'react';
import './about.css';
import { IoHomeSharp, IoStar } from "react-icons/io5";
import { MdSolarPower, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

// Small count-up component (mount/refresh animates 0 -> end)
const CountUp = ({ end, duration = 1200, suffix = '', className }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeInOutCubic: starts slow, speeds up, then slows near the end
      const eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = Math.round(eased * end);
      setValue(current);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  const formatted = Number.isFinite(value) ? value.toLocaleString() : value;
  return <span className={className}>{formatted}{suffix}</span>;
};

const About = () => {
  return (
    <div id="why-us" className="main-about" data-reveal="up">
      <div className="stats-container" data-reveal="up">
        <div className="about-icons">
          <div className="stat-item" data-reveal="left">
            <IoHomeSharp className="stat-icon" />
            <h3><CountUp end={2500} duration={3500} suffix="+" /></h3>
            <p>Homes Covered</p>
          </div>

          <div className="stat-item" data-reveal="right" style={{ '--reveal-delay': '80ms' }}>
            <MdSolarPower className="stat-icon" />
            <h3>Solar</h3>
            <p>Company</p>
          </div>

          <div className="stat-item" data-reveal="left" style={{ '--reveal-delay': '160ms' }}>
            <IoStar className="stat-icon" />
            <h3><CountUp end={5} duration={2800} /> Years</h3>
            <p>Of Trust</p>
          </div>

          <div className="stat-item" data-reveal="right" style={{ '--reveal-delay': '240ms' }}>
            <FaUserFriends className="stat-icon" />
            <h3><CountUp end={1500} duration={3300} suffix="+" /></h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-description" data-reveal="left">
          <h2>Why Partner with Us for Your Solar Energy Solutions?</h2>
          <p className="subtitle">Experience, Innovation, and Commitment in Every Project</p>
          <div className="description-text">
            <p>
              At the core of our mission lies a profound commitment to transforming the way our world is powered: one solar solution at a time.
              With years of experience under our belt, our team brings a wealth of knowledge and a fresh perspective to each project, ensuring that
              every installation is tailored to meet our clients' specific needs.
            </p>
          </div>
          <a href="#" className="cta-link">
            Start Your Project <MdKeyboardDoubleArrowRight className="arrow-icon" />
          </a>
        </div>
        <div className="about-image" data-reveal="right">
          <img src="/about.jpg" alt="Solar panel installation team" />
        </div>
      </div>

        {/* Technologies Slider */}
        <div className="tech-strip-wrapper" data-reveal="up">
          <div className="tech-strip" aria-label="Partner technologies carousel">
            <div className="tech-track">
              {[
                { src: '/1.avif', alt: '' },
                { src: '/2.jpg', alt: '' },
                { src: '/3.jpg', alt: '' },
                { src: '/7.jpg', alt: '' },
                { src: '/5.webp', alt: '' },
                { src: '/6.jpg', alt: '' },
                { src: '/4.jpg', alt: '' }
              ].map((logo, i) => (
                <div className="tech-item" key={logo.alt + i}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                 { src: '/1.avif', alt: '' },
                { src: '/2.jpg', alt: '' },
                { src: '/3.jpg', alt: '' },
                { src: '/7.jpg', alt: '' },
                { src: '/5.webp', alt: '' },
                { src: '/6.jpg', alt: '' },
                { src: '/4.jpg', alt: '' }
              ].map((logo, i) => (
                <div className="tech-item" key={logo.alt + 'dup' + i} aria-hidden="true">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
