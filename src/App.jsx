import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DailyChallenge from './components/DailyChallenge';
import Motivation from './components/Motivation';
import Community from './components/Community';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HeroSection from './components/HeroSection';
import WorkoutPlan from './components/WorkoutPlan';
import Footer from './components/Footer';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#ffffff] opacity-70"></div>

      <Router>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              {/* Default Route - Homepage */}
              <Route
                path="/"
                element={
                  <>
                    <HomePage />
                    <HeroSection />
                  </>
                }
              />
              <Route path="/daily-challenge" element={<DailyChallenge />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/community" element={<Community />} />
              
              {/* Protected Route */}
              <Route
                path="/profile"
                element={user ? <Profile /> : <Navigate to="/login" />}
              />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Redirect any unknown route to homepage */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
