
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Calculate Your BMI</h2>
      <div className="max-w-md mx-auto p-2 ">
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label className="block text-white">Height (cm)</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Weight (kg)</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700">Calculate</button>
        </form>
        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-lg">Your BMI is: <strong>{bmi}</strong></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;
