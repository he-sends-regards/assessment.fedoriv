import React, { Suspense } from "react";
import BackButton from "@/components/BackButton";
import styles from "./countryDetail.module.css";
import { fetchCountryByCode } from "@/services";
import { CountryDetails, Loader } from "@/components";

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

      {country ? (
        <CountryDetails country={country} />
      ) : (
        <span>Cannot find country...</span>
      )}
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
