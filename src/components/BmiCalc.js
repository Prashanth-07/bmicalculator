import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    page: {
      backgroundColor: 'lightblue',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    form: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    input: {
      marginBottom: '10px',
    },
    button: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
}

function BmiCalc() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const navigate = useNavigate();

  const calculateBMI = () => {
    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI result
    let bmiResult = '';
    if (bmi < 18.5) {
      bmiResult = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiResult = 'Normal';
    } else {
      bmiResult = 'Overweight';
    }

    // Navigate to result page with parameters
    navigate(`/bmi-result?height=${height}&weight=${weight}&bmi=${bmi}&result=${bmiResult}`);
  };

 

  return (
    <div style={styles.page}>
      <h2>BMI Calculator</h2>
      <form style={styles.form}>
        <div style={styles.input}>
          <label>Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <div style={styles.input}>
          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <button type="button" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </form>
    </div>
  );
}

export default BmiCalc;
