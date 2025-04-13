import React, { useState } from 'react';
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

  const fetchData = async () => {
    try {
      const response = await fetch('/src/components/dataset.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
    } catch (error) {
      console.error('Error loading dataset:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(inputs.height);
    const weightInKg = parseFloat(inputs.weight);

    if (!heightInMeters || !weightInKg) {
      setBmiInfo({ bmi: null, category: 'Invalid inputs' });
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let category = '';

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi < 25) category = 'Normal weight';
    else if (bmi >= 25 && bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setBmiInfo({ bmi: bmi.toFixed(2), category });
  };

  const generatePlan = () => {
    calculateBMI();

    const filteredData = data.find(
      (entry) =>
        entry.Sex.toLowerCase() === inputs.gender.toLowerCase() &&
        parseInt(entry.Age) === parseInt(inputs.age) &&
        parseFloat(entry.Height) === parseFloat(inputs.height) &&
        parseFloat(entry.Weight) === parseFloat(inputs.weight) &&
        entry['Fitness Goal'].toLowerCase() === inputs.fitnessGoal.toLowerCase() &&
        entry['Fitness Type'].toLowerCase() === inputs.fitnessType.toLowerCase()
    );

    if (filteredData) {
      setResult(filteredData);
    } else {
      setResult({ error: 'No matching data found!' });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#00D7CE] via-[#00D7CE] to-[#0084FF] p-8 rounded-lg shadow-xl"
      style={{
        background: 'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)',
      }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Workout Plan Generator
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="number"
          name="height"
          placeholder="Height (m)"
          value={inputs.height}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={inputs.weight}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={inputs.age}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        />
        <select
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          name="fitnessGoal"
          value={inputs.fitnessGoal}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        >
          <option value="">Select Fitness Goal</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Weight Gain">Weight Gain</option>
        </select>
        <select
          name="fitnessType"
          value={inputs.fitnessType}
          onChange={handleChange}
          className="p-3 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full"
        >
          <option value="">Select Fitness Type</option>
          <option value="Cardiovascular Fitness">Cardiovascular Fitness</option>
          <option value="Muscular Fitness">Muscular Fitness</option>
        </select>
      </div>
      <button
        onClick={generatePlan}
        className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Generate Plan
      </button>

      {bmiInfo.bmi && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">BMI Information</h2>
          <p className="mt-2"><strong>BMI:</strong> {bmiInfo.bmi}</p>
          <p><strong>Category:</strong> {bmiInfo.category}</p>
        </div>
      )}

      {result && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          {result.error ? (
            <p className="text-red-500 font-bold">{result.error}</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Recommended Plan</h2>
              <p className="mt-2"><strong>Fitness Goal:</strong> {result['Fitness Goal']}</p>
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
  );
};

export default WorkoutPlan;
