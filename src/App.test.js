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

test("tests initial status of checkbox in document", () => {
  render(<App />);
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("button is disabled on checkbox click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkBoxElement = screen.getByRole("checkbox");
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
});

test("expect button to be enabled on checkbox second click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkBoxElement = screen.getByRole("checkbox");
  fireEvent.click(checkBoxElement);
  fireEvent.click(checkBoxElement);
  expect(buttonElement).not.toBeDisabled();
});

test("expect button to be grayed out when disabled via checkbox click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkBoxElement = screen.getByRole("checkbox");
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
});
