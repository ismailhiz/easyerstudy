import { useState } from 'react';
import { FaClock, FaStopwatch, } from 'react-icons/fa'; // <-- ikonlar buradan
import { BiTask } from 'react-icons/bi'; 
import { LuNotebookPen,LuBrainCircuit } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { PiClockCountdown } from "react-icons/pi";
import { BsStopwatch } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import Auth from './components/Auth';
import Clock from './components/Clock';
import Timer from './components/Timer';
import Goals from './components/Goals';
import Notes from './components/Notes';
import StudyTechnicals from './components/StudyTechnicals';
import Task from './components/Task';
import ArtificialIntelligence from './components/ArtificialIntelligence';
import './App.css';
import './index.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('Clock');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => setActiveComponent('Clock')}>
            <PiClockCountdown size={30} />
          </li>
          <li onClick={() => setActiveComponent('Timer')}>
            <BsStopwatch size={30} />
          </li>
          <li onClick={() => setActiveComponent('Goals')}>
            <GoGoal size={30} />
          </li>
          <li onClick={() => setActiveComponent('Notes')}>
            <LuNotebookPen size={30} />
          </li>
          <li onClick={() => setActiveComponent('StudyTechnicals')}>
            <RiFocus2Line size={30} />
          </li>
          <li onClick={() => setActiveComponent('Task')}>
            <BiTask size={30} />
          </li>
          <li onClick={() => setActiveComponent('ArtificialIntelligence')}>
            <LuBrainCircuit size={30} />
          </li>
        </ul>
      </nav>

      {/* Ana içerik */}
      <main className="main-content">
        {activeComponent === 'Clock' && <Clock />}
        {activeComponent === 'Timer' && <Timer />}
        {activeComponent === 'Goals' && <Goals />}
        {activeComponent === 'Notes' && <Notes />}
        {activeComponent === 'StudyTechnicals' && <StudyTechnicals />}
        {activeComponent === 'Task' && <Task />}
        {activeComponent === 'ArtificialIntelligence' && <ArtificialIntelligence />}
      </main>
    </div>
  );
}

export default App;
