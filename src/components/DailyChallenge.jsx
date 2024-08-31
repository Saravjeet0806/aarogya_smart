import React from 'react';

const DailyChallenge = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Daily Challenge</h2>
      <p className="text-lg mb-4">
        Stay motivated with our daily fitness challenges! Complete them to earn rewards and track your progress.
      </p>
      <ul className="list-disc pl-5">
        <li className="mb-2">Challenge 1: 30 minutes of cardio</li>
        <li className="mb-2">Challenge 2: 20 push-ups</li>
        <li className="mb-2">Challenge 3: 15 squats</li>
      </ul>
      {/* Add more content */}
    </section>
  );
};

export default DailyChallenge;
