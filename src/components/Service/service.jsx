import './service.css';
import { FaSolarPanel, FaBatteryThreeQuarters, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2>Solar Solutions That Work</h2>
          <p className="subtitle">Tailored To Perfection</p>
        </div>

        <div className="services-grid">
          {/* Solar Panel Install */}
          <div className="service-card">
            <div className="service-icon">
              <FaSolarPanel />
            </div>
            <h3>Solar Panel Install</h3>
            <p>Tailor-made solar solutions designed to fit the unique specifications of your home or business.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Storage Solutions */}
          <div className="service-card">
            <div className="service-icon">
              <FaBatteryThreeQuarters />
            </div>
            <h3>Storage Solutions</h3>
            <p>Ensure uninterrupted power with our cutting-edge solar battery storage solutions.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Efficiency Audit */}
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine />
            </div>
            <h3>Efficiency Audit</h3>
            <p>Maximize your investment with our comprehensive solar efficiency audits, government approved!</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Financing & Incentives */}
          <div className="service-card">
            <div className="service-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Financing & Incentives</h3>
            <p>Navigate the financial aspects of going solar with ease. Includes incentives, rebates, grants and more.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;