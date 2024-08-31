import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage'; 
import DailyChallenge from './components/DailyChallenge';
import WorkoutPlan from './components/WorkoutPlan'; 
import Motivation from './components/Motivation';
import Community from './components/Community';
import Profile from './components/Profile'; 
import BMICalculator from './components/BMICalculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-challenge" element={<DailyChallenge />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
     
    </Router>
  
  );
}

export default App;
