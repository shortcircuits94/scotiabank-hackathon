import "./Filter.scss";
import { useState } from "react";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    specialty: "",
    language: "",
    location: "",
    availability: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  return (
    <section className="filter">
      <div>
        <h1 className="filter__title">Find Your Wealth Management Advisor</h1>
      </div>
      <div className="filter__input-container">
        <select
          name="specialty"
          className="filter__input"
          onChange={handleFilterChange}
        >
          <option value="">Specialty</option>
          <option>Retirement Planning</option>
          <option>Estate Planning</option>
          <option>Investment Strategies</option>
          <option>Portfolio Management</option>
          <option>Tax Planning</option>
          <option>High-Net-Worth Individuals</option>
          <option>Private Equity Investments</option>
          <option>Wealth Protection</option>
          <option>Business Planning</option>
          <option>Debt Management</option>
          <option>Insurance Planning</option>
          <option>Financial Education</option>
          <option>Risk Management</option>
        </select>
        <select
          name="language"
          className="filter__input"
          onChange={handleFilterChange}
        >
          <option value="">Language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>Mandarin</option>
          <option>Hindi</option>
          <option>Arabic</option>
          <option>Portuguese</option>
          <option>ASL</option>
        </select>
        <select
          name="location"
          className="filter__input"
          onChange={handleFilterChange}
        >
          <option value="">Location</option>
          <option>Toronto</option>
          <option>Mississauga</option>
          <option>Markham</option>
          <option>Brampton</option>
          <option>Richmond Hill</option>
          <option>Vaughan</option>
          <option>Ajax</option>
          <option>Oakville</option>
        </select>
        <select
          name="availability"
          className="filter__input"
          onChange={handleFilterChange}
        >
          <option value="">Availabilty</option>
          <option value="Available Now">Available</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
