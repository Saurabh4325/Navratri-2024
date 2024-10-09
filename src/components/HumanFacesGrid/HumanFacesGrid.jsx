import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./HumanFacesGrid.css"; // Import the CSS file
import faces from "../../assets/classmatesImage/faces.js";


const HumanFacesGrid = () => {
  const [selectedFace, setSelectedFace] = useState(null);


  const handleFaceClick = (id) => {
    setSelectedFace(id);
    setTimeout(() => setSelectedFace(null), 3000);
  };

  return (
    <div className="human-faces-grid-container">
      <h1 className="title">"Celebrate the Spirit of Navratri: A Time for Devotion, Joy, and Divine Blessings!" </h1>
      <div className="grid-container">
        {faces.map((face) => (
          <div
            key={face.id}
            className="grid-item"
            onClick={() => handleFaceClick(face.id)}
          >
            <img
              src={face.image}
              alt={face.alt}
              className="face-image"
            />
            <div className="overlay">
              <FaHeart className="heart-icon" />
            </div>
            {selectedFace === face.id && (
              <div className="selected-message">
                <p className="message-text">
                <p>"🌼 Wishing You a Blessed and Joyful Navratri! 🌼</p>
                <p>✨ Happy Navratri! ✨</p> 
                <br />From 
                  <span style={{ fontWeight: "bold" }}> Saurabh</span>"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
  );
};

export default HumanFacesGrid;
