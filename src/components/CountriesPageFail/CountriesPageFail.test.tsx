import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountriesPageFail from "./CountriesPageFail";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockRefresh = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  refresh: mockRefresh,
});

describe("CountriesPageFail", () => {
  test("renders the country not found message", () => {
    render(<CountriesPageFail />);

    expect(
      screen.getByText(
        "Countries information could not be loaded. This might be due to an issue with the restcountries.com service. Please try again later."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reload/i })).toBeInTheDocument();
  });

  test("calls router.refresh when reload button is clicked", () => {
    jest
      .spyOn(React, "useTransition")
      .mockReturnValue([false, (callback) => callback()]);
    render(<CountriesPageFail />);

    const reloadButton = screen.getByRole("button", { name: /Reload/i });
    fireEvent.click(reloadButton);

    expect(mockRefresh).toHaveBeenCalled();
  });
});
