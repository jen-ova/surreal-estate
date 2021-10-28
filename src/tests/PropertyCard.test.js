import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Shinra Mansion",
    type: "Cottage",
    bathrooms: 4,
    bedrooms: 6,
    price: 2500,
    city: "Nibelheim",
    email: "sephiroth@shinra.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard props={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  // it("renders correct values for props", () => {
  //   const { getByText } = render(<PropertyCard props={validProps} />);

  //   expect(getByText("Shinra Mansion")).toHaveClass("property-card__title");
  // });
});
