import React, { useState, useRef } from 'react';
import '../assets/css/Timer.css'; 
import '@fontsource/chakra-petch';
import { FaMoon, FaSun } from 'react-icons/fa'; // ikonu buradan alıyoruz

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // tema durumu
  const intervalRef = useRef(null);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const handleLap = () => {
    if (isRunning) setLaps([...laps, time]);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`timer-container ${darkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <h1 className="timer-display">{formatTime(time)}</h1>
      
      <div className="timer-buttons">
        <button onClick={handleStartStop}>{isRunning ? 'Durdur' : 'Başlat'}</button>
        <button onClick={handleLap} disabled={!isRunning}>Tur</button>
        <button onClick={handleReset}>Sıfırla</button>
      </div>

      {laps.length > 0 && (
        <ul className="lap-list">
          {laps.map((lap, index) => (
            <li key={index}>Tur {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Timer;
