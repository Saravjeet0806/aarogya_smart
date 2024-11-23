import React, { useState, useEffect } from 'react';

// Assuming quotes.json is in the same directory as this component
import quotes from './quotes.json';

const Motivation = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    // Get a random quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <section
      className="py-16 px-8 min-h-screen"
      style={{
        background: 'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
          Fuel Your Fitness Journey with Motivation
        </h2>
        <p className="text-xl mb-8 font-semibold opacity-80">
          Stay focused, stay determined. Get inspired by the best fitness quotes and tips.
        </p>
        {randomQuote ? (
          <blockquote className="bg-white bg-opacity-20 p-8 rounded-xl shadow-lg mx-4 md:mx-0 transform transition duration-300 hover:scale-105">
            <p className="text-2xl italic text-white mb-4">
              "{randomQuote.quote}"
            </p>
            <footer className="text-lg text-white">- {randomQuote.author}</footer>
          </blockquote>
        ) : (
          <p className="text-lg text-gray-200">Loading quote...</p>
        )}
      </div>
      <div className="mt-12 text-center">
        <button
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full transform transition duration-300 hover:bg-red-700 hover:scale-105"
          onClick={() => alert('Get Started with your workout plan!')}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Motivation;
