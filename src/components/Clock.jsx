import React, { useState, useEffect } from 'react';
import '../assets/css/Clock.css'; 
import '@fontsource/orbitron';
import '@fontsource/share-tech-mono';
import '@fontsource/rajdhani';
import '@fontsource/space-mono';
import '@fontsource/chakra-petch';
import '@fontsource/audiowide';


const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`clock-container ${isFullScreen ? 'fullscreen' : ''} ${theme}`}>
      <div className="clock-display" onClick={toggleFullScreen}>
        {time.toLocaleTimeString()}
      </div>
      {!isFullScreen && (
  <div className="theme-selector">
    <select onChange={(e) => changeTheme(e.target.value)} value={theme}>
      <option value="default">Varsayılan</option>
      <option value="dark">Koyu Tema</option>
      <option value="neon">Neon Tema</option>
      <option value="black-white">Rajdhani</option>
      <option value="space-mono">Space Mono</option>
      <option value="red-glow">Chakra Petch</option>
      <option value="Audiowide">Audiowide</option>
    </select>
  </div>
)}

    </div>
  );
};

export default Clock;
