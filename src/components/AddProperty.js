import React, { useState } from "react";
import "../styles/AddProperty.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2>Add Property Page</h2>
      <form onSubmit={handleAddProperty}>
        <div className="section">
          <span>1</span>Property Details
        </div>
        <div className="inner-wrap">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              className="add-property__formField"
              placeholder="Property Tagline"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              className="add-property__formField"
              value={fields.type}
              onChange={handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="section">
          <span>2</span>Amenities
        </div>
        <div className="inner-wrap">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              className="add-property__formField"
              placeholder="Number of bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              className="add-property__formField"
              placeholder="Number of bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="section">
          <span>3</span>Price & City
        </div>
        <div className="inner-wrap">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="currency"
              className="add-property__formField"
              step="0.01"
              placeholder="£150000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              className="add-property__formField"
              value={fields.city}
              onChange={handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpoool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="section">
          <span>4</span>Contact
        </div>
        <div className="inner-wrap">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              className="add-property__formField"
              value={fields.email}
              placeholder="jane.doe@email.com"
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit" className="add-property__button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
