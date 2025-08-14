import './about.css'
import { IoHomeSharp } from "react-icons/io5";
import { MdSolarPower } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className='main-about'>
      <div className='stats-container'>
        <div className='about-icons'>
          <div className='stat-item'>
            <IoHomeSharp className="stat-icon" />
            <h3>2,500+</h3>
            <p>Homes Covered</p>
          </div>
          <div className='stat-item'>
            <MdSolarPower className="stat-icon" />
            <h3>Solar</h3>
            <p>Company</p>
          </div>
          <div className='stat-item'>
            <IoStar className="stat-icon" />
            <h3>5 Years</h3>
            <p>Of Trust</p>
          </div>
          <div className='stat-item'>
            <FaUserFriends className="stat-icon" />
            <h3>1,500+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      
      <div className='about-content'>
        <div className='about-description'>
          <h2>Why Partner with Us for Your Solar Energy Solutions?</h2>
          <p className="subtitle">Experience, Innovation, and Commitment in Every Project</p>
          <div className="description-text">
            <p>At the core of our mission lies a profound commitment to transforming the way our world is powered: one solar solution at a time. With years of experience under our belt, our team brings a wealth of knowledge and a fresh perspective to each project, ensuring that every installation is tailored to meet our clients' specific needs.</p>
          </div>
          <a href="#" className="cta-link">
            Start Your Project <MdKeyboardDoubleArrowRight className="arrow-icon" />
          </a>
        </div>
        <div className='about-image'>
          <img src="/about.jpg" alt="Solar panel installation team" />
        </div>
      </div>
    </div>
  )
}

export default About