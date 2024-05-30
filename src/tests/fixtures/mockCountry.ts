import { Country } from "@/interfaces";

export const mockCountries: Country[] = [
  {
    cca3: "USA",
    name: {
      common: "United States",
      nativeName: {
        eng: {
          official: "United States of America",
          common: "United States",
        },
      },
    },
    flags: {
      svg: "https://example.com/flag.svg",
      png: "https://example.com/flag.png",
    },
    region: "Americas",
    subregion: "Northern America",
    capital: ["Washington D.C."],
    population: 331002651,
    borders: ["CAN", "MEX"],
    tld: [".us"],
    currencies: {
      USD: { name: "United States dollar", symbol: "$" },
    },
    languages: {
      eng: "English",
    },
  },
  {
    cca3: "CAN",
    name: {
      common: "Canada",
      nativeName: {
        eng: {
          official: "Canada",
          common: "Canada",
        },
        fra: {
          official: "Canada",
          common: "Canada",
        },
      },
    },
    flags: {
      svg: "https://example.com/flag.svg",
      png: "https://example.com/flag.png",
    },
    region: "Americas",
    subregion: "Northern America",
    capital: ["Ottawa"],
    population: 37742154,
    borders: ["USA"],
    tld: [".ca"],
    currencies: {
      CAD: { name: "Canadian dollar", symbol: "$" },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
  },
];

export const mockCountryFinland: Country = {
  flags: {
    svg: "https://flagcdn.com/w320/fi.png",
    png: "https://flagcdn.com/w320/fi.png",
  },
  name: {
    common: "Finland",
    nativeName: {
      fin: {
        official: "Suomen tasavalta",
        common: "Suomi",
      },
    },
  },
  cca3: "FIN",
  region: "Europe",
  subregion: "Northern Europe",
  capital: ["Helsinki"],
  population: 5536146,
  borders: ["SWE", "NOR"],
  tld: [".fi"],
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  languages: {
    fin: "Finnish",
    swe: "Swedish",
  },
};
