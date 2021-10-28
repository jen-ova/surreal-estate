import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import "../styles/propertyCard.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card__container">
      <div className="property-card__icon">
        <FontAwesomeIcon icon={faFortAwesome} />
      </div>
      <div className="property-card property-card__title">{title}</div>
      <div className="property-card property-card__typeCity">
        {type} - {city}
      </div>
      <div className="property-card">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="property-card">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div className="property-card property-card__price">£ {price}</div>
      <div className="property-card__email">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
