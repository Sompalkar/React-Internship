import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Navbar from './Navbar';
import './FirstPage.css';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user details in localStorage or send to API if required

    // Redirect to the second page
    navigate('/second-page');
  };

  const handleBack = () => {
    // Redirect back to the first page if user attempts to access the second page without submitting the form
    if (!submitted) {
      navigate('/first-page');
       
    }
  };

  return (
    <div className="firstPage">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
           
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
