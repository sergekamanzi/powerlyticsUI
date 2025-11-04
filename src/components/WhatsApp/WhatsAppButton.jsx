import './whatsapp.css';
import { FaWhatsapp } from 'react-icons/fa';

// Change this to your WhatsApp number in international format without + or leading zeros, e.g. 250788123456
const WHATSAPP_NUMBER = '250780032791';
const DEFAULT_MESSAGE = encodeURIComponent('Hi! I found your site and would like to get in touch about energy services.');

const WhatsAppButton = ({ phone = WHATSAPP_NUMBER, message = DEFAULT_MESSAGE }) => {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="whatsapp-container">
      <a
        className="whatsapp-badge"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start chat on WhatsApp"
        title="Start chat"
      >
      </a>

      <a
        className="whatsapp-button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <div className="whatsapp-icon" aria-hidden>
          <FaWhatsapp size={22} color="#ffffff" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
