import './App.css';
import './Animation.css';
import { Welcome, StartForm } from './Components/';
import { useState } from 'react';
import TicTacToe from './Pages/TicTacToe';

function App() {
  const [formStart, setFormStart] = useState(true);
  const [start, setStart] = useState(false);
  const [playersNames, setPlayersNames] = useState({ x: '', o: '' });

  return (
    <div className="App">
      <div className="d-flex justify-content-center h100 app-back">
        {formStart ? (
          <Welcome setFormStart={setFormStart} />
        ) : !start ? (
          <StartForm setStart={setStart} playersNames={playersNames} setPlayersNames={setPlayersNames} />
        ) : (
          <TicTacToe playersNames={playersNames} />
        )}
      </div>
    </div>
  );
}

export default App;
