// Register.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Register.css'; // Importing Register.css

function Register({ onSignUpSuccess }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-up logic here
    // On successful sign-up, call the onSignUpSuccess callback
    onSignUpSuccess();
    navigate('/home'); // Navigate to the Home page
  };

  return (
    <Container fluid className="register-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <h2>Sign Up</h2>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="sign-up-button">
          Sign Up
        </Button>
        
        <p className="already-registered-text">
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Register;
