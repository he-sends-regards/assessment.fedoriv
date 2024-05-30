import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CountryCard from "./CountryCard";
import { useRouter } from "next/navigation";
import { mockCountries } from "@/tests/fixtures/";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("CountryCard", () => {
  const mockCountry = mockCountries[0];

  it("renders the country information correctly", () => {
    render(<CountryCard country={mockCountry} />);

    expect(screen.getByAltText("United States flag")).toBeInTheDocument();
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("Population:")).toBeInTheDocument();
    expect(screen.getByText("331,002,651")).toBeInTheDocument();
    expect(screen.getByText("Region:")).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
    expect(screen.getByText("Capital:")).toBeInTheDocument();
    expect(screen.getByText("Washington D.C.")).toBeInTheDocument();
  });

  it("calls router.push with the correct URL on card click", () => {
    const router = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(<CountryCard country={mockCountry} />);
    const card = screen.getByText("United States").closest("div");

    fireEvent.click(card!);
    expect(router.push).toHaveBeenCalledWith("/country/USA");
  });
});
