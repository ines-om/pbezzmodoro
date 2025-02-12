import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Character from './pages/character';
import Pomodoro from './pages/Pomodoro';
import EndPage from './pages/endPage';

const App = () => {
  return (
    <div className='appContainer'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/endPage" element={<EndPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router> </div>
  );
};

export default App;
