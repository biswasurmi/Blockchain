import React, { useState } from "react";
import loginImage from './Login.jpg';
import './Register.css'; // Import the CSS file

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    walletaddress: "",
    userType: "Farmer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");
  };

  return (
    <div className="register-container">
      {/* Left Side */}
      <div
        className="register-image"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <h1>Join Us!</h1>
        <p>
          Start your journey with Harvest Hope. Create an account and explore the culinary world!
        </p>
      </div>

      {/* Right Side */}
      <div className="register-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-row">
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
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
          </div>

          <div className="user-type-section">
            <label>
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
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
