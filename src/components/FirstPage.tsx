import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './FirstPage.css';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(''); 

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the form is filled before proceeding
    if (!name || !phoneNumber || !email) {
      // If any field is empty show an alert to the user
      alert("Can't access the second page without filling the form.");
      return;
    }

    // Save user details in localStorage
    const userDetails = {
      name,
      phoneNumber,
      email,
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the second page
    navigate('/second-page');
  };

  // Function to handle going back to the first page (not used in the current code)
  const handleBack = () => {
    // if (!submitted) {
    //   navigate('/first-page');
    // }
  };

  return (
    <div className="firstPage">
      <div className="navbar">
        {/* Render the Navbar component */}
        <Navbar />
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {/* Input for user's name */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
             
          />
          {/* Input for user's phone number */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
             
          />
          {/* Input for user's email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          {/* Submit button for the form */}
          <button onClick={() => handleBack()} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
