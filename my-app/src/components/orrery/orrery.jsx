import React from 'react';
import './orrery.css';
import abImage from './aba.gif';

const Orrery = () => {
  const handleGoBack = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <div className="orrery-container">
      <header className="orrery-header">
        <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}>OrbitXplorers</h1>
        <button className="go-back" onClick={handleGoBack}>Go Back</button>
      </header>
      <div className="image-container">
        <img src={abImage} alt="Homepage" /> {/* Display the image */}
      </div>
    </div>
  );
};

export default Orrery;
