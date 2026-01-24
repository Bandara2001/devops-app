import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"; // same base styles

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Split full name into first and last
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "";

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        firstName,
        lastName,
        username: email,  // backend expects username
        email,
        age: 20,          // default age, you can update if you collect it
        password,
      });

      alert("Registration successful!");
      navigate("/"); // go to login page
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Error registering. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Your Booksy Account ✨</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
        <p className="switch-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
