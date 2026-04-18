import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components.css';

export default function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/prime-drive-logo.png" alt="Prime Drive" className="logo-img" />
        </Link>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}>
          {[
            { to: '/', label: 'Home' },
            { to: '/cars', label: 'Cars' },
            { to: '/hire', label: 'Hire' },
            { to: '/events', label: 'Events' },
            { to: '/sell', label: 'Sell' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={`nav-link ${isActive(to)}`} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
          <li className="nav-whatsapp-mobile">
            <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" onClick={closeMenu}>
              💬 WhatsApp
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            💬 WhatsApp
          </a>
        </div>
      </div>

      {menuOpen && (
        <button className="nav-overlay" aria-label="Close menu" onClick={closeMenu} />
      )}
    </nav>
  );
}
