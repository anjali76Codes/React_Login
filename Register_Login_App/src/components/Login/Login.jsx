// Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { auth } from '../../firebase'; // Import Firebase auth object
import './Login.css'; // Import your CSS file for styling
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sign in user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth ,email, password);
      console.log('User signed in:', userCredential.user);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      setError("Failed to login. Please check your credentials."); // Display error message
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container fluid className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-btn">
          Login
        </Button>

        <p className="new-user-text">
          New user? <Link to="/register">Sign Up here</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Login;
