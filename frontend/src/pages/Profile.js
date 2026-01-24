import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Profile.css";

const Profile = () => {
  const userEmail = localStorage.getItem("userEmail") || "reader@booksy.com";

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">
          <h2>👤 Your Profile</h2>
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Member Since:</strong> 2026</p>
          <p className="profile-quote">
            “A reader lives a thousand lives before he dies.” 
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
