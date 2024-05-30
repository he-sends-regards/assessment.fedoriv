import { Suspense } from "react";
import BackButton from "@/components/BackButton";
import styles from "./countryDetail.module.css";
import { fetchCountryByCode } from "@/services";
import Image from "next/image";
import { Loader } from "@/components";

interface CountryDetailProps {
  params: {
    code: string;
  };
}

const CountryDetail = async ({ params }: CountryDetailProps) => {
  const country = await fetchCountryByCode(params.code);

  return (
    <div className={styles.pageContainer}>
      <BackButton />

      {country ? (
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
                <strong>Native Name:</strong>{" "}
                {Object.values(country.name.nativeName)[0].common}
              </p>
              <p className={styles.detailItem}>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
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
                {country.borders?.map((border) => (
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
        </div>
      ) : (
        <span>Cannot find country...</span>
      )}
    </div>
  );
};

const CountryDetailWithSuspense = (props: CountryDetailProps) => {
  return (
    <Suspense
      fallback={
        <div className={styles.pageContainer}>
          <BackButton />
          <Loader />
        </div>
      }
    >
      <CountryDetail {...props} />
    </Suspense>
  );
};

export default CountryDetailWithSuspense;
