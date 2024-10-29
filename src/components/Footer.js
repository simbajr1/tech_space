// src/components/Footer.js
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaCoffee } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer">
          <FaCoffee />
        </a>
      </div>
      <div className="contact-info">
        <p>Telephone: +254748037564</p>
        <p>Email: techspacedigital@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
