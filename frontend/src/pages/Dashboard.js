import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h1>Welcome to Your Booksy Dashboard </h1>

          <div className="dashboard-buttons">
            <button
              className="dashboard-btn"
              onClick={() => navigate("/library")}
            >
               Library
            </button>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/cart")}
            >
               Cart
            </button>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/profile")}
            >
               Profile
            </button>
          </div>
        </div>

        <div className="about-section">
          <h2>About Booksy </h2>
          <p>
            Booksy is your cozy online reading space where stories, knowledge,
            and imagination come together. Discover books from different genres,
            add them to your cart, and enjoy a warm and aesthetic reading
            experience.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
