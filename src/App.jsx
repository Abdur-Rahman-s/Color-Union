import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import { Colorpalette } from './Components/Colorpalette';
import { ShadowGenerator } from './Components/ShadowGenerator';
import { Glassmorphism } from './Components/Glassmorphism';
import { GradientGenerator } from './Components/GradientGenerator';
import { Picker } from './Components/Picker';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Navbar Component */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Colorpalette" element={<Colorpalette />} />
          <Route path="/shadowgenerator" element={<ShadowGenerator />} />
          <Route path="/glassmorphism" element={<Glassmorphism />} />
          <Route path="/gradientgenerator" element={<GradientGenerator />} />
          <Route path="/Picker" element={<Picker />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
