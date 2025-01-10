import React from "react";
import data from "../../data/advisors.json";
import "./TopDetails.scss";
import { useParams } from "react-router-dom";
import videoIcon from "../../assets/svgs/video.svg";
import phoneIcon from "../../assets/svgs/phone.svg";
import messageIcon from "../../assets/svgs/message.svg";
import bookmarkIcon from "../../assets/svgs/bookmark.svg";

export default function TopDetails() {
  const { id } = useParams();
  const advisor = data.find((adv) => adv.id === id);

  return (
    <div className="top-details">
      <div className="top-details__image-container">
        <img
          src={`/assets/images/${advisor.photo.split("/").pop()}`}
          alt={`${advisor.name}`}
          className="top-details__image"
        />
      </div>
      <div className="top-details__name-icon">
        <div className="top-details__info">
          <div className="top-details__header">
            <div className="top-details__wrapper">
              <div className="top-details__circle"></div>
              <p className="top-details__text">{advisor.availability}</p>
            </div>
            <h2 className="top-details__name">{advisor.name}</h2>
          </div>
          <div className="top-details__actions">
            <button className="top-details__action-btn">
              <img src={videoIcon} alt="Video call" />
            </button>
            <button className="top-details__action-btn">
              <img src={phoneIcon} alt="Phone call" />
            </button>
            <button className="top-details__action-btn">
              <img src={messageIcon} alt="Chat" />
            </button>
            <button className="top-details__action-btn">
              <img src={bookmarkIcon} alt="Save" />
            </button>
          </div>
        </div>
        <p className="top-details__description">{advisor.intro}</p>
        <p className="top-details__specialty">{advisor.specialty.join(", ")}</p>
        <p className="top-details__location">{advisor.location}</p>
      </div>
    </div>
  );
}
