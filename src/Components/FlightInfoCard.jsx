import React from "react";
//import "./FlightInfoCard.css";

const FlightInfoCard = () => {
    return (
        <div className="flight-info-card">
            <div className="location-info">
                <div className="city">
                    <h3>From</h3>
                    <h1>Delhi</h1>
                    <p>DEL, Delhi Airport India</p>
                </div>
                <div className="separator">&#8644;</div>
                <div className="city">
                    <h3>To</h3>
                    <h1>Mumbai</h1>
                    <p>BOM, Chhatrapati Shivaji International</p>
                </div>
            </div>
            <div className="details">
                <div className="detail-item">
                    <h3>Departure</h3>
                    <p>31 Oct'24</p>
                    <span>Thursday</span>
                </div>
                <div className="detail-item">
                    <h3>Return</h3>
                    <p>Tap to add a return date for bigger discounts</p>
                </div>
                <div className="detail-item">
                    <h3>Travellers & Class</h3>
                    <p>1 Traveller</p>
                    <span>Economy/Premium Economy</span>
                </div>
            </div>
        </div>
    );
};

export default FlightInfoCard;
