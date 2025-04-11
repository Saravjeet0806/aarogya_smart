import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <nav className="bg-[#ffffff] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold text-[#238dc1]">
          Aarogya<span className="text-[#30282a]">Smart</span>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/daily-challenge" 
              className={({ isActive }) =>
                `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
              }
            >
              Daily Challenge
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/workout-plan" 
              className={({ isActive }) =>
                `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
              }
            >
              Workout Plan
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/motivation" 
              className={({ isActive }) =>
                `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
              }
            >
              Motivation
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink 
                  to="/profile" 
                  className={({ isActive }) =>
                    `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
                  }
                >
                  Profile
                </NavLink>
              </li>
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
              <li>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) =>
                    `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
                  }
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/signup" 
                  className={({ isActive }) =>
                    `text-xl ${isActive ? 'text-blue-500 font-semibold' : 'text-[#30282a]'} hover:text-gray-900`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
