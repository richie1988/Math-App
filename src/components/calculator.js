import React, { useState } from 'react';
import Button from './buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  // Extract input and result from calculatorData
  const input = calculatorData.next || calculatorData.total || '0';
  const result = calculatorData.total || '';

  // Define the button labels and layout
  const buttonLayout = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="calculator">
      <h2>The Math Magician</h2>
      <div className="inputsection">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttonLayout.map((row) => (
          <div className="button-row" key={`row-${row.join('-')}`}>
            {row.map((buttonLabel) => (
              <Button
                key={`${buttonLabel}`}
                onClick={() => handleButtonClick(buttonLabel)}
                id={buttonLabel === '0' ? 'indexzero' : ''}
              >
                {buttonLabel}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
