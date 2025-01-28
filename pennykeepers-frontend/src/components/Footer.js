import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Get to know more about us:</p>
            <a
                href="https://github.com/PennyKeepers"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
            >
                Visit our GitHub
            </a>
        </footer>
    );
};

export default Footer;