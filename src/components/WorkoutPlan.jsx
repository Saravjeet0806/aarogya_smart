import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const WorkoutPlan = () => {
  const [inputs, setInputs] = useState({
    height: '1.68',
    weight: '47.5',
    age: '18',
    gender: 'Male',
    fitnessGoal: 'Weight Gain',
    fitnessType: 'Muscular Fitness',
  });

  const [result, setResult] = useState(null);
  const [bmiInfo, setBmiInfo] = useState({ bmi: null, category: '' });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('/dataset.xlsx'); // file placed in /public
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading dataset:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateBMI = () => {
    const height = parseFloat(inputs.height);
    const weight = parseFloat(inputs.weight);
    if (!height || !weight) {
      setBmiInfo({ bmi: null, category: 'Invalid inputs' });
      return;
    }

    const bmi = weight / (height * height);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setBmiInfo({ bmi: bmi.toFixed(2), category });
  };

  const generatePlan = () => {
    calculateBMI();

    const match = data.find(
      (entry) =>
        entry.Sex?.toLowerCase() === inputs.gender.toLowerCase() &&
        parseInt(entry.Age) === parseInt(inputs.age) &&
        parseFloat(entry.Height) === parseFloat(inputs.height) &&
        parseFloat(entry.Weight) === parseFloat(inputs.weight) &&
        entry['Fitness Goal']?.toLowerCase() === inputs.fitnessGoal.toLowerCase() &&
        entry['Fitness Type']?.toLowerCase() === inputs.fitnessType.toLowerCase()
    );

    if (match) {
      setResult(match);
    } else {
      setResult({ error: 'No matching workout plan found. Try adjusting your inputs.' });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#00D7CE] to-[#0084FF] p-6 sm:p-10"
      style={{
        background: 'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
      }}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Workout Plan Generator
        </h1>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <input
            type="number"
            name="height"
            placeholder="Height (in meters)"
            value={inputs.height}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (in kg)"
            value={inputs.weight}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={inputs.age}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            name="fitnessGoal"
            value={inputs.fitnessGoal}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Fitness Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Weight Gain">Weight Gain</option>
          </select>
          <select
            name="fitnessType"
            value={inputs.fitnessType}
            onChange={handleChange}
            className="p-3 rounded-lg border shadow-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Fitness Type</option>
            <option value="Cardiovascular Fitness">Cardiovascular Fitness</option>
            <option value="Muscular Fitness">Muscular Fitness</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={generatePlan}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Generate Plan
          </button>
        </div>

        {bmiInfo.bmi && (
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">BMI Information</h2>
            <p><strong>BMI:</strong> {bmiInfo.bmi}</p>
            <p><strong>Category:</strong> {bmiInfo.category}</p>
          </div>
        )}

        {loading && (
          <div className="text-center mt-10 text-gray-600 font-medium">Loading data...</div>
        )}

        {result && (
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md animate-fade-in">
            {result.error ? (
              <p className="text-red-600 font-bold">{result.error}</p>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recommended Plan</h2>
                <p><strong>Fitness Goal:</strong> {result['Fitness Goal']}</p>
                <p><strong>Fitness Type:</strong> {result['Fitness Type']}</p>
                <p><strong>Exercises:</strong> {result.Exercises}</p>
                <p><strong>Equipment:</strong> {result.Equipment}</p>
                <p><strong>Diet:</strong> {result.Diet}</p>
                <p><strong>Recommendation:</strong> {result.Recommendation}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlan;
