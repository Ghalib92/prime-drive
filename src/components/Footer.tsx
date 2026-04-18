import { Link } from 'react-router-dom';
import '../styles/components.css';

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Prime Drive</h3>
            <p>Your trusted partner for vehicle sales, rentals, and unforgettable travel experiences across Kenya.</p>
            <div className="social-links">
              <a href="https://facebook.com/primedrive" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://instagram.com/primedrive" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://twitter.com/primedrive" target="_blank" rel="noopener noreferrer">𝕏</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/" onClick={scrollTop}>Home</Link></li>
              <li><Link to="/cars" onClick={scrollTop}>Browse Cars</Link></li>
              <li><Link to="/hire" onClick={scrollTop}>Rental Fleet</Link></li>
              <li><Link to="/events" onClick={scrollTop}>Events & Tours</Link></li>
              <li><Link to="/sell" onClick={scrollTop}>Sell Your Car</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about" onClick={scrollTop}>About Us</Link></li>
              <li><Link to="/contact" onClick={scrollTop}>Contact</Link></li>
              <li><Link to="/terms" onClick={scrollTop}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" onClick={scrollTop}>Privacy Policy</Link></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+254712345678">+254 712 345 678</a><br />
              <a href="tel:+254722345678">+254 722 345 678</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@primedrive.co.ke">info@primedrive.co.ke</a>
            </p>
            <p>
              <strong>WhatsApp:</strong><br />
              <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Prime Drive Motors. All rights reserved.</p>
          <p>Driving Kenya Forward | Quality. Trust. Service.</p>
        </div>
      </div>
    </footer>
  );
}
