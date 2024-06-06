import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryNotFound from "./CountryNotFound";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockRefresh = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  refresh: mockRefresh,
});

describe("CountryNotFound", () => {
  test("renders the country not found message", () => {
    render(<CountryNotFound />);

    expect(
      screen.getByText(
        "The requested country information could not be found. This might be due to an issue with the restcountries.com service. Please try again later."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reload/i })).toBeInTheDocument();
  });

  test("calls router.refresh when reload button is clicked", () => {
    jest
      .spyOn(React, "useTransition")
      .mockReturnValue([false, (callback) => callback()]);
    render(<CountryNotFound />);

    const reloadButton = screen.getByRole("button", { name: /Reload/i });
    fireEvent.click(reloadButton);

    expect(mockRefresh).toHaveBeenCalled();
  });
});
