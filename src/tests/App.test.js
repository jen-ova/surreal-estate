import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders surreal estate text", () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
