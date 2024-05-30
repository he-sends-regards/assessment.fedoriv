import React from "react";
import { render, screen } from "@testing-library/react";
import CountriesGrid from "./CountriesGrid";
import CountryCard from "../CountryCard";
import { mockCountries } from "@/tests/fixtures/";

jest.mock("../CountryCard", () => {
  return jest.fn(() => <div data-testid="country-card" />);
});

describe("CountriesGrid", () => {
  it("renders the correct number of CountryCard components", () => {
    render(<CountriesGrid countries={mockCountries} />);
    expect(screen.getAllByTestId("country-card")).toHaveLength(
      mockCountries.length
    );
  });

  it("passes the correct props to each CountryCard component", () => {
    render(<CountriesGrid countries={mockCountries} />);
    mockCountries.forEach((country, index) => {
      expect(CountryCard).toHaveBeenNthCalledWith(index + 1, { country }, {});
    });
  });
});
