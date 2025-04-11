import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DailyChallenge from './components/DailyChallenge';
import Motivation from './components/Motivation';
import Community from './components/Community';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HeroSection from './components/HeroSection';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import WorkoutPlan from './components/WorkoutPlan';
import Footer from './components/Footer';  // Import Footer

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#ffffff] opacity-70"></div>

      <Router>
        <div className="relative z-10">
          <Navbar />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<>
                <HomePage />
                <HeroSection />
              </>} />
              <Route path="/daily-challenge" element={<DailyChallenge />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />
              <Route path="/motivation" element={<Motivation />} />
              
              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={user ? <Profile /> : <Login />} 
              />
              
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          {/* Include Footer */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
