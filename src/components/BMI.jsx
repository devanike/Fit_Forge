import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [inches, setInches] = useState('');
  const [feet, setFeet] = useState('');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return { status: 'Underweight', color: 'text-yellow-600' };
    if (bmi < 24.9) return { status: 'Normal weight', color: 'text-green-600' };
    if (bmi < 29.9) return { status: 'Overweight', color: 'text-orange-600' };
    return { status: 'Obese', color: 'text-red-600' };
  };

  const validateInputs = () => {
    if (!weight || !feet) {
      setError('Please fill in both weight and height');
      return false;
    }
    if (weight <= 0 || feet <= 0) {
      setError('Weight and height must be positive numbers');
      return false;
    }
    if (weight > 500) {
      setError('Please enter a valid weight below 500kg');
      return false;
    }
    if (feet > 8) {
      setError('Please enter a valid height below 8 feet');
      return false;
    }
    if (inches && (inches < 0 || inches >= 12)) {
      setError('Inches must be between 0 and 11');
      return false;
    }
    setError('');
    return true;
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const weightNum = parseFloat(weight);
    const totalInches = (parseFloat(feet) * 12) + (parseFloat(inches) || 0);
    const heightInMeters = totalInches * 0.0254;
    const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);
    setStatus(getBMIStatus(bmiValue));
  };

  const handleWeightChange = (value) => {
    if (value === '' || (value >= 0 && value <= 500 && value.length <= 5)) {
      setWeight(value);
      setError('');
      setBMI(null);
      setStatus('');
    }
  };

  const handleFeetChange = (value) => {
    if (value === '' || (value >= 0 && value <= 8 && value.length <= 1)) {
      setFeet(value);
      setError('');
      setBMI(null);
      setStatus('');
    }
  };

  const handleInchesChange = (value) => {
    if (value === '' || (value >= 0 && value < 12 && value.length <= 2)) {
      setInches(value);
      setError('');
      setBMI(null);
      setStatus('');
    }
  };

  return (
    <div className="surface2 dark:surface2 py-8 px-4" id='fitfam'>
      <div className="max-w-xl mx-auto surface dark:surface rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text dark:text mb-2">
          FitFam
        </h1>
        <p className="text dark:text mb-6 text-center">
          Calculate your Body Mass Index (BMI) to check if you're at a healthy weight
        </p>

        <form onSubmit={calculateBMI} className="space-y-6">
          <div className="space-y-4">
            <div>
              {/* <label htmlFor="weight" className="block text-sm font-medium text dark:text mb-1">
                Weight (kg)
              </label> */}
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => handleWeightChange(e.target.value, setWeight, 500)}
                placeholder="Weight (kg)"
                className="w-full p-2 rounded-md bg-transparent focus:outline-none border-b-2 border-c dark:border-c dark:text text"
                aria-describedby={error ? 'bmi-error' : undefined}
              />
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                {/* <label htmlFor="height" className="block text-sm font-medium text dark:text">
                  Height (feet)
                </label> */}
                <input
                  type="number"
                  id="feet"
                  value={feet}
                  onChange={(e) => handleFeetChange(e.target.value, setFeet,8)}
                  placeholder="Height (feet)"
                  className="w-full p-2 rounded-md bg-transparent focus:outline-none border-b-2 border-c dark:border-c dark:text text"
                  aria-describedby={error ? 'bmi-error' : undefined}
                />
              </div>
              <div className='flex-1'>
                {/* <label htmlFor="inches" className="block text-sm font-medium text dark:text">
                  Inches
                </label> */}
                <input
                  type="number"
                  id="inches"
                  value={inches}
                  onChange={(e) => handleInchesChange(e.target.value, setInches,11)}
                  placeholder="Inches"
                  className="w-full p-2 rounded-md bg-transparent focus:outline-none border-b-2 border-c dark:border-c dark:text text"
                  aria-describedby={error ? 'bmi-error' : undefined}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4" role="alert">
              <p className="text dark:text" id="bmi-error">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full accent dark:accent font-semibold text-white dark:text-black py-2 px-4 rounded-md"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && status && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Your Results</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              BMI: <span className="font-bold">{bmi}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Status: <span className={`font-bold ${status.color}`}>{status.status}</span>
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Note: BMI is a general indicator and may not be accurate for athletes, elderly, or pregnant individuals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;