"use client";

import { THEME_OPTIONS, useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.appHeader}>
      <h1 className={styles.appHeaderTitle}>Where in the world?</h1>

      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === THEME_OPTIONS.light ? <FaMoon /> : <FaSun />}
        {theme === THEME_OPTIONS.light ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default AppHeader;
