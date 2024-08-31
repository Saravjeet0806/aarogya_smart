import React from 'react';
import './Navbar.css'; // For styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#challenge">Daily Challenge</a></li>
        <li><a href="#plan">Workout Plan</a></li>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
