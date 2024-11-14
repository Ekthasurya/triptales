import React from 'react';
import './AdBanner.css';

const AdBanner = () => {
  return (
    <div className="ad-banner">
      <div className="ad-image">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/50/42/98/caption.jpg?w=1100&h=-1&s=1" alt="Quad biking adventure" />
      </div>
      <div className="ad-content">
        <div className="sponsor-info">
          <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="Tripadvisor logo" className="logo" />
          <span>Sponsored by <a href="#wanderlab">Wanderlab</a></span>
        </div>
        <h2>Watch The Wanderer</h2>
        <p>Tripadvisor’s award-winning travel series, now streaming on Amazon Prime Video</p>
        <button className="learn-more">Learn more</button>
      </div>
    </div>
  );
};

export default AdBanner;
