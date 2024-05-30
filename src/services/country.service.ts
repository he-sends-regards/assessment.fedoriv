import { Country } from "@/interfaces";

export const COUNTRIES_BASE_API_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async (): Promise<Country[] | null> => {
  try {
    const response = await fetch(`${COUNTRIES_BASE_API_URL}/all`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCountryByCode = async (
  code: string
): Promise<Country | null> => {
  try {
    const response = await fetch(`${COUNTRIES_BASE_API_URL}/alpha/${code}`, {
      method: "GET",
    });
    return (await response.json())[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};
