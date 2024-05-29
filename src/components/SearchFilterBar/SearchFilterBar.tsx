"use client";

import {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Country } from "../../interfaces/country";
import { CountriesGrid, Loader } from "../";
import { fetchAllCountries } from "@/services";
import styles from "./searchFilterBar.module.css";
import { FaSearch } from "react-icons/fa";

const REGIONS = [
  "All Regions",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

const SearchFilterBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  const handleGetCountries = async () => {
    setIsLoading(true);
    const data = await fetchAllCountries();
    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetCountries();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleRegionChange = (region: string) => {
    startTransition(() => {
      setIsDropdownOpen(false);
      if (region === "All Regions") {
        setRegion("");
      } else {
        setRegion(region);
      }
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className={styles.searchFilterBar}>
        <div className={styles.searchInputContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={isPending}
            className={styles.searchInput}
            key="searchInput"
          />
        </div>

        <div className={styles.filterSelectContainer}>
          <div
            className={styles.filterSelect}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {region || "Filter by Region"}
            <span
              className={`${styles.dropdownIcon} ${
                isDropdownOpen ? styles.rotate : ""
              }`}
            >
              &#9662;
            </span>
          </div>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {REGIONS.map((region) => (
                <li
                  key={region}
                  className={styles.dropdownMenuItem}
                  onClick={() => handleRegionChange(region)}
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isLoading || isPending ? (
        <Loader />
      ) : (
        <CountriesGrid countries={filteredCountries} />
      )}
    </div>
  );
};

export default memo(SearchFilterBar);
