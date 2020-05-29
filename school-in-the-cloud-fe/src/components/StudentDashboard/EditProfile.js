import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CountryList from './CountryList';
import EditProfileSchema from './EditProfileSchema';
import * as yup from 'yup';

import '../../App.css';

// styled-components
const EditProfileText = styled.p`
    margin-top: 1rem;

    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;

const EditProfileTitle = styled.h2`
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2rem;

    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    font-family: 'Courgette', serif;
    font-size: 3rem;
    font-weight: bolder;
    
    @media only screen and (max-width: 510px){

        font-size: 2rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;

    }

    text-align: center;
    
    color: white;
    background-color: #50BDE4;

    box-shadow: 3px 5px 0px darkBlue;
`;

const EditProfileTextInput = styled.input`
    width: 100%;
    border: 0px;
    border-bottom: 2px solid #50BDE4;

    padding-left: 1rem;

    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 2rem;

    color: darkBlue;
`;

const EditProfileSubmit = styled.button`
    margin: 1rem;
    padding: 1rem;

    border: none;
    border-radius: 1rem;
    background-color: #50BDE4;
    color: white;

    font-family: 'Courgette', serif;
    font-weight: bold;
    font-size: 2rem;

    box-shadow: 3px 5px 0px darkBlue;

    :hover {

        margin-top: 1.1rem;
        padding-left: 1.1rem;
        margin-bottom: 0.9rem;

        color: #DCEFFA;
        background-color: #30ADE4;

        box-shadow: 2px 4px 0px darkBlue;
    }

    :active {
        color: darkBlue;
    }

    :focus {
        outline: 0;
    }
`;

const ErrorText = styled.p`
    color: darkBlue;

    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
`;

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
                    <EditProfileTitle>Edit Profile</EditProfileTitle>
                    <EditProfileText>Username: </EditProfileText>
                    <EditProfileTextInput type='text' value={values.username} name='username' onChange={onInputChange} />
                    <EditProfileText>First Name: </EditProfileText>
                    <EditProfileTextInput type='text' value={values.forename} name='forename' onChange={onInputChange} />
                    <EditProfileText>Last Name: </EditProfileText>
                    <EditProfileTextInput type='text' value={values.surname} name='surname' onChange={onInputChange} />
                    <EditProfileText>Country: </EditProfileText>
                    <CountryList country={values.country} setValues={setValues} values={values}/>
                </div>
                <div className='edit-profile-bottom'>
                    <EditProfileSubmit disabled={disabled}>Update Profile</EditProfileSubmit>
                    <ErrorText>{errors.username}</ErrorText>
                    <ErrorText>{errors.forename}</ErrorText>
                    <ErrorText>{errors.surname}</ErrorText>
                </div>
            </form>
        </div>

    )

}

export default EditProfile;