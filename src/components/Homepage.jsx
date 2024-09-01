import React from 'react';
import BMICalculator from './BMICalculator';

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 ">
      <div className="container mx-auto px-4 py-20 text-center relative z-10 ">
        {/* <h2 className="text-4xl font-bold text-[#f7f6b6] mb-6">Fit India toh Hit India</h2> */}

        <div className="flex flex-wrap justify-center gap-6 mb-12 mt-10">
          {/* Main Description */}
          <div className="flex-1 max-w-xs bg-yellow-500 bg-opacity-50 rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-70 duration-300 ease-in-out">
            <p className="text-lg text-[#e7e6a7] leading-relaxed">
              Welcome to your fitness companion! Find motivation, challenges, and a supportive community here to help you achieve your goals.
            </p>
          </div>

          {/* Workout Plan */}
          <div className="flex-1 max-w-xs bg-yellow-500 bg-opacity-50 rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-70 duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-[#292905] mb-2">Workout Plan</h3>
            <p className="text-md text-[#e7e6a7] leading-relaxed">
              Get personalized workout plans to suit your fitness level and goals. Build strength, endurance, or lose weight with our tailored plans.
            </p>
          </div>

          {/* Daily Challenge */}
          <div className="flex-1 max-w-xs bg-yellow-500 bg-opacity-50 rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-70 duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-[#292905] mb-2">Daily Challenge</h3>
            <p className="text-md text-[#e7e6a7] leading-relaxed">
              Take on daily fitness challenges to stay motivated and push your limits. Track your progress and achieve new goals each day.
            </p>
          </div>
        </div>

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
