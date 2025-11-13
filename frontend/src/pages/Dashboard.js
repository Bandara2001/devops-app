import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome to Your Booksy Dashboard 💫</h1>
        <div className="dashboard-buttons">
          <button
            className="dashboard-btn"
            onClick={() => navigate("/library")}
          >
            Library
          </button>
          <button className="dashboard-btn" onClick={() => navigate("/cart")}>
            Cart
          </button>
          <button className="dashboard-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
