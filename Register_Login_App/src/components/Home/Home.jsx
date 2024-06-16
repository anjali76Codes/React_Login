import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { auth } from '../../firebase';
function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // User is not authenticated
        navigate('/login'); // Redirect to login page
      }
    });

    return unsubscribe; // Cleanup function
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user from Firebase
      navigate('/login'); // Navigate to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!isAuthenticated) {
    return null; // Render nothing if not authenticated (or you can show a loading indicator)
  }

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
