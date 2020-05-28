import React, {useState, useEffect} from 'react';
import axios from 'axios';

// component that grabs a list of countries from an API and populates a dropdown
// with them as well as whatever was in country state
const CountryList = props => {

    // this will populate our country list, init as empty array
    const [countryList, setCountryList] = useState([]);

    // in case there was no country selected, display this message in dropdown.
    // (I don't think we can technically get this to happen since everything should
    // have a country by default, even if it's incorrect)
    let selectedCountry = 'Select Your Country';

    if (props.values.country !== null || 
        props.values.country !== undefined || 
        props.values.country !== '') {
        
        // if there is a country value, use it as default
        selectedCountry = props.values.country;
    
    }

    const getCountries = () => {

        // get the full list of all countries from API
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

    // onChange for dropdown that will set the country value
    const setCountryValue = event => {

        const value = event.target.value;
        props.setValues({...props.values, country: value});

    };

    // call API to get the countries in effect hook
    useEffect(() => {
        getCountries();
    }, []);

    // return a dropdown of all countries with user's country selected by default
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