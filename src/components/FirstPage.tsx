import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { TextField, Button } from '@mui/material';

const FirstPage: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Save user details in localStorage or send to API if required

    // Redirect to the second page
    navigate('/second-page'); // Use navigate instead of history.push
  };

  return (
    <div>
      <h1>First Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FirstPage;
