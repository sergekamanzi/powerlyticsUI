import "./contact.css";
import { MdContactless } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-page">
      {/* ===== Top CTA ===== */}
      <div className="contact-hero">
        <h2>
          Need a place to analyse?<br />
          <span>This is where to be.</span>
        </h2>
        <p>
          Powerlytics is an excellent choice for households in rwanda, offering many helpful
          amenities designed to enhance your costs.
        </p>
        <button className="contact-btn">Contact Us <MdContactless /></button>
      </div>

      {/* ===== Map with floating card ===== */}
      <div className="contact-map-wrap">
        <iframe
            title="Kigali, Rwanda"
            className="contact-map"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63838.87907978794!2d30.016!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425d0c04a9d%3A0x2b2e1b6c1b1c0e5a!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v0000000000000"
            />


        <aside className="contact-card" aria-label="Contact Details">
          <div className="card-media">
            {/* Replace with your hotel image if you have one */}
            <img
              src="/contact.jfif"
              alt="Hotel thumbnail"
            />
          </div>
          <div className="card-body">
            <h3>Powerlytics company ltd</h3>
            <address>
              P.O Box 123, Karuruma, Kigali<br />
              <a href="tel:+2348146842062">(+250) 780032791</a><br />
              <a href="mailto:bamshotel@gmail.com">info@powerlytics.com</a>
            </address>
          </div>
        </aside>
      </div>

      {/* ===== Footer block ===== */}
      <footer className="contact-footer">
        <div className="footer-inner">
          <div className="col">
            <h4>About</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our products</a></li>
              <li><a href="#">opportunities</a></li>
              <li><a href="#">events</a></li>
              <li><a href="#">Location</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>About</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>About</h4>
            <ul>
              <li><a href="#">Households</a></li>
              <li><a href="#">Resorts</a></li>
              <li><a href="#">Lounge</a></li>
              <li><a href="#">Spa</a></li>
            </ul>
          </div>

          <div className="brand-col">
            <div className="brand">Bams</div>
            <a className="brand-phone" href="tel:+2348146842062">+250 780032791</a>
            <a className="brand-mail" href="mailto:bamshotel@gmail.com">info@powerlytics.com</a>

            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" aria-label="Email" />
              <button type="submit" aria-label="Subscribe">›</button>
            </form>

            <div className="socials" aria-label="Social media">
              <a href="#" aria-label="Instagram" className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.48v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          &copy;2025 Copyright, All Right Reserved – AwGE
        </div>
      </footer>
    </section>
  );
};

export default Contact;
