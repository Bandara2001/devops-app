import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">📚 Booksy</h2>
      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
