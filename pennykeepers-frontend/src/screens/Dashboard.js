import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import "../styles/dashboard.css"; // Ensure styles exist
import UnderConstruction from "../assets/website_under_construction.jpg";

const Dashboard = ({ setPage }) => {
    return (
        <div className="dashboard-container">
            <Navbar setPage={setPage} /> {/* Navbar stays at the top */}
            <div className="content-center">
                <h1>Welcome to Your Dashboard</h1>
                <p>Manage your financial data easily with Penny Keepers.</p>
                <img src={UnderConstruction} alt="Under Construction" className="underconstruction" />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;