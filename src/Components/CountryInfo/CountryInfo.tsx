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
        <div className="container my-5">
            <h2 className="my-4 text-center">Информация о стране</h2>
            {countryInfo ? (
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">{countryInfo.name}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Столица:</strong> {countryInfo.capital}</li>
                            <li className="list-group-item">
                                <strong>Население:</strong> {countryInfo.population.toLocaleString() + ' людей'}</li>
                            <li className="list-group-item">
                                <strong>Граничит с: </strong>
                                {borderCountries.length > 0 ? borderCountries.join(', ') : 'Нет данных'}
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-center text-muted">Выберите страну для отображения информации</p>
            )}
        </div>
    );
};

export default CountryInfo;
