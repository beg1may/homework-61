import React from 'react';
import {Country} from "../../types";

interface Props {
    countries: Country[];
    onSelectCountry: (alpha3Code: string) => void;
}

const CountryList: React.FC<Props> = ({ countries, onSelectCountry }) => {
    return (
        <div>
            <h2 className="my-4">Выберите страну</h2>
            <ul>
                {countries.map(country => (
                    <li
                        key={country.alpha3Code}
                        onClick={() => onSelectCountry(country.alpha3Code)}
                        style={{cursor: 'pointer'}}
                    >
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
