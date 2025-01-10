import "./AdvisorCard.scss";

export default function AdvisorCard() {
  return (
    <div className="card">
      <article className="card__advisor">
        <div className="card__top">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor Profile Photo"
            className="card__photo"
          />
          <div className="available__container">
            <div className="available__circle"></div>
            <p className="available__text">Available Now</p>
          </div>
        </div>
        <div className="card__bottom">
          <div className="description__container">
            <h3 className="description__name">John Doe</h3>
            <p className="description__tags">tags</p>
            <p className="description__location">location</p>
            <div className="container-wrapper">
              <div className="details-container">
                <h6 className="detailscontainer__title">Experience</h6>
                <p>4 years</p>
              </div>
              <div className="details-container">
                <h6 className="details-container__title">Languages</h6>
                <p>English, French</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
