// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './login.jsx';
import SignupPage from './SignupPage';
import HomePage from './HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (email, password) => {
    // Mock login logic - replace with actual authentication
    setIsLoggedIn(true);
    setUsername(email.split('@')[0]); // Extract username from email
  };

  const handleSignup = (formData) => {
    // Mock signup logic - replace with actual registration
    setIsLoggedIn(true);
    setUsername(formData.username);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        <Route
          path="/home/*"
          element={isLoggedIn ? <HomePage username={username} /> : <Navigate to="/" />}
        />
 
      </Routes>
    </Router>
  );
};

export default App;