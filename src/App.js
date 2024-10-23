import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import FourthPage from './Components/FourthPage';
import FinalForm from './Components/FinalForm';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedOptions, setSelectedOptions] = useState({
    platform: [],
    appType: [],
    additionalOptions: [],
    screenCount: [],
  });

  const handleNextPage = (pageData) => {
    if (currentPage === 1 && pageData.length > 0) {
      setSelectedOptions({ ...selectedOptions, platform: pageData });
      setCurrentPage(2);
    } else if (currentPage === 2 && pageData.length > 0) {
      setSelectedOptions({ ...selectedOptions, appType: pageData });
      setCurrentPage(3);
    } else if (currentPage === 3 && pageData.length > 0) {
      setSelectedOptions({ ...selectedOptions, additionalOptions: pageData });
      setCurrentPage(4);
    } else if (currentPage === 4 && pageData.length > 0) {
      setSelectedOptions({ ...selectedOptions, screenCount: pageData });
      setCurrentPage(5); 
    } else {
      alert('Please select at least one option.');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFinalSubmit = (formData) => {
    console.log('Final Form Data:', formData);
    console.log('All Selected Options:', selectedOptions);

   
    setSelectedOptions({
      platform: [],
      appType: [],
      additionalOptions: [],
      screenCount: [],
    });
    setCurrentPage(1); 
  };

  return (
    <div>
      {currentPage === 1 && (
        <FirstPage selectedOptions={selectedOptions.platform} onNextPage={handleNextPage} />
      )}
      {currentPage === 2 && (
        <SecondPage
          selectedOptions={selectedOptions.appType}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
      {currentPage === 3 && (
        <ThirdPage
          selectedOptions={selectedOptions.additionalOptions}
          onSubmit={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
      {currentPage === 4 && (
        <FourthPage
          selectedOptions={selectedOptions.screenCount}
          onSubmit={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
      {currentPage === 5 && <FinalForm onSubmit={handleFinalSubmit} onPreviousPage={handlePreviousPage} />}
    </div>
  );
};

export default App;