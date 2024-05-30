import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppHeader from "./AppHeader";
import { ThemeProvider, THEME_OPTIONS } from "../../context/ThemeContext";

describe("AppHeader", () => {
  const renderWithThemeProvider = (ui: React.ReactElement) => {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
  };

  it("renders the title", () => {
    renderWithThemeProvider(<AppHeader />);
    expect(screen.getByText("Where in the world?")).toBeInTheDocument();
  });

  it("displays the correct theme toggle text and icon", () => {
    renderWithThemeProvider(<AppHeader />);

    const toggleButton = screen.getByRole("button", { name: /Dark Mode/i });
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    expect(screen.getByTestId("fa-moon")).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.getByText("Light Mode")).toBeInTheDocument();
    expect(screen.getByTestId("fa-sun")).toBeInTheDocument();
  });

  it("toggles the theme on button click", () => {
    renderWithThemeProvider(<AppHeader />);

    const toggleButton = screen.getByRole("button", { name: /Dark Mode/i });
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.getByText("Light Mode")).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent("Light Mode");

    fireEvent.click(toggleButton);

    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent("Dark Mode");
  });
});
