export interface Country {
  flags: {
    svg: string;
    png: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  borders: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
}
