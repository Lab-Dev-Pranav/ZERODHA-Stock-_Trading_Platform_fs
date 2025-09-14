import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_page/home/Hero";

// Test Suite

describe("Hero Component", () => {
  test("Render hero img", () => {
    render(<Hero />);
    const heroimg = screen.getByAltText("Hero Image");
    expect(heroimg).toBeInTheDocument();
    expect(heroimg).toHaveAttribute("src", "media/homeHero.png");
  });
});
