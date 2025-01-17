import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <span><li>Home</li></span>
        <li>About Us</li>
        <li>Features</li>
        <li>FAQ</li>
        <li>Success Stories</li>
        <li>Development</li>
      </ul>

      <img className="nav-img" src={logo} alt="Logo" />
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <img src={hamburger} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;