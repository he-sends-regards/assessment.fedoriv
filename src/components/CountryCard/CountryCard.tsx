import { Country } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";
import styles from "./countryCard.module.css";

interface Props {
  country: Country;
}

const CountryCard: FC<Props> = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      <Image
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        width={320}
        height={168}
        objectFit="cover"
        className={styles.countryCardImg}
      />

      <div className={styles.countryCardContent}>
        <h2 className={styles.countryCardTitle}>{country.name.common}</h2>
        <p className={styles.countryCardText}>
          <strong>Population:</strong> {country.population}
        </p>
        <p className={styles.countryCardText}>
          <strong>Region:</strong> {country.region}
        </p>
        <p className={styles.countryCardText}>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
