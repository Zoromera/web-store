import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = ({ onClose, onRegister }) => {
  // State to manage username input
  const [username, setUsername] = useState('');
  
  // State to manage error messages
  const [error, setError] = useState('');
  
  // State to manage agreement to terms and conditions
  const [agreed, setAgreed] = useState(false);

  // Redux dispatch function to trigger login action
  const dispatch = useDispatch();

  // Function to handle login button click
  const handleLogin = () => {
    // Validate username length
    if (username.length < 6 || username.length > 7) {
      setError('Username must be between 6 and 7 characters.');
      return;
    }

    // Check if user has agreed to terms and privacy policy
    if (!agreed) {
      setError('You must agree to the terms and privacy policy.');
      return;
    }

    // Dispatch login action with username
    dispatch(login(username));

    // Close the login modal
    onClose();
  };

  return (
    <div>
      {/* Header for the login form */}
      <h2 className="text-center">Login</h2>
      
      {/* Display error messages, if any */}
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form>
        {/* Username input field */}
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        
        {/* Agreement checkbox */}
        <Form.Group controlId="formAgreement" className="mt-3">
          <Form.Check
            type="checkbox"
            label="By continuing, I agree to the terms of use and privacy policy."
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
        </Form.Group>
        
        {/* Login button */}
        <Button variant="primary" onClick={handleLogin} className="mt-3 w-100">
          Login
        </Button>
        
        {/* Link to registration page for new users */}
        <p className="mt-3 text-center">
          New user?{' '}
          <Button variant="link" onClick={onRegister}>
            Click here
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Login;
