import React from "react";
import { Link } from "react-router-dom";
import "../styles/sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <ul className="sideBar__links">
        <li className="sideBar__links--item">
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li className="sideBar__links--item">
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li className="sideBar__links--item">
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
        <li className="sideBar__links--item">
          <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
