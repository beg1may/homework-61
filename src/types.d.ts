export interface Country {
    alpha3Code: string;
    name: string;
}

export interface CountryInfoData {
    name: string;
    capital: string;
    population: number;
    borders: string[];
}