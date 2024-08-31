import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-3xl font-bold">YourLogo</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white text-lg hover:text-gray-900">Home</Link></li>
          <li><Link to="/daily-challenge" className="text-white text-lg hover:text-gray-900">Daily Challenge</Link></li>
          <li><Link to="/workout-plan" className="text-white text-lg hover:text-gray-900">Workout Plan</Link></li>
          <li><Link to="/motivation" className="text-white text-lg hover:text-gray-900">Motivation</Link></li>
          <li><Link to="/community" className="text-white text-lg hover:text-gray-900">Community</Link></li>
          <li><Link to="/profile" className="text-white text-lg hover:text-gray-900">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
