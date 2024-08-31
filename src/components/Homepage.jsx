import React from 'react';
import backgroundImage from '../assets/images/indianflagdress.jpg';

const HomePage = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-4xl font-bold text-white">Achieve Your Fitness Goals</h1>
        <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
          Your Plan
        </button>
      </div>
    </section>
  );
};

export default HomePage;
