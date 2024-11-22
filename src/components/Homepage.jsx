import React from 'react';

const HomePage = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20"
      style={{
        background: 'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
        padding: '2rem', 
      }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:w-2/3 lg:justify-between lg:items-start">
        {/* Description on the left */}
        <div className="flex-1 lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-5xl font-bold text-[#ffffff] mb-8">Fit India toh Hit India</h2>
          <p className="text-xl text-[#ffffff] leading-relaxed">
            Discover our resources and join a community dedicated to helping you achieve your fitness goals. Embrace challenges, stay motivated, and build a healthier lifestyle with us.
          </p>
        </div>

        {/* Cards on the right */}
        <div className="flex flex-col lg:w-1/2 gap-6">
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">Workout Plan</h3>
            <p className="text-md leading-relaxed">
              Our Ai Model generates workout and diet plan with the help of height, weight and BMI. It also gives accurate workout and diet plans for diabetic and hypertension patients.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-white rounded-lg p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">Daily Challenge</h3>
            <p className="text-md leading-relaxed">
              Take on daily fitness challenges to stay motivated and push your limits. Track your progress and achieve new goals each day.
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white rounded-lg p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <p className="text-lg leading-relaxed">
              Welcome to your fitness companion! Find motivation, challenges, and a supportive community here to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <a href="#workout-plan" className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
          Your Plan
        </a>
      </div>
    </section>
    
  );
};

export default HomePage;
