import { useState } from 'react';
import '../styles/pages.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-success-wrap">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Message Received!</h2>
            <p>Thank you for reaching out to Prime Drive.</p>
            <p>We'll get back to you within 24 hours.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <img src="/cars/mercedez3.jpeg" alt="Prime Drive" className="contact-hero-img" />
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>We're here to help — reach out anytime.</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Info Cards Row */}
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-card-icon">📞</span>
            <h3>Phone</h3>
            <a href="tel:+254712345678">+254 712 345 678</a>
            <a href="tel:+254722345678">+254 722 345 678</a>
            <p className="contact-card-note">Mon–Sat, 8am – 6pm</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">💬</span>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
            <p className="contact-card-note">24/7 support available</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">✉️</span>
            <h3>Email</h3>
            <a href="mailto:info@primedrive.co.ke">info@primedrive.co.ke</a>
            <a href="mailto:sales@primedrive.co.ke">sales@primedrive.co.ke</a>
            <p className="contact-card-note">Reply within 24 hours</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">🏢</span>
            <h3>Office</h3>
            <p>123 Moi Avenue</p>
            <p>Nairobi, Kenya</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              View on Map
            </a>
          </div>
        </div>

        {/* Form & Extra */}
        <div className="contact-body-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2>Send Us a Message</h2>
            <p className="contact-form-sub">Fill in the form and we'll respond as soon as possible.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Full Name *</label>
                  <input id="cf-name" type="text" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email *</label>
                  <input id="cf-email" type="email" required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-phone">Phone *</label>
                  <input id="cf-phone" type="tel" required placeholder="+254 7XX XXX XXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-subject">Subject *</label>
                  <select id="cf-subject" required>
                    <option value="">Select a subject</option>
                    <option>Car Inquiry</option>
                    <option>Fleet Rental</option>
                    <option>Event Booking</option>
                    <option>Selling a Car</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Message *</label>
                <textarea id="cf-message" required rows={5} placeholder="Tell us how we can help you…" />
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="cf-agree" required />
                <label htmlFor="cf-agree">
                  I agree to be contacted via phone, email, or WhatsApp
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-large btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="contact-sidebar">
            {/* Image */}
            <div className="contact-side-img-wrap">
              <img src="/cars/subaru4.jpeg" alt="Prime Drive vehicles" />
            </div>

            {/* Hours */}
            <div className="contact-hours">
              <h3>🕐 Business Hours</h3>
              <ul>
                <li><span>Monday – Friday</span><strong>9:00 AM – 5:30 PM</strong></li>
                <li><span>Saturday</span><strong>10:00 AM – 4:00 PM</strong></li>
                <li><span>Sunday</span><strong>By appointment</strong></li>
              </ul>
            </div>

            {/* Social */}
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="contact-social-links">
                <a href="https://facebook.com/primedrive" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/primedrive" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://twitter.com/primedrive" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                <a href="https://youtube.com/primedrive" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your payment options?</h3>
              <p>We accept M-Pesa, bank transfers, cash, and arrange financing through our partner banks.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer delivery?</h3>
              <p>Yes — we deliver vehicles within Nairobi and to major cities across Kenya for a small fee.</p>
            </div>
            <div className="faq-item">
              <h3>What's your refund policy?</h3>
              <p>Car purchases include a 3-day inspection period. Hire deposits are refundable with 48 hours notice.</p>
            </div>
            <div className="faq-item">
              <h3>How do I book a tour?</h3>
              <p>Browse our Events page, pick your trip, and complete the booking form. We'll confirm within 24 hours.</p>
            </div>
            <div className="faq-item">
              <h3>Are hire vehicles insured?</h3>
              <p>Yes — all hire vehicles carry full comprehensive insurance coverage.</p>
            </div>
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We recommend at least 7 days, but can accommodate last-minute bookings — just call us.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
