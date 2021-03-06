import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

// styled-components:
const CountryOption = styled.option`
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`;

const CountrySelect = styled.select`
    width: 60%;
    width: 60vw;

    padding: 0.5rem;
    margin-top: 0.25rem;
    
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 2rem;

    border: 2px solid #50BDE4;
    border-radius: 1rem;

    color: darkBlue;
`;

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
                let tempCountryList = [];
                response.data.forEach(c => {
                    tempCountryList.push(c.name);
                });
                tempCountryList.sort();
                setCountryList(tempCountryList);
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
        <CountrySelect name='country' onChange={setCountryValue}>
            <CountryOption key={selectedCountry} value={selectedCountry}>{selectedCountry}</CountryOption>
            {countryList.map(c => {
                
                return (<CountryOption key={c} value={c}>{c}</CountryOption>);
                
            })}
        </CountrySelect>
    )

}

export default CountryList;