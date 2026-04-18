import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import '../styles/pages.css';

type ModalType = 'order' | 'hire' | null;

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [modal, setModal] = useState<ModalType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!car) {
    return (
      <div className="not-found">
        <h1>Car Not Found</h1>
        <p>The car you're looking for doesn't exist in our inventory.</p>
        <Link to="/cars" className="btn btn-primary">Back to Cars</Link>
      </div>
    );
  }

  const statusColor: Record<string, string> = {
    available: '#4caf50',
    sold: '#f44336',
    hired: '#ff9800',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: ModalType) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`${type === 'order' ? 'Order' : 'Hire'} request received! We will contact you shortly.`);
      setModal(null);
      setIsSubmitting(false);
    }, 1000);
  };

  const closeModal = () => setModal(null);

  const handleOverlayKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div className="car-detail-page">
      <div className="container">
        <Link to="/cars" className="back-link">← Back to Cars</Link>

        <div className="detail-grid">
          {/* Gallery */}
          <div className="detail-gallery">
            <div className="main-image">
              <img src={car.images[activeImage]} alt={car.name} />
              <span
                className="status-badge status-badge-detail"
                style={{ background: statusColor[car.status] }}
              >
                {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
              </span>
            </div>
            {car.images.length > 1 && (
              <div className="thumbnail-row">
                {car.images.map((img, i) => (
                  <button
                    key={img}
                    className={`thumbnail-btn ${activeImage === i ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${car.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="detail-content">
            <div className="detail-header">
              <h1>{car.name}</h1>
              <p className="year-type">{car.year} &bull; {car.type} &bull; {car.color}</p>
              <p className="detail-location">📍 {car.location}</p>
              <div className="listing-tags" style={{ margin: '12px 0' }}>
                {car.forSale && <span className="tag tag-sale">For Sale</span>}
                {car.forHire && <span className="tag tag-hire">For Hire</span>}
              </div>
              {car.forSale && <p className="price-large">KES {car.price.toLocaleString()}</p>}
              {car.forHire && (
                <p className="hire-price">KES {car.hirePerDay.toLocaleString()} <span>/day</span></p>
              )}
            </div>

            <div className="specs-grid">
              <div className="spec">
                <span className="spec-label">Mileage</span>
                <span className="spec-value">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec">
                <span className="spec-label">Fuel</span>
                <span className="spec-value">{car.fuel}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Transmission</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Seats</span>
                <span className="spec-value">{car.seats}</span>
              </div>
            </div>

            <div className="description">
              <h2>About This Vehicle</h2>
              <p>{car.description}</p>
            </div>

            <div className="features">
              <h3>Features & Amenities</h3>
              <ul className="features-list">
                {car.features.map((feature) => (
                  <li key={feature}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-cta-row">
              {car.forSale && car.status !== 'sold' && (
                <button className="btn btn-primary btn-large" onClick={() => setModal('order')}>
                  Buy This Car
                </button>
              )}
              {car.forHire && car.status !== 'hired' && (
                <button className="btn btn-secondary btn-large" onClick={() => setModal('hire')}>
                  Hire This Car
                </button>
              )}
              {car.status === 'sold' && (
                <p className="status-note" style={{ color: '#f44336' }}>This vehicle has been sold.</p>
              )}
              {car.status === 'hired' && !car.forSale && (
                <p className="status-note" style={{ color: '#ff9800' }}>Currently on hire — check back soon.</p>
              )}
            </div>

            <div className="contact-info">
              <h3>Have Questions?</h3>
              <p>Contact us via WhatsApp, email, or phone for more information.</p>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {modal === 'order' && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={closeModal}
          onKeyDown={handleOverlayKey}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <h2 id="order-modal-title">Buy — {car.name}</h2>
            <p className="modal-subtitle">KES {car.price.toLocaleString()}</p>
            <form onSubmit={(e) => handleSubmit(e, 'order')}>
              <div className="form-group">
                <label htmlFor="order-name">Full Name *</label>
                <input id="order-name" type="text" required placeholder="Your full name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="order-email">Email *</label>
                  <input id="order-email" type="email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="order-phone">Phone *</label>
                  <input id="order-phone" type="tel" required placeholder="07XX XXX XXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="order-contact">Preferred Contact</label>
                <select id="order-contact">
                  <option>Phone Call</option>
                  <option>WhatsApp</option>
                  <option>Email</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="order-message">Message</label>
                <textarea id="order-message" placeholder="Any questions or special requests?" />
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Order Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hire Modal */}
      {modal === 'hire' && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={closeModal}
          onKeyDown={handleOverlayKey}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hire-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <h2 id="hire-modal-title">Hire — {car.name}</h2>
            <p className="modal-subtitle">KES {car.hirePerDay.toLocaleString()} / day</p>
            <form onSubmit={(e) => handleSubmit(e, 'hire')}>
              <div className="form-group">
                <label htmlFor="hire-name">Full Name *</label>
                <input id="hire-name" type="text" required placeholder="Your full name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hire-email">Email *</label>
                  <input id="hire-email" type="email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="hire-phone">Phone *</label>
                  <input id="hire-phone" type="tel" required placeholder="07XX XXX XXX" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hire-start">Start Date *</label>
                  <input id="hire-start" type="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="hire-end">End Date *</label>
                  <input id="hire-end" type="date" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="hire-pickup">Pickup Location</label>
                <input id="hire-pickup" type="text" placeholder="Where should we deliver?" />
              </div>
              <div className="form-group">
                <label htmlFor="hire-message">Message</label>
                <textarea id="hire-message" placeholder="Any special requirements?" />
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Hire Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
