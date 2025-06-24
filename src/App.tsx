import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MinecraftPlans from './components/Minecraft-Hosting';
import MtaHosting from './components/Mta-Hosting';


/*
  TESTING, DEPLOY

*/

//Comment
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minecraft-hosting" element={<MinecraftPlans />} />
        <Route path="/mta-hosting" element={<MtaHosting />} />

      </Routes>
    </Router>
  );
}

export default App;
