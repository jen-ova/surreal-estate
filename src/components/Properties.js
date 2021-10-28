import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import getProperty from "../requests/getProperty";
import "../styles/properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperty(setProperties, setAlert);
  }, []);

  return (
    <div className="properties">
      <h2>Properties Page</h2>
      <div className="properties__card">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </div>
    </div>
  );
}

export default Properties;
