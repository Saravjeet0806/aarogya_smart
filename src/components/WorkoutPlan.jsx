import React, { useState } from 'react';

const WorkoutPlan = () => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('65');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // Convert cm to m
    const w = parseFloat(weight);
    if (!h || !w) return;

    const bmiValue = (w / (h * h)).toFixed(1);
    setBmi(bmiValue);

    let category = '';
    let plan = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      plan = `
        - Focus on strength training 3-4x/week
        - Add high-calorie nutritious meals
        - Avoid excessive cardio
        - Rest well and maintain protein intake
      `;
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal';
      plan = `
        - Mix of strength & cardio (4-5 days/week)
        - Include yoga or stretching
        - Follow a balanced diet
        - Maintain hydration and rest
      `;
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
      plan = `
        - Cardio-heavy workout (5x/week)
        - Moderate strength training
        - Reduce sugar & refined carbs
        - Track calories and increase daily steps
      `;
    } else {
      category = 'Obese';
      plan = `
        - Begin with low-impact cardio (e.g., walking, swimming)
        - Add light strength training after 2–3 weeks
        - Focus on portion control & meal prep
        - Consult doctor if needed before intense workouts
      `;
    }

    setCategory(category);
    setWorkoutPlan(plan);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Workout Plan Generator</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 170"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 65"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Generate Plan
          </button>
        </div>

        {bmi && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg text-gray-800">Your BMI: {bmi}</h3>
            <p className="text-gray-700 mb-2">Category: <span className="font-medium">{category}</span></p>
            <pre className="text-gray-700 whitespace-pre-wrap text-sm">{workoutPlan}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutPlan;
