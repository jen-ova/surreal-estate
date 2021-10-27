const axios = require("axios");

const postProperty = (
  { title, type, bedrooms, bathrooms, price, city, email },
  setAlert
) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing/";

  return axios
    .post(endpoint, { title, type, bedrooms, bathrooms, price, city, email })
    .then(() => {
      setAlert({ message: "Property Added", isSuccess: true });
    })
    .catch(() => {
      setAlert({ message: "Server error, please try again", isSuccess: false });
    });
};

export default postProperty;
