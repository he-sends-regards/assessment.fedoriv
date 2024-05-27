import { Country } from "@/interfaces";
import axios from "axios";

export const COUNTRIES_BASE_API_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(`${COUNTRIES_BASE_API_URL}/all`);
  return response.data;
};

export const fetchCountryByName = async (name: string): Promise<Country[]> => {
  const response = await axios.get<Country[]>(
    `${COUNTRIES_BASE_API_URL}/name/${name}`
  );
  return response.data;
};

export const fetchCountriesByRegion = async (
  region: string
): Promise<Country[]> => {
  const response = await axios.get<Country[]>(
    `${COUNTRIES_BASE_API_URL}/region/${region}`
  );
  return response.data;
};
