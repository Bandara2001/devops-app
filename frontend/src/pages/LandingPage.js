import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-content">
      <h1>Welcome to Booksy</h1>
      <p>Explore. Read. Enjoy your favorite books anytime.</p>
      <div className="btn-group">
        <Link to="/register" className="btn">Register</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
