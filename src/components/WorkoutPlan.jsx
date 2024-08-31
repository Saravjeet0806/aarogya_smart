import React from 'react';

const WorkoutPlan = () => {
  return (
    <section id="workout-plan" className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Workout Plan</h2>
      <p className="text-lg mb-4">
        Customize your workout plan to achieve your fitness goals. Choose from various exercises and track your workouts.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Sample Workout Plan</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">Warm-up: 5 minutes of jogging</li>
          <li className="mb-2">Strength Training: 3 sets of 10 reps</li>
          <li className="mb-2">Cool Down: 5 minutes of stretching</li>
        </ul>
      </div>
      {/* Add more content */}
    </section>
  );
};

export default WorkoutPlan;
