import "./Filter.scss";

function Filter() {
  return (
    <section className="filter">
      <div>
        <h1 className="filter__title">Find Your Wealth Management Advisor</h1>
      </div>
      <div className="filter__input-container">
        <select className="filter__input">
          <option>Specialty</option>
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
        <select className="filter__input">
          <option>Language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>Mandarin</option>
          <option>Hindi</option>
          <option>Arabic</option>
          <option>Portuguese</option>
          <option>ASL</option>
        </select>
        <select className="filter__input">
          <option>Location</option>
          <option>Toronto</option>
          <option>Mississauga</option>
          <option>Markham</option>
          <option>Brampton</option>
          <option>Richmond Hill</option>
          <option>Vaughan</option>
        </select>
        <select className="filter__input">
          <option>Availabilty</option>
          <option>available</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
