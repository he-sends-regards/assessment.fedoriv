"use client";

import React, { FC } from "react";
import Image from "next/image";
import styles from "./countryDetails.module.css";
import { Country } from "@/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  country: Country;
}

const CountryDetails: FC<Props> = ({ country }) => {
  const router = useRouter();

  const onBorderCountryClick = (country: string) => {
    router.push(`/country/${country}`);
  };

  return (
    <div className={styles.countryDetailsContainer}>
      <div className={styles.flag}>
        <Image
          src={country.flags.svg}
          width={0}
          height={0}
          layout="responsive"
          sizes="(max-width: 900px) 100vw, 45vw"
          alt={`Flag of ${country.name.common}`}
        />
      </div>

      <div className={styles.details}>
        <h1>{country.name.common}</h1>
        <div className={styles.detailsGrid}>
          <p className={styles.detailItem}>
            <strong>Native Name: </strong>
            {Object.values(country.name.nativeName)[0].common}
          </p>
          <p className={styles.detailItem}>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className={styles.detailItem}>
            <strong>Region:</strong> {country.region}
          </p>
          <p className={styles.detailItem}>
            <strong>Sub Region:</strong> {country.subregion}
          </p>
          <p className={styles.detailItem}>
            <strong>Capital:</strong> {country.capital.join(", ")}
          </p>
          <p className={styles.detailItem}>
            <strong>Top Level Domain:</strong> {country.tld.join(", ")}
          </p>
          <p className={styles.detailItem}>
            <strong>Currencies:</strong>{" "}
            {Object.values(country.currencies)
              .map((c) => c.name)
              .join(", ")}
          </p>
          <p className={styles.detailItem}>
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
        </div>

        <div className={styles.borderCountries}>
          <h2>Border Countries:</h2>

          <div className={styles.borderCountriesList}>
            {country.borders?.map((borderCountry) => (
              <button
                key={borderCountry}
                onClick={() => onBorderCountryClick(borderCountry)}
                className={styles.borderCountry}
              >
                {borderCountry}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
