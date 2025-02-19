import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = ({ setPage }) => {
    return (
        <div>
            <Navbar setPage={setPage} />
            <h1>About Page</h1>

            <Footer />
        </div>
    );
};

export default AboutPage;