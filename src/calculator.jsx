import React, { useState } from 'react';
import './Calculator.css';


function Calculator() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} className="display" disabled />
      <div className="buttons">
        <button onClick={clearDisplay} className="clear">C</button>
        <button onClick={() => appendToDisplay('(')}>(</button>
        <button onClick={() => appendToDisplay(')')}>)</button>
        <button onClick={() => appendToDisplay('/')}>÷</button>

        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>×</button>

        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>−</button>

        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>

        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
