import React from "react";
import { NavLink } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "../styles/navBar.css";
import logo from "../assets/logo.png";

const NavBar = (onLogin, onLogout, userID) => {
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
        <li className="navbar-links-item__FB">
          {/* {userID.id ? (
            <button className="facebook-login" type="button" onClick={onLogout}>
              Sign Out
            </button>
          ) : ( */}
          <FacebookLogin
            appId="554621965721649"
            fields="name,email,picture"
            callback={onLogin}
            cssClass="facebook-login"
            textButton="Login"
          />
          {/* )} */}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
