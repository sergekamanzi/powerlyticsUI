import "./hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { slideVariants, staggerContainer, fadeIn } from "../../utils/motion";

const Hero = () => {
  const openWhatsApp = () => {
    const phone = '250780032791'; // Assumes Rwanda country code
    const text = encodeURIComponent('Hi! I would like to book a free call.');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer()}
    >
      <motion.div className="hero-content" variants={slideVariants(false, 90, 0.7)}>
        <motion.h1 variants={fadeIn(0.05)}>
          Empowering Smarter Energy Choices to Cut Your Power Bills.
        </motion.h1>
        <motion.p variants={fadeIn(0.15)}>
          Switch to smart, clean energy. Discover insights, tools, and data‑driven solutions to optimize consumption from day one.
        </motion.p>
        <motion.div className="hero-buttons" variants={fadeIn(0.25)}>
          <button className="cta primary" onClick={openWhatsApp}>Book a Free Call</button>
          <button className="cta secondary">Get a Free Quote</button>
        </motion.div>
        <motion.div className="eco-badge" variants={fadeIn(0.35)}>
          <span>Eco‑Friendly Energy</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;