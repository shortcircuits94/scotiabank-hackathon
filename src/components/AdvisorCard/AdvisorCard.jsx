import "./AdvisorCard.scss";
import data from "../../data/advisors.json";

export default function AdvisorCard({ filters }) {
  const filteredAdvisors = data.filter((advisor) => {
    const matchesSpecialty =
      !filters.specialty || advisor.specialty.includes(filters.specialty);
    const matchesLanguage =
      !filters.language || advisor.languages.includes(filters.language);
    const matchesLocation =
      !filters.location || advisor.location === filters.location;
    const matchesAvailability =
      !filters.availability || advisor.availability === filters.availability;

    return (
      matchesSpecialty &&
      matchesLanguage &&
      matchesLocation &&
      matchesAvailability
    );
  });
  return (
    <div className="cards">
      {filteredAdvisors.map((advisor) => (
        <article className="cards__advisor" key={advisor.id}>
          <div className="cards__top">
            <img
              src={advisor.photo}
              alt={`${advisor.name}'s Profile Photo`}
              className="cards__photo"
            />
            {advisor.availability !== "Unavailable Now" && (
              <div className="available__container">
                <div className="available__circle"></div>
                <p className="available__text">{advisor.availability}</p>
              </div>
            )}
          </div>
          <div className="cards__bottom">
            <div className="description__container">
              <h3 className="description__name">{advisor.name}</h3>
              <p className="description__tags">
                {advisor.specialty.join(", ")}
              </p>
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
