import "./hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showPricing, setShowPricing] = useState(false);

  const openWhatsApp = () => {
    const phone = '250780032791'; // Assumes Rwanda country code
    const text = encodeURIComponent('Hi! I would like to book a free call.');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openPricing = () => setShowPricing(true);
  const closePricing = () => setShowPricing(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closePricing(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content" data-reveal="left">
        <h1>Empowering Smarter Energy Choices to Cut Your Power Bills.</h1>
        <p>Switch to smart, clean energy. Discover insights, tools, and data‑driven solutions to optimize consumption from day one.</p>
  <div className="hero-buttons" data-reveal="up" style={{"--reveal-delay":"120ms"}}>
          <button className="cta primary" onClick={openWhatsApp}>Book a Free Call</button>
          <button className="cta secondary" onClick={openPricing}>Get a Free Quote</button>
        </div>
  <div className="eco-badge" data-reveal="up" style={{"--reveal-delay":"220ms"}}>
          <span>Eco‑Friendly Energy</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {showPricing && (
        <div className="pricing-overlay" onClick={(e) => { if (e.target === e.currentTarget) closePricing(); }}>
          <div className="pricing-modal">
            {/* Header */}
            <button className="pricing-close" aria-label="Close" onClick={closePricing}>×</button>
            <div className="pricing-header">
              <img src="/logo3.png" alt="Powerlytics" className="pricing-logo" onClick={() => window.location.href = '/'} />
              <h2>Smart Energy Plans</h2>
            </div>

            {/* Plans */}
            <div className="pricing-grid">
              {/* Free */}
              <div className="plan-card">
                <div className="plan-badge">Basic</div>
                <h3>Free</h3>
                <div className="price">$0<span>/month</span></div>
                <ul className="features">
                  <li>Instant bill estimate</li>
                  <li>Up to 5 appliances</li>
                  <li>1 forecast per month</li>
                  <li>Community tips</li>
                </ul>
                <button className="plan-cta" onClick={() => window.location.href = '/'}>Start Free</button>
              </div>

              {/* Smart Saver */}
              <div className="plan-card popular">
                <div className="plan-badge">Popular</div>
                <h3>Smart Saver</h3>
                <div className="price">$15<span>/month</span></div>
                <ul className="features">
                  <li>Detailed energy breakdown</li>
                  <li>Up to 20 appliances</li>
                  <li>Monthly forecasts & alerts</li>
                  <li>AI savings recommendations</li>
                  <li>Exportable reports (PDF/CSV)</li>
                </ul>
                <button className="plan-cta primary" onClick={openWhatsApp}>Get Quote</button>
              </div>

              {/* Power Pro */}
              <div className="plan-card">
                <div className="plan-badge">Advanced</div>
                <h3>Power Pro</h3>
                <div className="price">$30<span>/month</span></div>
                <ul className="features">
                  <li>Unlimited appliances</li>
                  <li>Weekly anomaly detection</li>
                  <li>Tariff optimization advisor</li>
                  <li>Priority support</li>
                  <li>Family multi-profile</li>
                </ul>
                <button className="plan-cta" onClick={openWhatsApp}>Talk to Sales</button>
              </div>
            </div>

            <p className="tiny-note">Prices shown are examples. Contact us for local currency and annual discounts.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;