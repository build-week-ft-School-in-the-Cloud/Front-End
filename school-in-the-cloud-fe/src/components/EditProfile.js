import React, {useState, useEffect} from 'react';
import CountryList from './CountryList';
import EditProfileSchema from './EditProfileSchema';
import * as yup from 'yup';

const initialErrors = {
    username: '',
    forename: '',
    surname: '',
    country: ''
};

const EditProfile = props => {

    const [errors, setErrors] = useState(initialErrors);

    const onInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        //finish validation here and updating state

    };

    return (

        <div className='edit-profile-container'>
            <p className='student-dashboard-edit-username'>Username: </p>
            <input type='text' value={props.username} className='student-dashboard-edit-username-input' />
            <p className='student-dashboard-edit-first-name'>First Name: </p>
            <input type='text' value={props.forename} className='student-dashboard-edit-first-name-input' />
            <p className='student-dashboard-edit-last-name'>Last Name: </p>
            <input type='text' value={props.surname} className='student-dashboard-edit-last-name-input' />
            <p className='student-dashboard-edit-country'>Country: </p>
            <CountryList country={props.country} setCountry={props.setCountry}/>
            <button className='student-dashboard-edit-submit'>Update Profile</button>
        </div>

    )

}

export default EditProfile;