import React, { useEffect, useState } from 'react';
import challengesData from './challenges.json'; 

const DailyChallenge = () => {
  const [challenges, setChallenges] = useState([]);

  // Fetch challenges from the JSON file
  const fetchChallenges = () => {
    // Simulate fetching by directly using the imported JSON
    setChallenges(challengesData);
  };

  // Fetch challenges on component mount and every 24 hours
  useEffect(() => {
    fetchChallenges(); // Initial fetch
    const interval = setInterval(() => {
      fetchChallenges(); 
    }, 24 * 60 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

 
  const toggleChallenge = (id) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-10 px-4"
    >
      <div className="bg-white max-w-3xl w-full rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600">
          🌟 Daily Fitness Challenge 🌟
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Take on today's challenges and track your progress. Every small step counts!
        </p>
        <ul className="space-y-4">
          {challenges.map((challenge) => (
            <li
              key={challenge.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                challenge.completed ? 'bg-green-100' : 'bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={challenge.completed}
                  onChange={() => toggleChallenge(challenge.id)}
                  className="h-6 w-6 accent-green-500 rounded-lg"
                />
                <span
                  className={`text-lg font-medium ${
                    challenge.completed ? 'line-through text-green-600' : 'text-gray-800'
                  }`}
                >
                  {challenge.text}
                </span>
              </div>
              {challenge.completed && (
                <span className="text-green-500 font-bold">✔ Done</span>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={() => alert('Keep going! Great work!')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
          >
            Submit Progress ✅
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyChallenge;
