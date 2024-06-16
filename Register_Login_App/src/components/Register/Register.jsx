import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Register.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the function to create a new user

function Register({ onSignUpSuccess = () => {} }) { // Provide default no-op function
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User signed up with data:', user);
      onSignUpSuccess();
      navigate('/'); // Navigate to the Home page
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <Container fluid className="register-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <h2>Sign Up</h2>
        {error && <p className="error-text">{error}</p>}
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
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
