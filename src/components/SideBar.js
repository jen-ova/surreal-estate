import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import buildQueryString from "../helpers/buildQueryString";
import "../styles/sideBar.css";

const SideBar = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString(
      "query",
      { title: { $regex: query } },
      search
    );

    push(newQueryString);
  };

  return (
    <div className="sideBar">
      <form onSubmit={handleSearch}>
        <input
          id="title"
          name="title"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="sideBar__button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <ul className="sideBar__links">
        <li className="sideBar__title">Filter by city</li>
        <li>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <li className="sideBar__title">Sort by</li>
        <li>
          <Link to={buildQueryString("sort", { price: +1 })}>
            Price ascending
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
