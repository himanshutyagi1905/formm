import React, { useState } from 'react';
import './FinalForm.css';

const FinalForm = ({ onSubmit, onPreviousPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    projectDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, phone, whatsapp, projectDescription } = formData;
    if (name && email && phone && whatsapp && projectDescription) {
      onSubmit(formData);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="final-form-container">
      <h1>Final Form - Project Details</h1>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email-Id:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>WhatsApp Number:</label>
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>What is your project all about?</label>
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <button className="back-btn" onClick={onPreviousPage}>Back</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FinalForm;
