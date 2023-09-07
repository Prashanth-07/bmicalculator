import React from 'react';
import { useLocation } from 'react-router-dom';

function BmiResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const height = queryParams.get('height');
  const weight = queryParams.get('weight');
  const bmi = queryParams.get('bmi');
  const result = queryParams.get('result');

  return (
    <div>
      <h2>BMI Result</h2>
      <p>Height: {height} cm</p>
      <p>Weight: {weight} kg</p>
      
      <p>BMI: {bmi}</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default BmiResult;
