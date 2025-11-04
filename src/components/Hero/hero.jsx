import "./hero.css";

const Hero = () => {
  const openWhatsApp = () => {
    const phone = '250780032791'; // Assumes Rwanda country code
    const text = encodeURIComponent('Hi! I would like to book a free call.');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero">
      <div className="hero-content" data-reveal="left">
        <h1>Empowering Smarter Energy Choices to Cut Your Power Bills.</h1>
        <p>Switch to smart, clean energy. Discover insights, tools, and data‑driven solutions to optimize consumption from day one.</p>
  <div className="hero-buttons" data-reveal="up" style={{"--reveal-delay":"120ms"}}>
          <button className="cta primary" onClick={openWhatsApp}>Book a Free Call</button>
          <button className="cta secondary">Get a Free Quote</button>
        </div>
  <div className="eco-badge" data-reveal="up" style={{"--reveal-delay":"220ms"}}>
          <span>Eco‑Friendly Energy</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;