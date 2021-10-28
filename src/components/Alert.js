import React from "react";
import PropTypes from "prop-types";
import "../styles/alert.css";

const Alert = ({ message, success }) => {
  return (
    <div className={`alert alert--${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
