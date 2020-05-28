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

    const setCountryValue = event => {

        const value = event.target.value;
        props.setValues({...props.values, country: value});

    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <select name='country' onChange={setCountryValue}>
            <option key={selectedCountry} value={selectedCountry}>{selectedCountry}</option>
            {countryList.map(c => {
                
                return (<option key={c} value={c}>{c}</option>);
                
            })}
        </select>
    )

}

export default CountryList;