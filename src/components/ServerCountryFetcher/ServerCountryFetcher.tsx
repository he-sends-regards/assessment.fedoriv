import { fetchAllCountries } from "@/services";
import CountriesPage from "../CountriesPage";

const ServerCountryFetcher = async () => {
  const countries = await fetchAllCountries();

  if (!countries) return null;

  return <CountriesPage countries={countries} />;
};

export default ServerCountryFetcher;
