import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetails from "./CountryDetails";

import { useRouter } from "next/navigation";
import { mockCountryFinland } from "@/tests/fixtures";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

describe("CountryDetails", () => {
  test("renders country details", () => {
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
    expect(screen.getByText("SWE")).toBeInTheDocument();
    expect(screen.getByText("NOR")).toBeInTheDocument();
  });

  test("navigates to border country on click", () => {
    render(<CountryDetails country={mockCountryFinland} />);

    const borderCountryButton = screen.getByText("SWE");
    fireEvent.click(borderCountryButton);

    expect(mockPush).toHaveBeenCalledWith("/country/SWE");
  });
});
