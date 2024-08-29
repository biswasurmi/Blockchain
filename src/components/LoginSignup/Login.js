import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users } from './Users.js'; // Adjust the path according to your file structure
import loginImage from './Login.jpg';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    walletaddress: '',
    userType: 'Farmer', // Default user type
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password &&
        user.usertype === formData.userType.toLowerCase()
    );

    if (userExists) {
      localStorage.setItem('loggedInUser', JSON.stringify(userExists));
      
      // Navigate to different routes based on userType
      switch (formData.userType) {
        case 'Farmer':
          navigate('/farmer');
          break;
        case 'Wholesaler':
          navigate('/wholesaler');
          break;
        case 'Retailer':
          navigate('/retailer');
          break;
        case 'Consumer':
          navigate('/consumer');
          break;
        case 'Inspector':
          navigate('/inspector');
          break;
        case 'Admin':
          navigate('/admin');
          break;
        default:
          navigate('/'); // Fallback to a default route
      }
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div
        className="login-image"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <h1>Welcome Back!</h1>
        <p>
          Indulge your taste buds at Harvest Hope, where every flavor tells a
          delicious story. Welcome to a culinary journey like no other!
        </p>
      </div>

      {/* Right Side */}
      <div className="login-form">
        <h2>Harvest Hope</h2>
        <h3>Login to Your Account</h3>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <input
            type="text"
            name="username"
            placeholder="User name"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
           <input
            type="password"
            name="walletaddress"
            placeholder="Wallet Address"
            value={formData.walletaddress}
            onChange={handleChange}
            required
            className="input-field"
          />
          <label className="user-type-label">
            User Type
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Farmer">Farmer</option>
              <option value="Wholesaler">Wholesaler</option>
              <option value="Retailer">Retailer</option>
              <option value="Consumer">Consumer</option>
              <option value="Inspector">Inspector</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/userregister" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
