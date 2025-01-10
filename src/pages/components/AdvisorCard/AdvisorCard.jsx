import "./AdvisorCard.scss";
import data from "../../../data/advisors.json";

export default function AdvisorCard() {
  return (
    <div className="cards">
      {data.map((advisor) => (
        <article className="cards__advisor" key={advisor.id}>
          <div className="cards__top">
            <img
              src="https://via.placeholder.com/350"
              alt={`${advisor.name}'s Profile Photo`}
              className="cards__photo"
            />
            <div className="available__container">
              <div className="available__circle"></div>
              <p className="available__text">Available Now</p>
            </div>
          </div>
          <div className="cards__bottom">
            <div className="description__container">
              <h3 className="description__name">{advisor.name}</h3>
              <p className="description__tags">{advisor.tags.join(", ")}</p>
              <p className="description__location">{advisor.location}</p>
              <div className="container-wrapper">
                <div className="details-container">
                  <h6 className="details-container__title">Experience</h6>
                  <p className="details-container__data">
                    {advisor.experience}
                  </p>
                </div>
                <div className="details-container">
                  <h6 className="details-container__title">Languages</h6>
                  <p className="details-container__data">
                    {advisor.languages.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
