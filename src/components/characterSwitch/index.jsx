import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS
import "./index.css";

function CharacterSwitch({ onCharacterSelect }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle the "Next" button click
  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % 6;
      onCharacterSelect(newIndex); // Pass the updated character index
      return newIndex;
    });
  };

  // Handle the "Previous" button click
  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + 6) % 6;
      onCharacterSelect(newIndex); // Pass the updated character index
      return newIndex;
    });
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
        <img src="./assets/chefbezz.png" className="char" alt="Chef Bezz" />
          <div className="charName">
            <h5>Chezz</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img src="./assets/chorebezz.png" className="char" alt="Chore Bezz" />
          <div className="charName">
            <h5>ChoreBezz</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img src="./assets/gamerbezz.png" className="char" alt="Gamer Bezz" />
          <div className="charName">
            <h5>GamerBezz</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
          <img src="./assets/mathbezz.png" className="char" alt="Math Bezz" />
          <div className="charName">
            <h5>MathBezz</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
          <img src="./assets/keblezz.png" className="char" alt="Keblezz" />
          <div className="charName">
            <h5>Keblezz</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 5 ? "active" : ""}`}>
          <img src="./assets/swezz.png" className="char" alt="Swezz" />
          <div className="charName">
            <h5>Swezz</h5>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="visually-hidden">Previous</span>
        <img src="./assets/arrowBefore.png" className="arrow" alt="Previous" />
      </button>

      {/* Next Button */}
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="visually-hidden">Next</span>
        <img src="./assets/arrowNext.png" className="arrow" alt="Next" />
      </button>
    </div>
  );
}

export default CharacterSwitch;
