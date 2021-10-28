import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Surreal Estate" className="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <NavLink to="/" exact activeClassName="active">
            View Properties
          </NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/add-property" activeClassName="active">
            Add a Property
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
