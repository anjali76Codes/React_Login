import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Login.css'; // Importing Login.css

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    // After successful login, navigate to the Home page
    navigate('/home');
  };

  return (
    <Container fluid className="login-container">
      <Form onSubmit={handleSubmit} className="login-form"> {/* Add the onSubmit handler */}
        <h2>Login</h2> {/* Move the h2 heading inside the Form */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted forgot-password"> {/* Add forgot-password class here */}
            <a href="#">Forgot Password?</a>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="login-btn">
          Login
        </Button>
        
        <p className="new-user-text">
          New user? <Link to="/">Sign Up here</Link> {/* Corrected link to Register page */}
        </p>
      </Form>
    </Container>
  );
}

export default Login;
