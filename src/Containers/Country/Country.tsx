import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, URL_INFO } from '../../globalConstants.ts';
import CountryList from '../../Components/CountryList/CountryList';
import CountryInfo from '../../Components/CountryInfo/CountryInfo';
import type { Country, CountryInfoData } from '../../types';

const Country = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [countryInfo, setCountryInfo] = useState<CountryInfoData | null>(null);
    const [borderCountries, setBorderCountries] = useState<string[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(API_URL);
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            axios.get(`${URL_INFO}${selectedCountry}`)
                .then(response => {
                    const countryData = response.data;
                    setCountryInfo(countryData);

                    if (countryData.borders.length > 0) {
                        const borderRequests = countryData.borders.map((borderCode: string) =>
                            axios.get(`${URL_INFO}${borderCode}`).then(res => res.data.name)
                        );
                        Promise.all(borderRequests).then(names => {
                            setBorderCountries(names);
                        });
                    } else {
                        setBorderCountries([]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching country info:', error);
                });
        }
    }, [selectedCountry]);

    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <CountryList countries={countries} onSelectCountry={setSelectedCountry} />
                </div>

                <div className="col-8">
                    <CountryInfo
                        countryInfo={countryInfo}
                        borderCountries={borderCountries}
                    />
                </div>
            </div>
        </div>
    );
};

export default Country;
