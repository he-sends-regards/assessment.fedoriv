"use client";

import React from "react";
import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper} data-testid="loader-wrapper">
      <div className={styles.loader} data-testid="loader"></div>
    </div>
  );
}
