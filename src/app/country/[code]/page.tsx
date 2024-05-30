import React, { Suspense } from "react";
import BackButton from "@/components/BackButton";
import styles from "./countryPage.module.css";
import { fetchCountryByCode } from "@/services";
import { CountryDetails, CountryNotFound, Loader } from "@/components";

interface CountryPageProps {
  params: {
    code: string;
  };
}

const CountryPage = async ({ params }: CountryPageProps) => {
  const country = await fetchCountryByCode(params.code);

  return (
    <div className={styles.pageContainer}>
      <BackButton />

      {country ? <CountryDetails country={country} /> : <CountryNotFound />}
    </div>
  );
};

const CountryPageWithSuspense = (props: CountryPageProps) => {
  return (
    <Suspense
      fallback={
        <div className={styles.pageContainer}>
          <BackButton />
          <Loader />
        </div>
      }
    >
      <CountryPage {...props} />
    </Suspense>
  );
};

export default CountryPageWithSuspense;
