import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-number">404</div>
          <h1>Page Not Found</h1>
          <p>Oops! It looks like you've taken a wrong turn.</p>
          <p className="subtitle">The page you're looking for doesn't exist or has been moved.</p>

          <div className="not-found-suggestions">
            <h2>Where would you like to go?</h2>
            <div className="suggestion-links">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <Link to="/cars" className="btn btn-secondary">
                Browse Cars
              </Link>
              <Link to="/hire" className="btn btn-secondary">
                Explore Fleet
              </Link>
              <Link to="/events" className="btn btn-secondary">
                View Events
              </Link>
            </div>
          </div>

          <div className="not-found-help">
            <p>Still need help?</p>
            <Link to="/contact" className="link">
              Contact our support team →
            </Link>
          </div>
        </div>

        <div className="not-found-graphic">
          <div className="graphic-placeholder">
            <p>🚗</p>
          </div>
        </div>
      </div>
    </div>
  );
}
