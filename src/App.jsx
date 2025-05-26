import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Auth from './components/Auth';
import Clock from './components/Clock';
import Timer from './components/Timer';
function App() {
  const [activeComponent, setActiveComponent] = useState('Clock');

  return (
    <div>
       <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav style={{ width: 200, borderRight: '1px solid #ffff' }}>
        <ul>
          <li onClick={() => setActiveComponent('Clock')} style={{ cursor: 'pointer' }}>Saat</li>
          <li onClick={() => setActiveComponent('Timer')} style={{ cursor: 'pointer' }}>Kronometre</li>
          {/* Diğer menü öğeleri */}
        </ul>
      </nav>

      {/* Ana içerik */}
      <main style={{ flexGrow: 1, padding: 20 }}>
        {activeComponent === 'saat' && <Clock />}
        {activeComponent === 'kronometre' && <Timer />}
        {/* Diğer componentler */}
      </main>
    </div>
    </div>
  )
}

export default App;
