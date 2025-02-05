import React, { useEffect, useState } from "react";
import "../styles/login.css";
import St3 from "../assets/St3.png";
import SignUpPage from "./SignUp";

const LoginPage = ({ setPage }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  if (isSignUp) {
    return <SignUpPage setPage={setPage} />;
  }

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
          Or click on <span onClick={handleSignUpClick}>Sign Up</span> to create a new account
        </p>
        <img src={St3} alt="St3 logo" className="St3-image" />
      </div>
    </div>
  );
};

export default LoginPage;
