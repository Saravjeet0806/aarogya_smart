import React from 'react';

const Motivation = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Motivation</h2>
      <p className="text-lg mb-4">
        Get inspired with motivational quotes and tips to keep you on track with your fitness journey.
      </p>
      <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-xl italic">"The only bad workout is the one that didn't happen."</p>
        <footer className="mt-2 text-gray-600">- Unknown</footer>
      </blockquote>
      {/* Add more content or interactive features here */}
    </section>
  );
};

export default Motivation;
