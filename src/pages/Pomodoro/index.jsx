import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css"; // Ensure animation styles are correctly applied
import WindowControls from "../../components/window/window";

function Pomodoro() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studyTime, breakTime, rounds, activeCharacter } = location.state || {};  

  const [timeLeft, setTimeLeft] = useState(studyTime * 60);
  const [isStudying, setIsStudying] = useState(true);
  const [currentRound, setCurrentRound] = useState(1);
  const [isOn, setIsOn] = useState(true);
  const [waitingForBreak, setWaitingForBreak] = useState(false);
  const [waitingForStudy, setWaitingForStudy] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0); // Track frame for animation

  // Character animation frames
  const characterFrames = {
    chefbezz: [
      "./assets/chefbezz/frame1.png",
      "./assets/chefbezz/frame2.png",
      "./assets/chefbezz/frame3.png",
      "./assets/chefbezz/frame4.png",
      "./assets/chefbezz/frame5.png",
      "./assets/chefbezz/frame6.png",
      "./assets/chefbezz/frame7.png",
      "./assets/chefbezz/frame8.png",
    ],
    chorebezz: [
      "./assets/chorebezz/frame1.png",
      "./assets/chorebezz/frame2.png",
      "./assets/chorebezz/frame3.png",
      "./assets/chorebezz/frame4.png",
    ],
    gamerbezz: [
      "./assets/gamerbezz/frame1.png",
      "./assets/gamerbezz/frame1.png",
      "./assets/gamerbezz/frame1.png",
      "./assets/gamerbezz/frame2.png",
      "./assets/gamerbezz/frame2.png",
      "./assets/gamerbezz/frame2.png",
      "./assets/gamerbezz/frame3.png",
      "./assets/gamerbezz/frame3.png",
      "./assets/gamerbezz/frame3.png",
      "./assets/gamerbezz/frame4.png",
      "./assets/gamerbezz/frame4.png",
    ],
    mathbezz: [
      "./assets/mathbezz/frame2.png",
      "./assets/mathbezz/frame3.png",
      "./assets/mathbezz/frame4.png",
      "./assets/mathbezz/frame5.png",
      "./assets/mathbezz/frame5.png",
      "./assets/mathbezz/frame6.png",
      "./assets/mathbezz/frame7.png",
      "./assets/mathbezz/frame8.png",
    ],
    keblezz: [
      "./assets/keblezz/frame1.png",
      "./assets/keblezz/frame2.png",
      "./assets/keblezz/frame3.png",
      "./assets/keblezz/frame4.png",
      "./assets/keblezz/frame5.png",
      "./assets/keblezz/frame6.png",
    ],
    swezz: [
      "./assets/swezz/frame1.png",
      "./assets/swezz/frame2.png",
      "./assets/swezz/frame3.png",
      "./assets/swezz/frame4.png",
      "./assets/swezz/frame5.png",
      "./assets/swezz/frame6.png",
    ],
  };

  // Get character name based on index (Fallback to 'chefbezz' if invalid)
  const characterNames = ["chefbezz", "chorebezz", "gamerbezz", "mathbezz", "keblezz", "swezz"];
  const selectedCharacter = characterNames[activeCharacter] || "chefbezz"; 

  // Get frames for the selected character
  const frames = characterFrames[selectedCharacter] || [];

  // Animation effect
  useEffect(() => {
    if (frames.length === 0) return; // If no frames, don't animate

    const frameInterval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length); // Loop through frames
    }, 400); // Change every 200ms

    return () => clearInterval(frameInterval); // Cleanup on unmount
  }, [frames]);

  // Format time for display
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Timer Logic (Pause, Reset, Start Break)
  const togglePause = () => setIsOn((prev) => !prev);
  const resetTimer = useCallback(() => {
    setIsOn(false);
    setTimeLeft(studyTime * 60);
    setCurrentRound(1);
    setIsStudying(true);
    setWaitingForBreak(false);
    setWaitingForStudy(false);
  }, [studyTime]);

  const startBreakManually = () => {
    setIsStudying(false);
    setTimeLeft(breakTime * 60);
    setWaitingForBreak(false);
    setIsOn(true);
  };

  const startStudyingManually = () => {
    setIsStudying(true);
    setTimeLeft(studyTime * 60);
    setWaitingForStudy(false);
    setIsOn(true);
  };

  
  useEffect(() => {
    if (!isOn) return;

    if (currentRound === rounds && timeLeft <= 0) {
      navigate("/endPage");
      return;
    }

    if (timeLeft <= 0) {
      if (isStudying) {
        setWaitingForBreak(true);
        setIsOn(false);
      } else {
        setWaitingForStudy(true);
        setCurrentRound((prev) => prev + 1);
        setIsOn(false);
      }
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isOn, timeLeft, isStudying, currentRound, rounds, studyTime, breakTime, navigate]);

  return (
    <>
    <WindowControls></WindowControls>
    <div className="pomodoro-container">
      <h1 className="act">{isStudying ? "Study Time" : "Break Time"}</h1>
      <p className="rounds">Round {currentRound} of {rounds}</p>

      {/* 🎞 Character Animation */}
      <div className="character">
        <img src={frames[currentFrame]} className="char-animation" alt={selectedCharacter} />
      </div>

      <h2 className="countdown">{formatTime(timeLeft)}</h2>

      <div className="timer-controls">
        {waitingForBreak ? (
          <button className="timerbut" onClick={startBreakManually}>START BREAK</button>
        ) : waitingForStudy ? (
          <button className="timerbut" onClick={startStudyingManually}>STUDY START</button>
        ) : (
          <>
            <button className="timerbut" onClick={togglePause}>{isOn ? "PAUSE" : "RESUME"}</button>
            <button className="timerbut" onClick={resetTimer}>RESET</button>
          </>
        )}
      </div>
    </div></>
  );
}

export default Pomodoro;
