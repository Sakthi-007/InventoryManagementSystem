// SignupPage.jsx
import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    role: 'User' // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup attempted with:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div>
          <h2 className="signup-title">Create your account</h2>
          <p className="signup-subtitle">
            Fill in the details to get started
          </p>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="input-field"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="input-field"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={formData.role === 'User'}
                  onChange={handleChange}
                  className="radio"
                />
                <span className="radio-label">User</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="Vendor"
                  checked={formData.role === 'Vendor'}
                  onChange={handleChange}
                  className="radio"
                />
                <span className="radio-label">Vendor</span>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="submit-button">
              Sign up
            </button>
          </div>
        </form>

        <div className="login-section">
          <p className="login-text">
            Already have an account?{' '}
            <a href="#" className="login-link">
              Sign in now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;