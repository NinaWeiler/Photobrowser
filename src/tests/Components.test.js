import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ImageThumbnail from "../components/ImageThumbnail";

test("Renders correct thumbnail", () => {
  const thumbnail = [6, "https://via.placeholder.com/150/56a8c2"];

  render(
    <BrowserRouter>
      <ImageThumbnail image={thumbnail} />
    </BrowserRouter>
  );

  const pic = screen.getByRole("img");
  expect(pic).toHaveAttribute("src", "https://via.placeholder.com/150/56a8c2");
});
