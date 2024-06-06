"use client";

import React, { useTransition } from "react";
import styles from "./CountriesPageFail.module.css";
import { BiRefresh } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

const CountriesPageFail = () => {
  const router = useRouter();

  const onReloadBtnClick = () => {
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <span className={styles.message}>
        Countries information could not be loaded. This might be due to an issue
        with the restcountries.com service. Please try again later.
      </span>

      <button className={styles.button} onClick={onReloadBtnClick}>
        Reload
        <BiRefresh />
      </button>
    </div>
  );
};

export default CountriesPageFail;
