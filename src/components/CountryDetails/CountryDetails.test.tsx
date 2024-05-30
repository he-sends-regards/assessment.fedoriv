import React from "react";
import { render, screen } from "@testing-library/react";
import CountryDetails from "./CountryDetails";
import { mockCountryFinland } from "@/tests/fixtures/";

describe("CountryDetails", () => {
  test("renders the country details correctly", () => {
    render(<CountryDetails country={mockCountryFinland} />);

    expect(screen.getByText("Finland")).toBeInTheDocument();
    expect(screen.getByText("Suomi")).toBeInTheDocument();
    expect(screen.getByText("5,536,146")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Northern Europe")).toBeInTheDocument();
    expect(screen.getByText("Helsinki")).toBeInTheDocument();
    expect(screen.getByText(".fi")).toBeInTheDocument();
    expect(screen.getByText("Euro")).toBeInTheDocument();
    expect(screen.getByText("Finnish, Swedish")).toBeInTheDocument();
    expect(screen.getByText("Border Countries:")).toBeInTheDocument();
    expect(screen.getByText("SWE")).toBeInTheDocument();
    expect(screen.getByText("NOR")).toBeInTheDocument();
  });

  test("renders the flag image with correct alt text", () => {
    render(<CountryDetails country={mockCountryFinland} />);

    const flagImage = screen.getByRole("img", { name: "Flag of Finland" });
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute("src");
    expect(flagImage.getAttribute("src")).toContain(
      encodeURIComponent(mockCountryFinland.flags.svg)
    );
  });

  test("renders the border countries with correct href", () => {
    render(<CountryDetails country={mockCountryFinland} />);

    const borderCountryLinks = screen.getAllByRole("link");
    expect(borderCountryLinks).toHaveLength(2);
    expect(borderCountryLinks[0]).toHaveAttribute("href", "/country/SWE");
    expect(borderCountryLinks[1]).toHaveAttribute("href", "/country/NOR");
  });
});
