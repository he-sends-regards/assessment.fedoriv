import { fetchAllCountries } from "@/services";
import CountriesPage from "../CountriesPage";

const ServerCountryFetcher = async () => {
  const countries = await fetchAllCountries();

  return <CountriesPage countries={countries} />;
};

export default ServerCountryFetcher;
