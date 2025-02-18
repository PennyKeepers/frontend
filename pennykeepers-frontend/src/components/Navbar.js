import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setPage }) => {
    return (
        <nav className="navbar">
            <h2>Penny Keepers</h2>
            <ul>
                <li onClick={() => setPage("About")}>About</li>
                <li onClick={() => setPage("dashboard")}>Dashboard</li>
                <li onClick={() => setPage("login")}>Log Out</li>
            </ul>
        </nav>
    );
};

export default Navbar;


