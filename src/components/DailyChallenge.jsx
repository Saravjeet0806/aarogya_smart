import React, { useState } from 'react';

const DailyChallenge = () => {
  const [challenges, setChallenges] = useState([
    { id: 1, text: '30 minutes of cardio 🏃‍♂️', completed: false },
    { id: 2, text: '20 push-ups 💪', completed: false },
    { id: 3, text: '15 squats 🏋️‍♀️', completed: false },
  ]);

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
      className="py-10 px-6 rounded-lg shadow-lg  mx-auto"
      style={{
        background: 'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Daily Challenge 🌟
      </h2>
      <p className="text-lg text-white mb-6 text-center">
        Stay motivated with our daily fitness challenges! Check them off as you complete them to track your progress.
      </p>
      <ul className="space-y-4">
        {challenges.map((challenge) => (
          <li
            key={challenge.id}
            className="flex items-center space-x-3 bg-white px-4 py-3 rounded-md shadow-md"
          >
            <input
              type="checkbox"
              checked={challenge.completed}
              onChange={() => toggleChallenge(challenge.id)}
              className="h-5 w-5 accent-blue-500"
            />
            <span
              className={`text-lg ${
                challenge.completed ? 'line-through text-gray-500' : 'text-black'
              }`}
            >
              {challenge.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => alert('Keep going! Great work!')}
          className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100"
        >
          Submit Progress ✅
        </button>
      </div>
    </section>
  );
};

export default DailyChallenge;
