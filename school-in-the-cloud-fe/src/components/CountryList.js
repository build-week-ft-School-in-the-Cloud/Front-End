import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

const countryList = ['USA','UK','Germany','South Africa','Mexico','Spain','Portugal'];

const CountryList = props => {

    let selectedCountry = 'Select Your Country';

    if (props.country !== null || props.country !== undefined) {
        selectedCountry = props.country;
    }

    console.log(props.country);
    console.log(selectedCountry);

    return (
        <select name='country'> {/* Make this stuff reference CountryListItem */}
            <option defaultValue={selectedCountry}>{selectedCountry}</option>
            {countryList.map(c => {
                if (c !== selectedCountry){
                    return (<option>{c}</option>);
                }
                else {
                    return;
                }
            })}
        </select>
    )

}

export default CountryList;