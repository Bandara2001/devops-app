import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If user not logged in, redirect to login
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the protected page
  return children;
};

export default ProtectedRoute;
