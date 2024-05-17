import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("test_Home1", () => {
  render(<Home />);
  const thome = screen.getByText(/SKCT/i);
  expect(thome).toBeInTheDocument();
});
test("test_Home2", () => {
  render(<Home />);
  const thome2 = screen.getByText(/React IRC/i);
  expect(thome2).toBeInTheDocument();
});
