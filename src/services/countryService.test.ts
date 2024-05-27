import axios from "axios";
import {
  fetchAllCountries,
  fetchCountryByName,
  fetchCountriesByRegion,
} from "./country.service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Country Service API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Get all countries service fetches data correctly", async () => {
    const mockData = [
      { name: { common: "Country1" } },
      { name: { common: "Country2" } },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchAllCountries();
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://restcountries.com/v3.1/all"
    );
  });

  test("Get countries by name service fetches data correctly", async () => {
    const mockData = { name: { common: "Country1" } };
    mockedAxios.get.mockResolvedValueOnce({ data: [mockData] });

    const result = await fetchCountryByName("Country1");
    expect(result).toEqual([mockData]);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://restcountries.com/v3.1/name/Country1"
    );
  });

  test("Get countries by region service fetches data correctly", async () => {
    const mockData = [
      { name: { common: "Country1" } },
      { name: { common: "Country2" } },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchCountriesByRegion("Europe");
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://restcountries.com/v3.1/region/Europe"
    );
  });
});
