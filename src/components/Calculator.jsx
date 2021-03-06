import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../assets/styles/App.scss';

const Calculator = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(value, buttonName);
    setValue(result);
  };

  const { total, next } = value;

  return (
    <div className="calculator">
      <Display result={(next || total)} />
      <ButtonPanel clickHandler={(e) => handleClick(e)} />
    </div>
  );
};

export default Calculator;
