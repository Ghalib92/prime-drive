import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import '../styles/pages.css';

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!event) {
    return (
      <div className="not-found">
        <h1>Event Not Found</h1>
        <p>The event you're looking for doesn't exist.</p>
        <Link to="/events" className="btn btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Booking confirmed! Check your email for details and next steps.');
      setShowBookingModal(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const eventDate = new Date(event.date);
  const daysUntilEvent = Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="event-detail-page">
      <Link to="/events" className="back-link">← Back to Events</Link>

      <div className="container">
        <div className="detail-grid">
          {/* Image */}
          <div className="detail-gallery">
            <div className="main-image">
              <img src={event.image} alt={event.title} />
            </div>
          </div>

          {/* Details */}
          <div className="detail-content">
            <div className="detail-header">
              <h1>{event.title}</h1>
              <p className="organizer">Organized by {event.organizer}</p>
              <p className="price-large">KES {event.price.toLocaleString()} <span>per person</span></p>
            </div>

            {/* Key Info */}
            <div className="event-key-info">
              <div className="info-item">
                <span className="icon">📅</span>
                <div>
                  <p className="label">Date</p>
                  <p className="value">
                    {eventDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="extra">{daysUntilEvent} days from now</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <p className="label">Location</p>
                  <p className="value">{event.location}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">👥</span>
                <div>
                  <p className="label">Seats Available</p>
                  <p className="value">{event.seatsAvailable} of {event.seatsTotal}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="description">
              <h2>About This Event</h2>
              <p>{event.description}</p>
            </div>

            {/* Itinerary */}
            <div className="itinerary">
              <h3>Itinerary</h3>
              <ol className="itinerary-list">
                {event.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            {event.seatsAvailable > 0 ? (
              <button
                className="btn btn-primary btn-large"
                onClick={() => setShowBookingModal(true)}
              >
                Book a Spot ({event.seatsAvailable} available)
              </button>
            ) : (
              <div className="sold-out">
                <p>Sorry, this event is fully booked.</p>
                <Link to="/events" className="btn btn-secondary">
                  See Other Events
                </Link>
              </div>
            )}

            {/* Important Info */}
            <div className="important-info">
              <h3>Important Information</h3>
              <ul>
                <li>Payment confirmation will be sent via email</li>
                <li>Early booking recommended</li>
                <li>Transportation included from city center</li>
                <li>Meals as per itinerary</li>
                <li>Travel insurance recommended</li>
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
            <h2>Book {event.title}</h2>
            <p className="modal-subtitle">KES {event.price.toLocaleString()} per person</p>
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
              <div className="form-group">
                <label>Number of Seats *</label>
                <input
                  type="number"
                  min="1"
                  max={event.seatsAvailable}
                  required
                  placeholder={`1 - ${event.seatsAvailable}`}
                />
              </div>
              <div className="form-group">
                <label>Passport Number (if traveling)</label>
                <input type="text" placeholder="Optional" />
              </div>
              <div className="form-group">
                <label>Special Requests / Dietary Requirements</label>
                <textarea placeholder="Any special needs?"></textarea>
              </div>
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the terms and conditions</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Complete Booking'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
