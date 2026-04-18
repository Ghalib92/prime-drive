import { useState } from 'react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import '../styles/pages.css';

export default function Hire() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [selectedType, setSelectedType] = useState('');

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    if (type === '') {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(vehicles.filter(v => v.type === type));
    }
  };

  const vehicleTypes = [...new Set(vehicles.map(v => v.type))];

  return (
    <div className="hire-page">
      <div className="page-header">
        <h1>Our Rental Fleet</h1>
        <p>Professional buses and matatus for events, tours, and group travel</p>
      </div>

      <div className="container">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            className={`tab ${selectedType === '' ? 'active' : ''}`}
            onClick={() => handleTypeFilter('')}
          >
            All Vehicles
          </button>
          {vehicleTypes.map(type => (
            <button
              key={type}
              className={`tab ${selectedType === type ? 'active' : ''}`}
              onClick={() => handleTypeFilter(type)}
            >
              {type}s
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="vehicles-grid">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img src={vehicle.images[0]} alt={vehicle.name} />
                <span className={`availability ${vehicle.availability ? 'available' : 'unavailable'}`}>
                  {vehicle.availability ? 'Available' : 'Booked'}
                </span>
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <p className="vehicle-type">{vehicle.type}</p>

                <div className="vehicle-specs">
                  <div className="spec">
                    <span>👥 Capacity</span>
                    <strong>{vehicle.capacity} passengers</strong>
                  </div>
                  <div className="spec">
                    <span>💺 Seating</span>
                    <strong>{vehicle.seatingType}</strong>
                  </div>
                  <div className="spec">
                    <span>💰 Price</span>
                    <strong>KES {vehicle.pricePerDay.toLocaleString()}/day</strong>
                  </div>
                </div>

                <p className="vehicle-description">{vehicle.description}</p>

                <p className="features-label">Features:</p>
                <ul className="features-list-compact">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                  {vehicle.features.length > 3 && <li>+ {vehicle.features.length - 3} more</li>}
                </ul>

                <div className="vehicle-actions">
                  <Link to={`/hire/${vehicle.id}`} className="btn btn-outline">
                    View Details
                  </Link>
                  <button
                    className="btn btn-primary"
                    disabled={!vehicle.availability}
                  >
                    {vehicle.availability ? 'Hire Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="hire-cta">
          <h2>Need Help Choosing?</h2>
          <p>Our team is ready to assist you in finding the perfect vehicle for your event or trip.</p>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
