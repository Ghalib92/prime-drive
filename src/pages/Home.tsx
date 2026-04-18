import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { vehicles } from '../data/vehicles';
import { events } from '../data/events';
import '../styles/pages.css';

const featuredCars = cars.filter(c => c.forSale && c.status === 'available').slice(0, 3);
const featuredVehicles = vehicles.filter(v => v.availability).slice(0, 3);
const featuredEvents = events.slice(0, 3);

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url('/cars/lexus1.jpeg')` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Kenya's Premier Automotive Platform</span>
          <h1>Drive Your Dream.<br /><span className="hero-h1-accent">Travel in Style.</span></h1>
          <p>Buy, hire, or explore — Prime Drive connects you with premium cars, buses, and unforgettable adventures.</p>
          <div className="hero-cta">
            <Link to="/cars" className="btn btn-primary btn-large">Browse Cars</Link>
            <Link to="/hire" className="btn btn-secondary btn-large">Hire a Vehicle</Link>
            <Link to="/events" className="btn btn-ghost btn-large">Explore Events</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-arrow" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar" data-anim="fade-up">
        <div className="container stats-bar-inner">
          <div className="stat-item">
            <strong>{cars.length}+</strong>
            <span>Cars Listed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>{vehicles.length}</strong>
            <span>Hire Vehicles</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>{events.length}</strong>
            <span>Upcoming Events</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>5,000+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <section className="featured-section">
        <div className="container">
          <div className="section-heading" data-anim="fade-up">
            <span className="section-eyebrow">For Sale & Hire</span>
            <h2>Featured Cars</h2>
            <p>Handpicked premium vehicles — ready for sale or hire</p>
          </div>
          <div className="preview-grid">
            {featuredCars.map((car, i) => (
              <div key={car.id} className="preview-card" data-anim="fade-up" data-anim-delay={String(i + 1)}>
                <div className="preview-card-img">
                  <img src={car.images[0]} alt={car.name} loading="lazy" />
                  <div className="preview-card-img-overlay" />
                  <div className="preview-card-tags">
                    {car.forSale && <span className="tag tag-sale">For Sale</span>}
                    {car.forHire && <span className="tag tag-hire">For Hire</span>}
                  </div>
                </div>
                <div className="preview-card-body">
                  <h3>{car.name}</h3>
                  <p className="preview-meta">{car.year} &bull; {car.fuel} &bull; {car.transmission}</p>
                  <p className="price">KES {car.price.toLocaleString()}</p>
                  <p className="preview-desc">{car.description.slice(0, 80)}…</p>
                  <Link to={`/cars/${car.id}`} className="btn btn-outline">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta" data-anim="fade-up">
            <Link to="/cars" className="btn btn-primary btn-large">View All Cars</Link>
          </div>
        </div>
      </section>

      {/* Hire Fleet */}
      <section className="fleet-section">
        <div className="container">
          <div className="section-heading" data-anim="fade-up">
            <span className="section-eyebrow">Group Travel</span>
            <h2>Hire Our Fleet</h2>
            <p>Professional buses and matatus for events, tours, and group travel</p>
          </div>
          <div className="preview-grid">
            {featuredVehicles.map((vehicle, i) => (
              <div key={vehicle.id} className="preview-card" data-anim="fade-up" data-anim-delay={String(i + 1)}>
                <div className="preview-card-img">
                  <img src={vehicle.images[0]} alt={vehicle.name} loading="lazy" />
                  <div className="preview-card-img-overlay" />
                  <span className="preview-type-badge">{vehicle.type}</span>
                </div>
                <div className="preview-card-body">
                  <h3>{vehicle.name}</h3>
                  <p className="preview-meta">{vehicle.capacity} passengers &bull; {vehicle.seatingType}</p>
                  <p className="price">KES {vehicle.pricePerDay.toLocaleString()}<span className="per-day">/day</span></p>
                  <p className="preview-desc">{vehicle.description.slice(0, 80)}…</p>
                  <Link to={`/hire/${vehicle.id}`} className="btn btn-outline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta" data-anim="fade-up">
            <Link to="/hire" className="btn btn-primary btn-large">View Full Fleet</Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container">
          <div className="section-heading" data-anim="fade-up">
            <span className="section-eyebrow">Adventures Await</span>
            <h2>Upcoming Adventures</h2>
            <p>Join our curated trips and create unforgettable memories</p>
          </div>
          <div className="preview-grid">
            {featuredEvents.map((event, i) => (
              <div key={event.id} className="preview-card" data-anim="fade-up" data-anim-delay={String(i + 1)}>
                <div className="preview-card-img">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <div className="preview-card-img-overlay" />
                </div>
                <div className="preview-card-body">
                  <h3>{event.title}</h3>
                  <p className="preview-meta">
                    {new Date(event.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })}
                    &nbsp;&bull;&nbsp;{event.location}
                  </p>
                  <p className="price">KES {event.price.toLocaleString()} <span className="per-day">/ person</span></p>
                  <p className="preview-seats">{event.seatsAvailable} seats left</p>
                  <Link to={`/events/${event.id}`} className="btn btn-outline">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta" data-anim="fade-up">
            <Link to="/events" className="btn btn-primary btn-large">Explore All Events</Link>
          </div>
        </div>
      </section>

      {/* Why Prime Drive */}
      <section className="why-section">
        <div className="container">
          <div className="section-heading" data-anim="fade-up">
            <span className="section-eyebrow">Our Promise</span>
            <h2>Why Choose Prime Drive?</h2>
            <p>We've built our reputation on trust, quality, and service</p>
          </div>
          <div className="why-grid">
            {[
              { icon: '🏆', title: 'Verified Listings', desc: 'Every car is inspected and verified before listing — no surprises.' },
              { icon: '💳', title: 'Flexible Payment', desc: 'M-Pesa, bank transfer, or financing through our partner banks.' },
              { icon: '🛡️', title: 'Fully Insured Fleet', desc: 'All hire vehicles carry comprehensive insurance coverage.' },
              { icon: '📞', title: '24/7 Support', desc: 'Call, WhatsApp, or email — we\'re always available to help.' },
            ].map((item, i) => (
              <div key={item.title} className="why-card" data-anim="fade-up" data-anim-delay={String(i + 1)}>
                <span className="why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-anim="fade-up">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Whether you're buying, hiring, or exploring — Prime Drive has you covered.</p>
          <div className="cta-buttons">
            <Link to="/sell" className="btn btn-secondary">Sell Your Car</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
