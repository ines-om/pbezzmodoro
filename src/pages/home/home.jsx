import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import WindowControls from "../../components/window/window";

function Home() {
  // state for each choice
  const [studyTime, setStudyTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [rounds, setRounds] = useState("");

  const navigate = useNavigate();

  // Handling user input change
  const handleStudyChange = (e) => setStudyTime(parseInt(e.target.value));
  const handleBreakChange = (e) => setBreakTime(parseInt(e.target.value));
  const handleRoundsChange = (e) => setRounds(parseInt(e.target.value));

  // Redirect to timer page with selected values
  const handleContinue = () => {
    if (studyTime && breakTime && rounds) {
      // If all fields are filled
      navigate("/character", { state: { studyTime, breakTime, rounds } });
    } else {
      // You can show a message or an alert if any field is missing
      alert("Please fill all fields before continuing!");
    }
  };

  return (
    <>
    <WindowControls></WindowControls>
    < div className="home">
      <div className="title">~ Pbezzmodoro ~</div>

      {/* Study Time */}
      <div className="choice">
        <h1 className="subtitle">STUDY LENGTH</h1>
        <select className="form" onChange={handleStudyChange} value={studyTime}>
          <option value="">Select</option>
          <option value="15">15 min</option>
          <option value="20">20 min</option>
          <option value="25">25 min</option>
          <option value="30">30 min</option>
          <option value="35">35 min</option>
          <option value="40">40 min</option>
          <option value="45">45 min</option>
          <option value="50">50 min</option>
          <option value="55">55 min</option>
          <option value="60">1h</option>
          <option value="65">1h05</option>
          <option value="70">1h10</option>
          <option value="75">1h15</option>
          <option value="80">1h20</option>
          <option value="85">1h25</option>
          <option value="90">1h30</option>
          <option value="105">1h45</option>
        </select>
      </div>

      {/* Break Time */}
      <div className="choice">
        <h1 className="subtitle">BREAK LENGTH</h1>
        <select className="form" onChange={handleBreakChange} value={breakTime}>
          <option value="">Select</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
          <option value="15">15 min</option>
          <option value="20">20 min</option>
          <option value="25">25 min</option>
          <option value="30">30 min</option>
          <option value="35">35 min</option>
          <option value="40">40 min</option>
          <option value="45">45 min</option>
          <option value="50">50 min</option>
          <option value="55">55 min</option>
        </select>
      </div>

      {/* Number of Rounds */}
      <div className="choice">
        <h1 className="subtitle">NR. OF ROUNDS</h1>
        <select className="form" onChange={handleRoundsChange} value={rounds}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      {/* Continue Button */}
      <button onClick={handleContinue} className="continueButton">
        CONTINUE
      </button>
    </div></>
  );
}

export default Home;
