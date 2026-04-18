import { useState } from 'react';
import '../styles/pages.css';

export default function Sell() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Thank You!</h2>
          <p>We've received your listing request.</p>
          <p>Our team will review your vehicle details and contact you shortly with next steps.</p>
          <p className="success-time">Expected contact within 24-48 hours</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sell-page">
      <div className="page-header">
        <h1>List Your Car</h1>
        <p>Sell your vehicle with Prime Drive. Get a fair price and reach thousands of buyers.</p>
      </div>

      <div className="container sell-container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="sell-form">
            {/* Section 1: Personal Information */}
            <fieldset>
              <legend>Your Information</legend>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" required placeholder="your@email.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" required placeholder="+254 7XX XXX XXX" />
                </div>
                <div className="form-group">
                  <label>Alternative Phone</label>
                  <input type="tel" placeholder="+254 7XX XXX XXX" />
                </div>
              </div>

              <div className="form-group">
                <label>WhatsApp Number (Optional)</label>
                <input type="tel" placeholder="For quick communication" />
              </div>

              <div className="form-group">
                <label>City/Region *</label>
                <input type="text" required placeholder="Nairobi, Mombasa, etc." />
              </div>
            </fieldset>

            {/* Section 2: Vehicle Information */}
            <fieldset>
              <legend>Vehicle Details</legend>

              <div className="form-row">
                <div className="form-group">
                  <label>Vehicle Make *</label>
                  <input type="text" required placeholder="Toyota, Honda, etc." />
                </div>
                <div className="form-group">
                  <label>Vehicle Model *</label>
                  <input type="text" required placeholder="Corolla, Civic, etc." />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Year of Manufacture *</label>
                  <input type="number" required min="2000" max={new Date().getFullYear()} placeholder="2022" />
                </div>
                <div className="form-group">
                  <label>Vehicle Type *</label>
                  <select required>
                    <option value="">Select type</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Hatchback</option>
                    <option>Pickup</option>
                    <option>Van</option>
                    <option>Wagon</option>
                    <option>Coupe</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mileage (km) *</label>
                  <input type="number" required min="0" placeholder="45000" />
                </div>
                <div className="form-group">
                  <label>Transmission *</label>
                  <select required>
                    <option value="">Select transmission</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Fuel Type *</label>
                  <select required>
                    <option value="">Select fuel type</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Vehicle Color *</label>
                  <input type="text" required placeholder="Black, Silver, etc." />
                </div>
              </div>

              <div className="form-group">
                <label>Asking Price (KES) *</label>
                <input type="number" required min="0" placeholder="1200000" />
              </div>

              <div className="form-group">
                <label>Registration Number *</label>
                <input type="text" required placeholder="KBK 001 AB" />
              </div>
            </fieldset>

            {/* Section 3: Vehicle Condition */}
            <fieldset>
              <legend>Vehicle Condition</legend>

              <div className="form-group">
                <label>Condition *</label>
                <select required>
                  <option value="">Select condition</option>
                  <option>Excellent (Like New)</option>
                  <option>Very Good</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>

              <div className="form-group">
                <label>Service History</label>
                <textarea placeholder="Regular servicing, recent repairs, maintenance details..."></textarea>
              </div>

              <div className="form-group">
                <label>Notable Features/Upgrades</label>
                <textarea placeholder="Air conditioning, sunroof, leather seats, custom rims, etc."></textarea>
              </div>

              <div className="form-group">
                <label>Known Issues (if any)</label>
                <textarea placeholder="Be honest about any dents, scratches, mechanical issues..."></textarea>
              </div>
            </fieldset>

            {/* Section 4: Photos */}
            <fieldset>
              <legend>Vehicle Photos</legend>

              <div className="form-group">
                <label>Upload Photos *</label>
                <p className="help-text">Upload at least 5 clear photos: exterior, interior, engine, and close-ups of features</p>
                <input
                  type="file"
                  required
                  multiple
                  accept="image/*"
                />
              </div>
            </fieldset>

            {/* Section 5: Agreement */}
            <fieldset>
              <legend>Agreement</legend>

              <div className="checkbox-group">
                <input type="checkbox" id="agree1" required />
                <label htmlFor="agree1">
                  I confirm that all information provided is accurate and truthful
                </label>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="agree2" required />
                <label htmlFor="agree2">
                  I authorize Prime Drive to contact me regarding this listing
                </label>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="agree3" required />
                <label htmlFor="agree3">
                  I agree to the Prime Drive terms and conditions
                </label>
              </div>
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-large btn-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Listing'}
            </button>

            <p className="form-footer">
              We'll review your submission and contact you within 24-48 hours
            </p>
          </form>

          {/* Side Information */}
          <aside className="sell-info">
            <h3>Quick Tips for Selling</h3>
            <ul>
              <li>📸 Use clear, well-lit photos</li>
              <li>💬 Be honest about your vehicle's condition</li>
              <li>🏷️ Price competitively</li>
              <li>📞 Respond quickly to inquiries</li>
              <li>📋 Have all documents ready</li>
              <li>🔧 Mention recent maintenance</li>
            </ul>

            <div className="process-box">
              <h3>Our Process</h3>
              <ol>
                <li>You submit listing</li>
                <li>We review details</li>
                <li>We contact you</li>
                <li>We feature your car</li>
                <li>You connect with buyers</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
