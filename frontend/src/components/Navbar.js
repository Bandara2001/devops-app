import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        📚 Booksy
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Library
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
