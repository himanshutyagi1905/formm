import React, { useState } from 'react';
import './FirstPage.css'; // Make sure to import the CSS
import Header from './Header';

const FirstPage = ({ selectedOptions, onNextPage }) => {
  const [localOptions, setLocalOptions] = useState(selectedOptions || []);

  const options = ['Android', 'iOS', 'Web App'];

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
      <h1>What Type of App You Want to Develop?</h1>
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
      <button onClick={() => onNextPage(localOptions)}>Continue to Next Step</button>
    </div>
  );
};

export default FirstPage;

