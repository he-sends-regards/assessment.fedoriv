"use client";

import React, { ChangeEventHandler, FC, useState, useTransition } from "react";
import styles from "./searchFilterBar.module.css";
import { FaSearch } from "react-icons/fa";

interface Props {
  searchTerm: string;
  region: string;
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
  isPending: boolean;
  isDropdownOpen: boolean;
  handleRegionChange: (value: string) => void;
  onFilterDropdownClick: () => void;
}

const REGIONS = [
  "All Regions",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

const SearchFilterBar: FC<Props> = ({
  searchTerm,
  region,
  handleSearchChange,
  isPending,
  handleRegionChange,
  isDropdownOpen,
  onFilterDropdownClick,
}) => {
  return (
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
        <div className={styles.filterSelect} onClick={onFilterDropdownClick}>
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
  );
};

export default SearchFilterBar;
