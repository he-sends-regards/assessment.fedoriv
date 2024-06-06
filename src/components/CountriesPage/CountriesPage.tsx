"use client";

import React, { FC, memo, useCallback, useState } from "react";
import { Country } from "../../interfaces/country";
import { CountriesGrid, CountriesPageFail, SearchFilterBar } from "../";

interface CountriesPageProps {
  countries: Country[] | null;
}

const CountriesPage: FC<CountriesPageProps> = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsPending(true);
      setSearchTerm(e.target.value);
      setIsPending(false);
    },
    []
  );

  const handleRegionChange = useCallback((region: string) => {
    setIsDropdownOpen(false);
    if (region === "All Regions") {
      setRegion("");
    } else {
      setRegion(region);
    }
  }, []);

  const onFilterDropdownClick = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  if (!countries || !countries.length) {
    return <CountriesPageFail />;
  }

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
  );

  return (
    <div>
      <SearchFilterBar
        isPending={isPending}
        handleRegionChange={handleRegionChange}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        region={region}
        onFilterDropdownClick={onFilterDropdownClick}
        isDropdownOpen={isDropdownOpen}
      />

      <CountriesGrid countries={filteredCountries} />
    </div>
  );
};

export default memo(CountriesPage);
