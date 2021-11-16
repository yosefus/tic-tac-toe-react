import './App.css';
import './Animation.css';
import { Welcome } from './Components/index';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center h100 app-back">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
