import React from "react";
import "../styles/landing.css";
import PKLogo from "../assets/PKLogo.png";
import Stats from "../assets/Stats.png";

const LandingPage = ({ setPage }) => {
    return (
        <div className="landing-container">
            <div className="content">
                <img src={PKLogo} alt="Penny Keepers Logo" className="logo" />
                <p className="tagline">
                    Financing with <span className="highlight">one tracker</span> at a time
                </p>
                <button className="start-btn" onClick={() => setPage("login")}>
                    START
                </button>
            </div>
            <img src={Stats} alt="Stats logo" className="stats-image" />
            <div className="bottom-wave"></div>
        </div>
    );
};

export default LandingPage;




