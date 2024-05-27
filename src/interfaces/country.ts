export interface Country {
  name: {
    common: string;
  };
  cca3: string;
  region: string;
  capital: string[];
  population: number;
  borders: string[];
}
