import React, { useState } from "react";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import Dashboard from "./screens/Dashboard";
import "./App.css";
import AboutPage from "./screens/AboutPage";

const App = () => {
    const [page, setPage] = useState("landing");

    return (
        <div className="app-container">
            {page === "landing" && <LandingPage setPage={setPage} />}
            {page === "login" && <LoginPage setPage={setPage} />}
            {page === "dashboard" && <Dashboard setPage={setPage} />}
            {page === "About" && <AboutPage setPage={setPage} />}

        </div>
    );
};

export default App;






