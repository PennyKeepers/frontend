import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import St3 from "../assets/St3.png";

const SignUpPage = ({ setPage }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className={`login-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="login-box">
        <h2>CREATE ACCOUNT</h2>
        <p>Sign up and start your journey!</p>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="login-btn" onClick={() => setPage("dashboard")}>
          Sign Up
        </button>
        <p>
          Already have an account? <span onClick={() => setPage("login")}>Log In</span>
        </p>
        <img src={St3} alt="St3 logo" className="St3-image" />
      </div>
    </div>
  );
};

export default SignUpPage;
