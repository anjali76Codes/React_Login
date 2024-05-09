import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Perform logout logic here, such as clearing session/storage data
    // Then navigate to the login page
    navigate('/login');
  };

  return (
    <Container fluid className="home-container">
      <h2>Welcome to Home Page</h2>
      <p>This is the home page of our application.</p>
      <p>Feel free to explore!</p>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Container>
  );
}

export default Home;
