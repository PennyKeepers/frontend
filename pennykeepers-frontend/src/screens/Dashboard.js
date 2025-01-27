import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import "../styles/dashboard.css"; // Ensure styles exist

const Dashboard = ({ setPage }) => {
    return (
        <div className="dashboard-container">
            <Navbar setPage={setPage} /> {/* Navbar is only inside Dashboard */}
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your financial data easily with Penny Keepers.</p>
        </div>
    );
};

export default Dashboard;


