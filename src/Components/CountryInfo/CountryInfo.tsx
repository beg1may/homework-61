import React from 'react';

interface Props {
    countryInfo: {
        name: string;
        capital: string;
        population: number;
        borders: string[];
    } | null;
    borderCountries: string[];
}

const CountryInfo: React.FC<Props> = ({ countryInfo, borderCountries }) => {
    return (
        <div>
            <h2 className="my-4">Информация о стране</h2>
            {countryInfo ? (
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{countryInfo.name}</h3>
                        <ul className="list-group">
                            <li><strong>Столица:</strong> {countryInfo.capital}</li>
                            <li>
                                <strong>Население:</strong> {countryInfo.population.toLocaleString() + ' людей'}</li>
                            <li>
                                <strong>Граничит с: </strong>
                                {borderCountries.length > 0 ? borderCountries.join(', ') : 'Нет данных'}
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Выберите страну для отображения информации</p>
            )}
        </div>
    );
};

export default CountryInfo;
