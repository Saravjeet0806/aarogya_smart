import React from 'react';
import backgroundImage from '../assets/images/yogaman.jpg';

const HomePage = () => {
  return (
    <section
   id="home"
       className="relative bg-cover bg-center h-screen"
    >
      <div className="absolute "></div>
      <div className="container mx-auto px-4 py-20 text-center relative z-10 flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-auto">Achieve Your Fitness Goals</h1>
        <div className="absolute bottom-20 right-10">
          <a href="#workout-plan" className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
            Your Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
