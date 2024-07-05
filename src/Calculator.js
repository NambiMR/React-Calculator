import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = evaluate(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} placeholder='0.' readOnly />
      </div>
      <div className="buttons">
        <button className='red' onClick={handleClear}>AC</button>
        <button className='red' onClick={handleBackspace}>⌫</button>
        <button className='red' onClick={() => handleClick('%')}>%</button>
        <button className='green' onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className='green' onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className='green' onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className='green' onClick={() => handleClick('+')}>+</button>
        
        <button onClick={() => handleClick('00')}>00</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className='green' onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
