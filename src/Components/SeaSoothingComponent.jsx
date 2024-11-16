// src/components/SeaSoothingComponent.jsx
import React from 'react';
import './SeaSoothingComponent.css';

const SeaSoothingComponent = () => {
  return (
    <div className="sea-container">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="sea-content">
        <p className="sea-text">the sea soothes my soul</p>
      </div>
    </div>
  );
};

export default SeaSoothingComponent;
