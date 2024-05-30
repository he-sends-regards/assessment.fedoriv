"use client";

import React, { FC, useTransition } from "react";
import styles from "./countryNotFound.module.css";
import { BiRefresh } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

const CountryNotFound = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onReloadBtnClick = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <span className={styles.message}>
        The requested country information could not be found. This might be due
        to an issue with the restcountries.com service. Please try again later.
      </span>

      <button className={styles.button} onClick={onReloadBtnClick}>
        Reload
        <BiRefresh />
      </button>
    </div>
  );
};

export default CountryNotFound;
