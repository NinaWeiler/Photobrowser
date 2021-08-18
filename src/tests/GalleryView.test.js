import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GalleryView from "../pages/GalleryView";

beforeEach(() => {
  render(<GalleryView />);
});

describe("<GalleryView/>", () => {
  test("Go-to-top button exists", () => {
    const button = screen.getByTestId("#topButton");

    expect(button).toBeDefined();
  });
});
