import React, { useState } from 'react';
import Header from './Header';
import './SecondPage.css';

const SecondPage = ({ selectedOptions, onNextPage, onPreviousPage }) => {
  const [localOptions, setLocalOptions] = useState(selectedOptions || []);

  const options = [
    'Travel App',
    'Fitness App',
    'E-Commerce App',
    'E-Learning App',
    'Taxi App',
    'Video Streaming',
  ];

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
      <h1>What is Your App About?</h1>
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
        <button onClick={() => onPreviousPage(localOptions)}>Back</button>
        <button onClick={() => onNextPage(localOptions)}>Continue</button>
      </div>
    </div>
  );
};

export default SecondPage;