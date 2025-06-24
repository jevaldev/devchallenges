export interface Country {
  name: {
    common: string;
  };
  currencies: Record<string, { name: string; symbol: string }>;
  capital: string;
  languages: [string];
  borders: [string];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
