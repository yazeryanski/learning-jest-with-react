import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Initial states check.", () => {
  test("The button must be enabled at first", () => {
    render(<App />);
    let elem = screen.getByRole("button", { name: "Change color to blue" });

    expect(elem).toBeEnabled();
  });

  test("The checkbox must be unchecked at first", () => {
    render(<App />);
    let elem = screen.getByRole("checkbox");

    expect(elem).not.toBeChecked();
  });
});
