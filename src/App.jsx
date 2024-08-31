import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage'; 
import DailyChallenge from './components/DailyChallenge';
import WorkoutPlan from './components/WorkoutPlan'; 
import Motivation from './components/Motivation';
import Community from './components/Community';
import Profile from './components/Profile'; 
import backgroundImage from './assets/images/yogaman.jpg'; // Adjust path as needed

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '90%',
      }}
    >
      <Router>
        <div className="relative z-10 mx-auto max-w-4xl">
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
