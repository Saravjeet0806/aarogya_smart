import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth); // Get the current user

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="bg-[#ffffff] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo inside a yellow box with a sparkle effect */}
        <div className="flex items-center">
          <div className="text-4xl font-bold text-[#238dc1] sparkle-effect">
            Aarogya<span className="">Ai</span>
          </div>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-[#30282a] text-xl hover:text-gray-900">Home</Link></li>
          <li><Link to="/daily-challenge" className="text-[#30282a] text-xl hover:text-gray-900">Daily Challenge</Link></li>
          <li><Link to="/workout-plan" className="text-[#30282a] text-xl hover:text-gray-900">Workout Plan</Link></li>
          <li><Link to="/motivation" className="text-[#30282a] text-xl hover:text-gray-900">Motivation</Link></li>
          <li><Link to="/community" className="text-[#30282a] text-xl hover:text-gray-900">Community</Link></li>
          {user ? (
            <>
              <li><Link to="/profile" className="text-[#30282a] text-xl hover:text-gray-900">Profile</Link></li>
              <li>
                <button 
                  onClick={handleSignOut} 
                  className="text-[#30282a] text-xl hover:text-gray-900 border-none bg-transparent cursor-pointer"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="text-[#30282a] text-xl hover:text-gray-900">Sign In</Link></li>
              <li><Link to="/signup" className="text-[#30282a] text-xl hover:text-gray-900">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
