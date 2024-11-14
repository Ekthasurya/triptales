import React, { useState } from "react";

const FareSelector = () => {
    const [selectedFare, setSelectedFare] = useState("Regular");

    const fares = [
        { name: "Regular", description: "Regular fares" },
        { name: "Student", description: "Extra discounts/baggage" },
        { name: "Senior Citizen", description: "Up to ₹600 off" },
        { name: "Armed Forces", description: "Up to ₹600 off" },
        { name: "Doctor and Nurses", description: "Up to ₹600 off" },
    ];

    return (
        <div className="fare-selector">
            <h3>Select a special fare <span className="extra-savings">EXTRA SAVINGS</span></h3>
            <div className="fare-options">
                {fares.map((fare) => (
                    <label
                        key={fare.name}
                        className={`fare-option ${selectedFare === fare.name ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="fare"
                            value={fare.name}
                            checked={selectedFare === fare.name}
                            onChange={() => setSelectedFare(fare.name)}
                        />
                        <span className="fare-name">{fare.name}</span>
                        <span className="fare-description">{fare.description}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FareSelector;
