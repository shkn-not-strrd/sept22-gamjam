import './App.css';

import RouteSetup from './config/Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Get Cyberpunk'd</h1>
      <RouteSetup />
    </div>
  );
}

export default App;
