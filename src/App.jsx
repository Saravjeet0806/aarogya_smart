import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DailyChallenge from './components/DailyChallenge';
import WorkoutPlan from './components/WorkoutPlan';
import Motivation from './components/Motivation';
import Community from './components/Community';
import Profile from './components/Profile';
import Img from './assets/images/yogaman2.jpg'; 

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#292905] opacity-70"></div>

      <Router>
        <div className="relative z-10">
          <Navbar />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/daily-challenge" element={<DailyChallenge />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/community" element={<Community />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
