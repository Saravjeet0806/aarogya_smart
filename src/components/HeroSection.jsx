import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Empower Your Fitness Journey
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Join thousands of fitness enthusiasts on their path to health and happiness. Discover personalized plans, daily challenges, and a supportive community, all designed to make fitness a part of your lifestyle.
        </p>
        <a
          href="#get-started"
          className="inline-block px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
