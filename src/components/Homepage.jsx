import React from 'react';
import BMICalculator from './BMICalculator';

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-6 ">Achieve Your Fitness Goals</h1>
        <div className="flex flex-col items-center mb-auto">
          <BMICalculator />
        </div>
        <div className="absolute bottom-10 right-10">
          <a href="#workout-plan" className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
            Your Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
