"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const THEME_OPTIONS = { light: "light", dark: "dark" };
const DEFAULT_THEME_CONTEXT_VALUES = {
  theme: THEME_OPTIONS.light,
  toggleTheme: () => {},
};
const ThemeContext = createContext(DEFAULT_THEME_CONTEXT_VALUES);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(THEME_OPTIONS.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_OPTIONS.light
        ? THEME_OPTIONS.dark
        : THEME_OPTIONS.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
