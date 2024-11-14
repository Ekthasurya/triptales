import React from 'react';
import './TravelCard.css';

const destinations = [
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ee/11/39/new-marine-drive-puri.jpg?w=600&h=600&s=1', caption: 'Puri, India' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ee/11/39/new-marine-drive-puri.jpg?w=600&h=600&s=1', caption: 'Dhaka City, Bangladesh' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ee/11/39/new-marine-drive-puri.jpg?w=600&h=600&s=1', caption: "Cox's Bazar, Bangladesh" }
];

const TravelCard = () => {
  return (
    <div className="travel-container">
      <h2>Dream Your Next Trip</h2>
      <p>Weekend getaways from Kolkata (Calcutta)</p>
      <div className="card-container">
        {destinations.map((destination, index) => (
          <div className="card" key={index}>
            <img src={destination.src} alt={destination.caption} />
            <div className="caption">{destination.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCard;
