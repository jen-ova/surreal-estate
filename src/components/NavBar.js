import React from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Surreal Estate" className="logo" />
      <uL className="navbar-links">
        <li className="navbar-links-item">
          <a href="/viewproperties">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="addproperty">Add a Property</a>
        </li>
      </uL>
    </div>
  );
}

export default NavBar;
