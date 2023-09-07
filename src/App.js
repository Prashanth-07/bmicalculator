import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BmiCalc from './components/BmiCalc';
import BmiResult from './components/BmiResult';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BmiCalc />} />
        <Route path="/bmi-result" element={<BmiResult />} />
      </Routes>
    </Router>
  );
}

export default App;
