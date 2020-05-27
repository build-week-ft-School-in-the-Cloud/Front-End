import React, {useState, useEffect} from 'react';
import CountryList from './CountryList';

const EditProfile = props => {

    return (

        <div className='edit-profile-container'>
            <p className='student-dashboard-edit-username'>Username: </p>
            <input type='text' value={props.username} className='student-dashboard-edit-username-input' />
            <p className='student-dashboard-edit-first-name'>First Name: </p>
            <input type='text' value={props.forename} className='student-dashboard-edit-first-name-input' />
            <p className='student-dashboard-edit-last-name'>Last Name: </p>
            <input type='text' value={props.surname} className='student-dashboard-edit-last-name-input' />
            <p className='student-dashboard-edit-country'>Country: </p>
            <CountryList country={props.country}/>
        </div>

    )

}

export default EditProfile;