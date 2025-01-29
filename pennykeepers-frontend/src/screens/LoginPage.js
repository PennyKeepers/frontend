import React, { useEffect, useState } from "react";
import "../styles/login.css";
import St3 from "../assets/St3.png";

const LoginPage = ({ setPage }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className={`login-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="login-box">
        <h2>START HERE!</h2>
        <p>Log in here!</p>
        <input type="text" placeholder="User Name or Email" />
        <input type="password" placeholder="Password" />
        <button className="login-btn" onClick={() => setPage("dashboard")}>
          Log In
        </button>
        <p>
          Or click on <a>Sign Up</a> to create a new account
        </p>
        <img src={St3} alt="St3 logo" className="St3-image" />
      </div>
    </div>
  );
};

export default LoginPage;
