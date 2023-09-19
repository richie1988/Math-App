import React, { useState } from 'react';
import Button from './buttons';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="inputsection">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="button-row">
          <Button onClick={handleButtonClick}>AC</Button>
          <Button onClick={handleButtonClick}>+/-</Button>
          <Button onClick={handleButtonClick}>%</Button>
          <Button onClick={handleButtonClick}>÷</Button>
        </div>
        <div className="button-row">
          <Button onClick={handleButtonClick}>7</Button>
          <Button onClick={handleButtonClick}>8</Button>
          <Button onClick={handleButtonClick}>9</Button>
          <Button onClick={handleButtonClick}>x</Button>
        </div>
        <div className="button-row">
          <Button onClick={handleButtonClick}>4</Button>
          <Button onClick={handleButtonClick}>5</Button>
          <Button onClick={handleButtonClick}>6</Button>
          <Button onClick={handleButtonClick}>-</Button>
        </div>
        <div className="button-row">
          <Button onClick={handleButtonClick}>1</Button>
          <Button onClick={handleButtonClick}>2</Button>
          <Button onClick={handleButtonClick}>3</Button>
          <Button onClick={handleButtonClick}>+</Button>
        </div>
        <div className="button-row">
          <Button onClick={handleButtonClick} id="indexzero">0</Button>
          <Button onClick={handleButtonClick}>.</Button>
          <Button onClick={handleButtonClick}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
