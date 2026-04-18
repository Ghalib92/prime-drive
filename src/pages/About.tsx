import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <img src="/cars/toyoto1.jpeg" alt="Prime Drive Fleet" className="about-hero-img" />
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>About Prime Drive</h1>
            <p>Kenya's trusted platform for premium car sales, fleet hire, and adventure travel</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Mission & Vision */}
        <section className="about-mv-section">
          <div className="about-mv-grid">
            <div className="about-mv-card">
              <span className="about-mv-icon">🎯</span>
              <h2>Our Mission</h2>
              <p>To provide Kenyans with affordable, reliable, and exceptional automotive solutions — from vehicle sales and fleet rentals to curated travel experiences — built on transparency and customer trust.</p>
            </div>
            <div className="about-mv-card">
              <span className="about-mv-icon">🌍</span>
              <h2>Our Vision</h2>
              <p>To become East Africa's leading automotive and travel services platform, known for innovation, quality, and the relationships we build with every customer.</p>
            </div>
          </div>
        </section>

        {/* Story with image */}
        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="about-story-images">
              <img src="/cars/mercedez1.jpeg" alt="Premium vehicles" className="about-story-img about-story-img-main" />
              <img src="/cars/bus.jpeg" alt="Fleet buses" className="about-story-img about-story-img-secondary" />
            </div>
            <div className="about-story-content">
              <h2>Our Story</h2>
              <p>Prime Drive was founded in 2020 with one clear goal: make vehicle ownership and travel experiences accessible and hassle-free for every Kenyan.</p>
              <p>What started as a small car sales operation has grown into a full-service automotive and travel platform — serving thousands of satisfied customers across Kenya.</p>
              <ul className="about-offerings">
                <li>✓ Premium pre-owned and new vehicles for sale</li>
                <li>✓ Professional coach and matatu rental services</li>
                <li>✓ Curated group tours and adventure experiences</li>
                <li>✓ Transparent pricing — no hidden costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats-section">
          <div className="about-stats-grid">
            <div className="about-stat">
              <strong>18+</strong>
              <span>Cars Available</span>
            </div>
            <div className="about-stat">
              <strong>7</strong>
              <span>Hire Vehicles</span>
            </div>
            <div className="about-stat">
              <strong>6+</strong>
              <span>Monthly Events</span>
            </div>
            <div className="about-stat">
              <strong>5,000+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </section>

        {/* Fleet Showcase */}
        <section className="about-fleet-section">
          <h2>Our Fleet at a Glance</h2>
          <p className="about-fleet-sub">From luxury SUVs to safari matatus — we have the right vehicle for every occasion.</p>
          <div className="about-fleet-gallery">
            <div className="fleet-gallery-item fleet-gallery-large">
              <img src="/cars/lexus3.jpeg" alt="Luxury SUV" />
              <span>Luxury SUVs</span>
            </div>
            <div className="fleet-gallery-item">
              <img src="/cars/audi 1.jpeg" alt="Premium Sedans" />
              <span>Premium Sedans</span>
            </div>
            <div className="fleet-gallery-item">
              <img src="/cars/matatu1.jpeg" alt="Matatus" />
              <span>Matatus</span>
            </div>
            <div className="fleet-gallery-item fleet-gallery-large">
              <img src="/cars/bus2.jpeg" alt="Coaches" />
              <span>Coaches & Buses</span>
            </div>
            <div className="fleet-gallery-item">
              <img src="/cars/subaru1.jpeg" alt="AWD Vehicles" />
              <span>AWD & Off-Road</span>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values-section">
          <h2>What We Stand For</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <span>🤝</span>
              <h3>Integrity</h3>
              <p>Complete honesty and transparency in every transaction.</p>
            </div>
            <div className="about-value-card">
              <span>⭐</span>
              <h3>Quality</h3>
              <p>Every vehicle meets our strict inspection standards.</p>
            </div>
            <div className="about-value-card">
              <span>❤️</span>
              <h3>Customer First</h3>
              <p>Your satisfaction drives every decision we make.</p>
            </div>
            <div className="about-value-card">
              <span>🔧</span>
              <h3>Reliability</h3>
              <p>Well-maintained fleet and consistent, dependable service.</p>
            </div>
            <div className="about-value-card">
              <span>💡</span>
              <h3>Innovation</h3>
              <p>Continuously improving how Kenyans buy, hire, and travel.</p>
            </div>
            <div className="about-value-card">
              <span>🌱</span>
              <h3>Community</h3>
              <p>Invested in the growth and prosperity of our communities.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final">
          <h2>Ready to Work With Us?</h2>
          <p>Whether you're buying, selling, hiring, or planning an adventure — we're here.</p>
          <div className="cta-buttons">
            <Link to="/cars" className="btn btn-primary">Browse Our Cars</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
