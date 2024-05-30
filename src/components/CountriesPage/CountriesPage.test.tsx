import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CountriesPage from "./CountriesPage";
import { Country } from "../../interfaces/country";
import { mockCountries } from "@/tests/fixtures/";

jest.mock("../SearchFilterBar", () =>
  jest.fn(
    ({
      searchTerm,
      handleSearchChange,
      handleRegionChange,
      onFilterDropdownClick,
      isDropdownOpen,
    }) => (
      <div data-testid="search-filter-bar">
        <input
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div onClick={onFilterDropdownClick}>Filter by Region</div>
        {isDropdownOpen && (
          <ul>
            <li onClick={() => handleRegionChange("All Regions")}>
              All Regions
            </li>
            <li onClick={() => handleRegionChange("Africa")}>Africa</li>
            <li onClick={() => handleRegionChange("Americas")}>Americas</li>
            <li onClick={() => handleRegionChange("Asia")}>Asia</li>
            <li onClick={() => handleRegionChange("Europe")}>Europe</li>
            <li onClick={() => handleRegionChange("Oceania")}>Oceania</li>
          </ul>
        )}
      </div>
    )
  )
);

jest.mock("../CountriesGrid", () =>
  jest.fn(({ countries }) => (
    <div data-testid="countries-grid">
      {countries.map((country: Country) => (
        <div key={country.cca3}>{country.name.common}</div>
      ))}
    </div>
  ))
);

describe("CountriesPage", () => {
  it("renders SearchFilterBar and CountriesGrid components", () => {
    render(<CountriesPage countries={mockCountries} />);

    expect(screen.getByTestId("search-filter-bar")).toBeInTheDocument();
    expect(screen.getByTestId("countries-grid")).toBeInTheDocument();
  });

  it("filters countries based on search term", () => {
    render(<CountriesPage countries={mockCountries} />);

    const searchInput = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(searchInput, { target: { value: "Canada" } });

    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(screen.queryByText("United States")).not.toBeInTheDocument();
  });

  it("toggles the dropdown on filter select click", () => {
    render(<CountriesPage countries={mockCountries} />);

    const filterSelect = screen.getByText("Filter by Region");
    fireEvent.click(filterSelect);

    expect(screen.getByText("All Regions")).toBeInTheDocument();
    expect(screen.getByText("Africa")).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Oceania")).toBeInTheDocument();
  });
});
