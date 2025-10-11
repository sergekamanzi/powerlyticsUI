import './whatsapp.css';

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
        <span className="badge-text">Chatbot</span>
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.478A11.94 11.94 0 0 0 12.03.003C6.07.003 1.14 4.93 1.14 10.89c0 1.92.5 3.74 1.45 5.34L.12 23.1l7.1-1.86c1.48.4 3.02.61 4.8.61 5.96 0 10.89-4.93 10.89-10.89 0-3.01-1.17-5.81-3.49-7.45z" fill="#25D366"/>
            <path d="M17.1 14.07c-.26-.13-1.54-.76-1.78-.84-.24-.08-.42-.13-.6.13-.18.26-.7.84-.86 1.01-.16.17-.32.19-.59.06-.27-.13-1.14-.42-2.17-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.19.04-.35-.02-.48-.06-.13-.6-1.45-.83-1.99-.22-.52-.45-.45-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.02 1.28.53 1.8.57 2.44.48.37-.06 1.18-.48 1.35-.95.17-.47.17-.88.12-.96-.05-.08-.18-.13-.44-.25z" fill="#fff"/>
          </svg>
        </div>
        <span className="whatsapp-label">How can we help you?</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
