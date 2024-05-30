import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme, THEME_OPTIONS } from "./ThemeContext";

describe("ThemeContext", () => {
  const TestComponent = () => {
    const { theme, toggleTheme } = useTheme();
    return (
      <div>
        <span data-testid="theme">{theme}</span>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };

  it("should provide the default theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme").textContent).toBe(THEME_OPTIONS.light);
  });

  it("should toggle the theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const themeDisplay = screen.getByTestId("theme");
    const toggleButton = screen.getByText("Toggle Theme");

    expect(themeDisplay.textContent).toBe(THEME_OPTIONS.light);

    fireEvent.click(toggleButton);
    expect(themeDisplay.textContent).toBe(THEME_OPTIONS.dark);

    fireEvent.click(toggleButton);
    expect(themeDisplay.textContent).toBe(THEME_OPTIONS.light);
  });

  it("should apply the theme class to the provider div", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const providerDiv =
      screen.getByTestId("theme").parentElement?.parentElement;

    expect(providerDiv).toHaveClass(THEME_OPTIONS.light);

    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(providerDiv).toHaveClass(THEME_OPTIONS.dark);
  });
});
