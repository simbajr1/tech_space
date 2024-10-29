// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/global.css"; // Corrected path

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">TechSpace</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li className="dropdown-content">
                    <span>What We Do</span>
                    <div>
                        <Link to="/services#it-support">IT Support</Link>
                        <Link to="/services#virtual-assistance">Virtual Assistance</Link>
                        <Link to="/services#digital-marketing">Digital Marketing</Link>
                        <Link to="/services#web-development">Website Development</Link>
                    </div>
                </li>
                <li><Link to="/testimonials">Testimonials</Link></li> {/* Corrected Link */}
                <li className="dropdown">
                    <span>Contacts</span>
                    <div className="dropdown-content">
                        <p><FaPhone /> +254748037564</p>
                        <p><FaEnvelope /> techspacedigital@gmail.com</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
