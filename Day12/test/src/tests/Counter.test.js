import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../pages/Counter";

test("Count1", () => {
  render(<Counter />);
  const celement = screen.getByText(/0/);
  expect(celement).toBeInTheDocument();
});

test("Count2", () => {
  render(<Counter />);
  const increment = screen.getByText("Inc");
  const celement = screen.getByText(/0/);

  fireEvent.click(increment);
  expect(celement).toHaveTextContent("1");
});

test("Count3", () => {
  render(<Counter />);
  const decrement = screen.getByText("Dec");
  const celement = screen.getByText(/0/);

  fireEvent.click(decrement);
  expect(celement).toHaveTextContent("-1");
});
