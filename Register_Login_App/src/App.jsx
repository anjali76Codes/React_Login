// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"; // Import the Home component
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Register onSignUpSuccess={handleSignUpSuccess} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> {/* Define a route for the Home component */}
      </Routes>
    </Router>
  );
}

export default App;
