import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import '../styles/pages.css';

export default function Events() {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter(event =>
          event.title.toLowerCase().includes(term.toLowerCase()) ||
          event.location.toLowerCase().includes(term.toLowerCase()) ||
          event.description.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Upcoming Adventures</h1>
        <p>Join us on unforgettable experiences across the country</p>
      </div>

      <div className="container">
        {/* Search */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search events by name, location..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>

                  <div className="event-meta">
                    <p className="date">
                      📅 {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="location">📍 {event.location}</p>
                  </div>

                  <p className="description">{event.description}</p>

                  <div className="event-footer">
                    <div className="price-availability">
                      <strong>KES {event.price.toLocaleString()}</strong>
                      <p className="seats-left">{event.seatsAvailable} seats left</p>
                    </div>
                    <Link to={`/events/${event.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No events match your search. Try different keywords.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <section className="events-cta">
          <h2>Don't See What You're Looking For?</h2>
          <p>We can organize custom group tours and events tailored to your needs.</p>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us for Custom Events
          </Link>
        </section>
      </div>
    </div>
  );
}
