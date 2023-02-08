import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AutoPage from './pages/Auto';
import { Route, Routes } from 'react-router-dom';
import Control from './pages/Control';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto" element={<AutoPage />} />
        <Route path="/manual" element={<Control />} />
      </Routes>  
      </header>
    </div>
  );
}

export default App;
