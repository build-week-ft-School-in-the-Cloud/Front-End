import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CountryList = props => {

    const [countryList, setCountryList] = useState([]);

    let selectedCountry = 'Select Your Country';

    if (props.country !== null || props.country !== undefined) {
        selectedCountry = props.country;
    }

    const getCountries = () => {

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response);
                let tempCountryList = [];
                response.data.forEach(c => {
                    tempCountryList.push(c.name);
                });
                tempCountryList.sort();
                setCountryList(tempCountryList);
                console.log(tempCountryList);
            })
            .catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <select name='country'>
            <option key={selectedCountry} defaultValue={selectedCountry}>{selectedCountry}</option>
            {countryList.map(c => {
                if (c !== selectedCountry){
                    return (<option key={c}>{c}</option>);
                }
                else {
                    return;
                }
            })}
        </select>
    )

}

export default CountryList;