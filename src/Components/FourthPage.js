import React, { useState } from 'react';
import './SecondPage.css';
import Header from './Header';

const FourthPage = ({ selectedOptions, onSubmit, onPreviousPage }) => {
  const [localOptions, setLocalOptions] = useState(selectedOptions || []);

  const options = ['5 Screen', '5-10 Screens', '10-15 Screens', 'Above 15+ Screens'];

  const handleOptionChange = (option) => {
    setLocalOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="first-page">
        <Header />
      <h1>How Many Screens Your App or Website Will Contain? </h1>
      <div className="options-container">
        {options.map((option) => (
          <div key={option} className="option">
            <input
              type="checkbox"
              checked={localOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <div className="buttons">
      <button onClick={onPreviousPage}>Back</button>
      <button onClick={() => onSubmit(localOptions)}>Continue</button>
      </div>
    </div>
  );
};

export default FourthPage;
