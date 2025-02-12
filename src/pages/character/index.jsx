import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CharacterSwitch from "../../components/characterSwitch";
import "./index.css";
import WindowControls from "../../components/window/window";

function Character() {
  const location = useLocation();
  const { studyTime, breakTime, rounds } = location.state || {};
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  return (
    <>
      <WindowControls></WindowControls>
      <div className="charChoice">
      <h2 className="fight">Choose your fighter</h2>
      <CharacterSwitch className="switchChar" onCharacterSelect={setSelectedCharacter} />

      <Link
        to="/pomodoro"
        state={{ 
          studyTime: studyTime || 25,  // Default to 25 mins
          breakTime: breakTime || 5,   // Default to 5 mins
          rounds: rounds || 4,         // Default to 4 rounds
          activeCharacter: selectedCharacter 
        }}
        className="continueButton2"
      >
        <div>START</div>
      </Link></div>
    </>
  );
}

export default Character;
