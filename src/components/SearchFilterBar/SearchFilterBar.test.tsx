import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchFilterBar from "./SearchFilterBar";
import { FaSearch } from "react-icons/fa";

describe("SearchFilterBar", () => {
  const mockProps = {
    searchTerm: "",
    region: "",
    handleSearchChange: jest.fn(),
    isPending: false,
    handleRegionChange: jest.fn(),
    isDropdownOpen: false,
    onFilterDropdownClick: jest.fn(),
  };

  it("renders the search input and filter dropdown correctly", () => {
    render(<SearchFilterBar {...mockProps} />);

    expect(
      screen.getByPlaceholderText("Search for a country...")
    ).toBeInTheDocument();
    expect(screen.getByText("Filter by Region")).toBeInTheDocument();
  });

  it("calls handleSearchChange on input change", () => {
    render(<SearchFilterBar {...mockProps} />);

    const searchInput = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(searchInput, { target: { value: "Test" } });

    expect(mockProps.handleSearchChange).toHaveBeenCalled();
  });

  it("calls handleRegionChange on region selection", () => {
    render(<SearchFilterBar {...mockProps} isDropdownOpen={true} />);

    const regionItem = screen.getByText("Africa");
    fireEvent.click(regionItem);

    expect(mockProps.handleRegionChange).toHaveBeenCalledWith("Africa");
  });

  it("calls onFilterDropdownClick on dropdown click", () => {
    render(<SearchFilterBar {...mockProps} />);

    const filterSelect = screen.getByText("Filter by Region");
    fireEvent.click(filterSelect);

    expect(mockProps.onFilterDropdownClick).toHaveBeenCalled();
  });

  it("displays the correct region when selected", () => {
    render(<SearchFilterBar {...mockProps} region="Americas" />);

    expect(screen.getByText("Americas")).toBeInTheDocument();
  });

  it("displays the dropdown menu when isDropdownOpen is true", () => {
    render(<SearchFilterBar {...mockProps} isDropdownOpen={true} />);

    expect(screen.getByText("All Regions")).toBeInTheDocument();
    expect(screen.getByText("Africa")).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Oceania")).toBeInTheDocument();
  });
});
