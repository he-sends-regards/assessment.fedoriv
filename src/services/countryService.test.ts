import axios from "axios";
import { fetchAllCountries } from "./country.service";

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
});
