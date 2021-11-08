import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import getProperty from "../requests/getProperty";
import "../styles/properties.css";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperty(setProperties, setAlert);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="properties">
      <SideBar className="sideBar" />
      <div className="properties__grid">
        <div className="properties__card">
          {properties.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
          {alert.message && (
            <Alert message={alert.message} success={alert.isSuccess} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
