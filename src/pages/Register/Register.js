import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const Register = ({ onClose }) => {
  // State to manage user input fields
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to manage error messages
  const [error, setError] = useState('');

  // Function to handle registration logic
  const handleRegister = () => {
    // Validate that all fields are filled
    if (!firstName || !surname || !username || !email || !password) {
      setError('Please fill all the fields.');
      return;
    }

    // Registration logic (e.g., API call) would go here

    // Close the modal after successful registration
    onClose();
  };

  return (
    <div>
      {/* Header for the registration form */}
      <h2>Register</h2>
      
      {/* Display error messages, if any */}
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form>
        {/* Input for first name */}
        <Form.Group controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        
        {/* Input for surname */}
        <Form.Group controlId="formSurname">
          <Form.Control
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        
        {/* Input for username */}
        <Form.Group controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        
        {/* Input for email */}
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        {/* Input for password */}
        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        {/* Registration button */}
        <Button variant="primary" onClick={handleRegister} className="mt-3 w-100">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
