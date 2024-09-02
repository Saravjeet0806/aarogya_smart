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
    <nav className="">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-3xl font-bold">AarogyaAi</div>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-[#e7e6a7] text-lg hover:text-gray-900">Home</Link></li>
          <li><Link to="/daily-challenge" className="text-[#e7e6a7] text-lg hover:text-gray-900">Daily Challenge</Link></li>
          <li><Link to="/workout-plan" className="text-[#e7e6a7] text-lg hover:text-gray-900">Workout Plan</Link></li>
          <li><Link to="/motivation" className="text-[#e7e6a7] text-lg hover:text-gray-900">Motivation</Link></li>
          <li><Link to="/community" className="text-[#e7e6a7] text-lg hover:text-gray-900">Community</Link></li>
          {user ? (
            <>
              <li><Link to="/profile" className="text-[#e7e6a7] text-lg hover:text-gray-900">Profile</Link></li>
              <li>
                <button 
                  onClick={handleSignOut} 
                  className="text-[#e7e6a7] text-lg hover:text-gray-900 border-none bg-transparent cursor-pointer"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="text-[#e7e6a7] text-lg hover:text-gray-900">Sign In</Link></li>
              <li><Link to="/signup" className="text-[#e7e6a7] text-lg hover:text-gray-900">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

