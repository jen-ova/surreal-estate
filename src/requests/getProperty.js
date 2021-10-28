const axios = require("axios");

const getProperty = (setProperties, setAlert) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing/";

  axios
    .get(endpoint)
    .then(({ data }) => setProperties(data))
    .catch(() =>
      setAlert({ message: "Server error, please try again later." })
    );
};

export default getProperty;
