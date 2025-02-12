import React from "react";
import './window.css';

const WindowControls = () => {

  const handleClose = () => {
    console.log("Close button clicked");
    window.electronAPI.closeApp();
  };
  
  const handleMinimize = () => {
    console.log("Minimize button clicked");
    window.electronAPI.minimizeApp();
  };

  const handlePin = () => {
    console.log("Pin button clicked"); 
    window.electronAPI.toggleAlwaysOnTop();
  };

  return (
    <div className="custom-title-bar">
      <img
        className="window-btn"
        onClick={handleClose}
        src={`${process.env.PUBLIC_URL}/assets/close.png`}
        alt="Close"
      />
      <img
        className="window-btn"
        onClick={handleMinimize}
        src={`${process.env.PUBLIC_URL}/assets/min.png`}
        alt="Minimize"
      />
      <img
        className="window-btn"
        onClick={handlePin}
        src={`${process.env.PUBLIC_URL}/assets/pin.png`}
        alt="Pin"
      />
    </div>
  );
};

export default WindowControls;
