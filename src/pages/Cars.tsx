import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import '../styles/pages.css';

export default function Cars() {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(9000000);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedListing, setSelectedListing] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const brands = [...new Set(cars.map(car => car.name.split(' ')[0]))].sort((a, b) => a.localeCompare(b));

  const q = search.toLowerCase();
  const filteredCars = cars.filter(car => {
    const matchSearch =
      !q ||
      car.name.toLowerCase().includes(q) ||
      car.fuel.toLowerCase().includes(q) ||
      car.transmission.toLowerCase().includes(q) ||
      car.year.toString().includes(q) ||
      car.location.toLowerCase().includes(q);

    const matchBrand = !selectedBrand || car.name.toLowerCase().startsWith(selectedBrand.toLowerCase());
    const matchListing =
      !selectedListing ||
      (selectedListing === 'forSale' && car.forSale) ||
      (selectedListing === 'forHire' && car.forHire);
    const matchPrice = car.price <= maxPrice;

    return matchSearch && matchBrand && matchListing && matchPrice;
  });

  const activeFilterCount = [
    search,
    selectedBrand,
    selectedListing,
    maxPrice < 9000000 ? 'price' : '',
  ].filter(Boolean).length;

  const statusColor: Record<string, string> = {
    available: '#4caf50',
    sold: '#f44336',
    hired: '#ff9800',
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedBrand('');
    setSelectedListing('');
    setMaxPrice(9000000);
  };

  const filterPanel = (
    <div className="filters-inner">
      <div className="filters-header">
        <h3>Filter & Search</h3>
        <button className="filters-close" onClick={() => setFiltersOpen(false)} aria-label="Close filters">✕</button>
      </div>

      <div className="filter-group">
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="text"
          placeholder="Name, brand, fuel, year..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="brand-select">Brand</label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="listing-select">Listing Type</label>
        <select
          id="listing-select"
          value={selectedListing}
          onChange={(e) => setSelectedListing(e.target.value)}
        >
          <option value="">All Listings</option>
          <option value="forSale">For Sale</option>
          <option value="forHire">For Hire</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-range">Max Price</label>
        <input
          id="price-range"
          type="range"
          min="500000"
          max="9000000"
          step="100000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p>Up to KES {maxPrice.toLocaleString()}</p>
      </div>

      <button className="btn btn-outline btn-block" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );

  return (
    <div className="cars-page">
      <div className="page-header">
        <h1>Browse Our Car Inventory</h1>
        <p>Search and filter through our premium collection</p>
      </div>

      <div className="container cars-container">
        {/* Desktop sidebar */}
        <aside className="filters-sidebar">
          {filterPanel}
        </aside>

        {/* Mobile filter button */}
        <div className="mobile-filter-bar">
          <button className="mobile-filter-btn" onClick={() => setFiltersOpen(true)}>
            <span className="filter-icon">⚙</span>
            Filters
            {activeFilterCount > 0 && (
              <span className="filter-badge">{activeFilterCount}</span>
            )}
          </button>
          <p className="results-info-inline">{filteredCars.length} vehicle{filteredCars.length === 1 ? '' : 's'}</p>
        </div>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <>
            <button className="filters-overlay" aria-label="Close filters" onClick={() => setFiltersOpen(false)} />
            <aside className="filters-drawer">
              {filterPanel}
            </aside>
          </>
        )}

        {/* Cars Grid */}
        <main className="cars-grid">
          <div className="results-info">
            <p>Showing {filteredCars.length} vehicle{filteredCars.length === 1 ? '' : 's'}</p>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid">
              {filteredCars.map(car => (
                <div key={car.id} className="car-card">
                  <div className="car-image">
                    <img src={car.images[0]} alt={car.name} loading="lazy" />
                    <span
                      className="status-badge"
                      style={{ background: statusColor[car.status] }}
                    >
                      {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                    </span>
                  </div>
                  <div className="car-info">
                    <h3>{car.name}</h3>
                    <p className="year-type">{car.year} &bull; {car.fuel} &bull; {car.transmission}</p>
                    <p className="price">KES {car.price.toLocaleString()}</p>
                    <p className="specs">{car.mileage.toLocaleString()} km &bull; {car.location}</p>
                    <div className="listing-tags">
                      {car.forSale && <span className="tag tag-sale">For Sale</span>}
                      {car.forHire && <span className="tag tag-hire">Hire KES {car.hirePerDay.toLocaleString()}/day</span>}
                    </div>
                    <Link to={`/cars/${car.id}`} className="btn btn-primary btn-full">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No vehicles match your search. Try adjusting your filters.</p>
              <button className="btn btn-secondary" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
