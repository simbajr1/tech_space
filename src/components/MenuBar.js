import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menubar.css";


const MenuBar = () => {
   return( 
    <div className="menu-bar">
        <ul className="flex-row ">
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about-us">About Us</Link></li>

            <li className="dropdown">
                <span>What We Do</span>
                <div className="dropdown-content">
                    <Link to ="/services#it-support">IT Support</Link>
                    <Link to="/services#virtual-assistant">Virtual Assistant</Link>
                    <Link to="/services#digital-markketing">Digital Marketing</Link>
                    <Link to="/services#web-development">Website Development</Link>
                </div>
            </li>

            <li><Link to="/testimonials">Testimonials</Link></li>

            <li className="dropdown">
               <span>Contacts</span>
                <div className="dropdown-content">
                    <p>Tel: +254748037564</p>
                    <p>Email: <a href="mailto:techspacedigital@gmail.com">techspacedigital@gmail.com</a></p>
                </div>
        </li>
        </ul>
    </div>
    );
};
export default MenuBar;