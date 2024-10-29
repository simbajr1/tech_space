// src/pages/LetsTalk.js
import React from "react";
import "../styles/LetsTalk.css";

const LetsTalk = () => {
  return (
    <section className="lets-talk" id="lets-talk">
      <h2 className="section-heading">Let’s Talk</h2>
      <form className="contact-form">
        <div className="form-group left">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group right">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </section>
  );
};

export default LetsTalk;
