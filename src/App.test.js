import { render, screen, fireEvent } from "@testing-library/react";
//fireEvent is used to work with events
import App from "./App";

test("render a button with red background", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("turns button blue on click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});
