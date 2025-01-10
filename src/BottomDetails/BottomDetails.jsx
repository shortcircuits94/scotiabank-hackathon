import React, { useState, useEffect } from "react";
import data from "../data/advisors.json";
import "./BottomDetails.scss";


function BottomDetails ( { id }) {

    const [overview, setOverview] = useState("");


    useEffect(() => {
    const selected = data.find((item) => item.id === id);
    setOverview(selected ? selected["detailed-overview"] : "Not found");
  }, [id]);


    return (
        <>
            <section className="bottom-details">
                <div className="bottom-details__parent">
                    <p className="bottom-details__title">Overview</p>
                    <p className="bottom details__text">{overview}</p>
                </div>

                <div className="bottom-details__container">
                    <div className="bottom-details__bookings">
                        <div>
                            <p className="bottom-details__title">General Chat Session</p>
                            <p className="bottom-details__info">30 minutes</p>
                        </div>
                        <div className="bottom-details__container-button">
                            <button className="bottom-details__button">Book Now</button>
                        </div>
                    </div>
                  <div className="bottom-details__bookings">
                        <div>
                            <p className="bottom-details__title">General Chat Session</p>
                            <p className="bottom-details__info">30 minutes</p>
                        </div>
                        <div className="bottom-details__container-button">
                            <button className="bottom-details__button">Book Now</button>
                        </div>
                    </div>
                   <div className="bottom-details__bookings">
                        <div>
                            <p className="bottom-details__title">General Chat Session</p>
                            <p className="bottom-details__info">30 minutes</p>
                        </div>
                        <div className="bottom-details__container-button">
                            <button className="bottom-details__button">Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
       

    );
}

export default BottomDetails;