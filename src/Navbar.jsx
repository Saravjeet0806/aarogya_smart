import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">YourLogo</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#daily-challenge" className="text-gray-600 hover:text-gray-900">Daily Challenge</a></li>
          <li><a href="#workout-plan" className="text-gray-600 hover:text-gray-900">Workout Plan</a></li>
          <li><a href="#motivation" className="text-gray-600 hover:text-gray-900">Motivation</a></li>
          <li><a href="#community" className="text-gray-600 hover:text-gray-900">Community</a></li>
          <li><a href="#profile" className="text-gray-600 hover:text-gray-900">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
