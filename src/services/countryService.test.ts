import { fetchAllCountries, fetchCountryByCode } from "./country.service";

describe("Country Service API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("fetchAllCountries", () => {
    test("fetches data correctly", async () => {
      const mockData = [
        { name: { common: "Country1" } },
        { name: { common: "Country2" } },
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      ) as jest.Mock;

      const result = await fetchAllCountries();
      expect(result).toEqual(mockData);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/all",
        { method: "GET" }
      );
    });

    test("handles fetch error", async () => {
      const mockError = new Error("API is down");
      global.fetch = jest.fn(() => Promise.reject(mockError)) as jest.Mock;

      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const result = await fetchAllCountries();
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/all",
        { method: "GET" }
      );
      expect(console.error).toHaveBeenCalledWith(mockError);

      consoleErrorSpy.mockRestore();
    });

    test("handles non-OK response", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve(null),
        })
      ) as jest.Mock;

      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const result = await fetchAllCountries();
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/all",
        { method: "GET" }
      );

      consoleErrorSpy.mockRestore();
    });
  });

  describe("fetchCountryByCode", () => {
    test("fetches data correctly", async () => {
      const mockData = { name: { common: "Country1" } };

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      ) as jest.Mock;

      const result = await fetchCountryByCode("C1");
      expect(result).toEqual(mockData);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/C1",
        { method: "GET" }
      );
    });

    test("handles fetch error", async () => {
      const mockError = new Error("API is down");
      global.fetch = jest.fn(() => Promise.reject(mockError)) as jest.Mock;

      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const result = await fetchCountryByCode("C1");
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/C1",
        { method: "GET" }
      );
      expect(console.error).toHaveBeenCalledWith(mockError);

      consoleErrorSpy.mockRestore();
    });

    test("handles non-OK response", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve(null),
        })
      ) as jest.Mock;

      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const result = await fetchCountryByCode("C1");
      expect(result).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/countries/C1",
        { method: "GET" }
      );

      consoleErrorSpy.mockRestore();
    });
  });
});
