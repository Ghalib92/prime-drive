import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import '../styles/pages.css';

export default function HireDetail() {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === Number(id));
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!vehicle) {
    return (
      <div className="not-found">
        <h1>Vehicle Not Found</h1>
        <p>The vehicle you're looking for is not available.</p>
        <Link to="/hire" className="btn btn-primary">
          Back to Fleet
        </Link>
      </div>
    );
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Booking request received! We will contact you shortly with confirmation.');
      setShowBookingModal(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="hire-detail-page">
      <Link to="/hire" className="back-link">← Back to Fleet</Link>

      <div className="container">
        <div className="detail-grid">
          {/* Image */}
          <div className="detail-gallery">
            <div className="main-image">
              <img src={vehicle.images[0]} alt={vehicle.name} />
            </div>
          </div>

          {/* Details */}
          <div className="detail-content">
            <div className="detail-header">
              <h1>{vehicle.name}</h1>
              <p className="vehicle-type">{vehicle.type}</p>
              <p className="price-large">KES {vehicle.pricePerDay.toLocaleString()} <span>/day</span></p>
              <span className={`availability-badge ${vehicle.availability ? 'available' : 'unavailable'}`}>
                {vehicle.availability ? '✓ Available for Booking' : '✗ Currently Unavailable'}
              </span>
            </div>

            {/* Specs */}
            <div className="specs-grid">
              <div className="spec">
                <span className="spec-label">Passenger Capacity</span>
                <span className="spec-value">{vehicle.capacity} people</span>
              </div>
              <div className="spec">
                <span className="spec-label">Seating Type</span>
                <span className="spec-value">{vehicle.seatingType}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Vehicle Type</span>
                <span className="spec-value">{vehicle.type}</span>
              </div>
            </div>

            {/* Description */}
            <div className="description">
              <h2>About This Vehicle</h2>
              <p>{vehicle.description}</p>
            </div>

            {/* All Features */}
            <div className="features">
              <h3>Features & Amenities</h3>
              <ul className="features-list">
                {vehicle.features.map((feature, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              className="btn btn-primary btn-large"
              onClick={() => setShowBookingModal(true)}
              disabled={!vehicle.availability}
            >
              {vehicle.availability ? 'Book This Vehicle' : 'Currently Unavailable'}
            </button>

            {/* Why Choose Us */}
            <div className="why-choose">
              <h3>Why Choose Prime Drive?</h3>
              <ul>
                <li>Professional, experienced drivers</li>
                <li>Well-maintained fleet</li>
                <li>Competitive pricing</li>
                <li>24/7 customer support</li>
                <li>Flexible booking options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowBookingModal(false)}>×</button>
            <h2>Book {vehicle.name}</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" required placeholder="Your phone number" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Date *</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Return Date *</label>
                  <input type="date" required />
                </div>
              </div>
              <div className="form-group">
                <label>Event Type</label>
                <select>
                  <option>Group Tour</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Festival/Concert</option>
                  <option>Sports Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Expected Passengers</label>
                <input type="number" min="1" max={vehicle.capacity} placeholder={`Up to ${vehicle.capacity}`} />
              </div>
              <div className="form-group">
                <label>Special Requests</label>
                <textarea placeholder="Any special requirements or requests?"></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
