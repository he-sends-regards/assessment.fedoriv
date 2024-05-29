import { Country } from "@/interfaces";
import React, { FC } from "react";
import styles from "./countriesGrid.module.css";
import CountryCard from "../CountryCard";

interface Props {
  countries: Country[];
}

const CountriesGrid: FC<Props> = ({ countries }) => {
  return (
    <div className={styles.countriesGrid}>
      {countries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </div>
  );
};

export default CountriesGrid;
