import React, { useState, useEffect } from 'react';
import '../assets/css/Clock.css'; 

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
          <button onClick={() => changeTheme('default')}>Varsayılan</button>
          <button onClick={() => changeTheme('dark')}>Koyu Tema</button>
          <button onClick={() => changeTheme('neon')}>Neon Tema</button>
        </div>
      )}
    </div>
  );
};

export default Clock;
