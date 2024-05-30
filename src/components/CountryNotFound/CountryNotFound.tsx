"use client";

import React from "react";
import styles from "./countryNotFound.module.css";
import { useRouter } from "next/navigation";
import { BiRefresh } from "react-icons/bi";

const CountryNotFound = () => {
  const router = useRouter();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <span className={styles.message}>
        The requested country information could not be found. This might be due
        to an issue with the restcountries.com service. Please try again later.
      </span>

      <button className={styles.button} onClick={handleReload}>
        Reload
        <BiRefresh />
      </button>
    </div>
  );
};

export default CountryNotFound;
