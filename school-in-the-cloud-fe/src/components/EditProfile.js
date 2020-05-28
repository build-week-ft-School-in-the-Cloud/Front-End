import React, {useState, useEffect} from 'react';
import CountryList from './CountryList';
import EditProfileSchema from './EditProfileSchema';
import * as yup from 'yup';

const initialErrors = {
    username: '',
    forename: '',
    surname: ''
};

const EditProfile = props => {

    const [errors, setErrors] = useState(initialErrors);
    const [values, setValues] = useState({username: props.username,
                                          forename: props.forename,
                                          surname: props.surname,
                                          country: props.country});
    const [disabled, setDisabled] = useState(true);

    // validate text field inputs
    const onInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        yup.reach(EditProfileSchema, name)
           .validate(value)
           .then(valid => {
                setErrors({...errors, [name]: ''});
           })
           .catch(error => {
                setErrors({...errors, [name]: error.errors[0]});
           });

        setValues({...values, [name]: value});

    };

    const onSubmit = event => {

        event.preventDefault();

        props.setUsername(values.username);
        props.setForename(values.forename);
        props.setSurname(values.surname);
        props.setCountry(values.country);

    }

    useEffect(() => {

        EditProfileSchema.isValid(values)
            .then(valid => {
                setDisabled(!valid);
            });
    
    }, [values]);

    return (

        <div className='edit-profile-container'>
            <form className='edit-profile-form' onSubmit={onSubmit}>
                <div className='edit-profile-top'>
                    <p className='edit-profile-username'>Username: </p>
                    <input type='text' value={values.username} name='username' onChange={onInputChange} className='edit-profile-username-input' />
                    <p className='edit-profile-first-name'>First Name: </p>
                    <input type='text' value={values.forename} name='forename' onChange={onInputChange} className='edit-profile-first-name-input' />
                    <p className='edit-profile-last-name'>Last Name: </p>
                    <input type='text' value={values.surname} name='surname' onChange={onInputChange} className='edit-profile-last-name-input' />
                    <p className='edit-profile-country'>Country: </p>
                    <CountryList country={values.country} setValues={setValues} values={values}/>
                </div>
                <div className='edit-profile-bottom'>
                    <button className='student-dashboard-edit-submit' disabled={disabled}>Update Profile</button>
                    <p className='edit-profile-error-text'>{errors.username}</p>
                    <p className='edit-profile-error-text'>{errors.forename}</p>
                    <p className='edit-profile-error-text'>{errors.surname}</p>
                </div>
            </form>
        </div>

    )

}

export default EditProfile;