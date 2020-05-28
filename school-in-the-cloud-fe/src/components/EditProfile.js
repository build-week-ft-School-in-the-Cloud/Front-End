import React, {useState, useEffect} from 'react';
import CountryList from './CountryList';
import EditProfileSchema from './EditProfileSchema';
import * as yup from 'yup';

// init error messages with empty strings
const initialErrors = {
    username: '',
    forename: '',
    surname: ''
};

const EditProfile = props => {

    // init state, errors are empty, form values are grabbed from login state,
    // disabled is true initially but will likely be set to false since
    // the form expects the values to be valid when passed to it and checks that
    // in an effect hook a bit below
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

        // validation from yup schema
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

    // when form submits, actually update the state. This could then be pushed
    // to the server.
    const onSubmit = event => {

        event.preventDefault();

        props.setUsername(values.username);
        props.setForename(values.forename);
        props.setSurname(values.surname);
        props.setCountry(values.country);

    }

    // effect hook to see if submit button should be enabled or not
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