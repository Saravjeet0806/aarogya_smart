import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // Default to male
  const [bmi, setBmi] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (height && weight) {
      // Calculate BMI using the formula: weight (kg) / (height (m))^2
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);

      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Weight: parseFloat(weight),
            Height: parseFloat(height),
            BMI: parseFloat(bmiValue),
            Gender: gender === 'male' ? 0 : 1, // Assuming 0 for male, 1 for female
            Age: parseInt(age),
          }),
        });

        const data = await response.json();
        setRecommendation(data.recommendation);
      } catch (error) {
        console.error('Error fetching recommendation:', error);
        setRecommendation('An error occurred');
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Calculate Your BMI</h2>
      <div className="max-w-md mx-auto p-2">
        <form onSubmit={handleSubmit}>
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
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700">Calculate</button>
        </form>
        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-lg">Your BMI is: <strong>{bmi}</strong></p>
          </div>
        )}
        {recommendation && (
          <div className="mt-4 text-center">
            <p className="text-lg">Exercise Recommendation: <strong>{recommendation}</strong></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;

