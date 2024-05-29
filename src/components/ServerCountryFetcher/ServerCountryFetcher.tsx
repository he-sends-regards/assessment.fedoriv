import { fetchAllCountries } from "@/services";
import SearchFilterBar from "../SearchFilterBar";

const ServerCountryFetcher = async () => {
  const countries = await fetchAllCountries();

  return <SearchFilterBar countries={countries} />;
};

export default ServerCountryFetcher;
