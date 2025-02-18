import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    window.location.href = "/"; // Redirect to landing page (root)
  };

  return (
    <nav className="navbar">
      <h2>Penny Keepers</h2>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li onClick={handleLogout} style={{ cursor: "pointer" }}>Log Out</li>
      </ul>
    </nav>
  );
};

export default Navbar;
