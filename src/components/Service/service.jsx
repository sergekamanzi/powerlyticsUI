import { GoAlertFill } from "react-icons/go";   
import { MdOutlineInsertChart, MdDashboard } from "react-icons/md"; 
import { AiOutlineCluster } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";   
import { FaBolt } from "react-icons/fa"; 
import './service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      icon: <MdOutlineInsertChart />,
      title: "Energy Prediction",
      description: "Smart forecasting of household energy usage to help users plan consumption efficiently.",
      position: "top-left"
    },
    {
      id: 2,
      icon: <AiOutlineCluster />,
      title: "User Segmentation",
      description: "Advanced clustering analysis to identify low, medium, and high energy consumption groups across Rwanda.",
      position: "left"
    },
    {
      id: 3,
      icon: <GoAlertFill />,
      title: "Anomaly Detection",
      description: "Automatically detect unusual usage spikes or potential meter faults for timely interventions.",
      position: "bottom-left"
    },
    {
      id: 4,
      icon: <BiSolidReport />,
      title: "Weekly Reports",
      description: "Get clear weekly insights on energy usage, bills, and growth trends in your household or region.",
      position: "top-right"
    },
    {
      id: 5,
      icon: <FaBolt />,
      title: "Appliance Analytics",
      description: "Discover which appliances consume the most power and receive personalized efficiency tips.",
      position: "right"
    },
    {
      id: 6,
      icon: <MdDashboard />,
      title: "Business Intelligence",
      description: "Empowering decision-makers with revenue analytics, tariff trends, and regional performance insights.",
      position: "bottom-right"
    }
  ];

  return (
    <section id="services" className="ecosystem-container" data-reveal="up">
      <h1 className="ecosystem-title" data-reveal="up">POWERLYTICS'S INTEGRATED ECOSYSTEM</h1>
      
      <div className="ecosystem-wrapper">
        <div className="center-logo">
          <img src='/logo3.png' alt='Company Logo' className='logo-img' />
        </div>

        {services.map((service, idx) => {
          const pos = service.position || '';
          const dir = pos.includes('left') ? 'left' : pos.includes('right') ? 'right' : 'up';
          return (
          <div key={service.id} className={`service-item ${service.position}`} data-reveal={dir} style={{"--reveal-delay": `${idx*80}ms`}}>
            <div className="dotted-line"></div>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
};

export default Service;
