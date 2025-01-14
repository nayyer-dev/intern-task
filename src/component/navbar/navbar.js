import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>FAQ</li>
        <li>Success Stories</li>
        <li>Development</li>
      </ul>
      <img className="nav-img" src={logo} alt="" />
    </nav>
  );
};

export default Navbar;
