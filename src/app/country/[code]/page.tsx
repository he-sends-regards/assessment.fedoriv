import axios from "axios";
import { Country } from "../../../interfaces/country";
import BackButton from "../../../components/BackButton";
import styles from "./countryDetail.module.css";
import Image from "next/image";

interface CountryDetailProps {
  params: {
    code: string;
  };
}

export default async function CountryDetail({ params }: CountryDetailProps) {
  const response = await axios.get(
    `https://restcountries.com/v3.1/alpha/${params.code}`
  );
  const country: Country = response.data[0];

  return (
    <div className={styles.container}>
      <div className={styles.flag}>
        <Image
          src={country.flags.svg}
          width={900}
          height={450}
          alt={`Flag of ${country.name.common}`}
        />
      </div>
      <div className={styles.details}>
        <BackButton />
        <h1>{country.name.common}</h1>
        <p>
          <strong>Native Name:</strong>{" "}
          {Object.values(country.name.nativeName)[0].common}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Sub Region:</strong> {country.subregion}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital.join(", ")}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.tld.join(", ")}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {Object.values(country.currencies)
            .map((c) => c.name)
            .join(", ")}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {Object.values(country.languages).join(", ")}
        </p>
        <h2>Bordering Countries:</h2>
        <div className={styles.borderCountries}>
          {country.borders.map((border) => (
            <a
              key={border}
              href={`/country/${border}`}
              className={styles.borderCountry}
            >
              {border}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
