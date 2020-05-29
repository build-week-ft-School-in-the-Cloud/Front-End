import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';



const initialState = {
    registrationInfo: {
        username: '',
        password: '',
        forename: '',
        surname: '',
        country: '',
        volunteerId:''
    }
}


const StudentSignUpForm = () => {
    //Destructure for form usage
    const { registrationInfo } = initialState;
    const [credentials, setCredentials] = useState(registrationInfo);


    const history = useHistory();

    //Handle changes
    const handleChanges = event => {
        event.persist();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    //POST REQUEST TO LOG IN
    const register = (e) => {
        e.preventDefault();
        console.log(`e`, e.target.value)
        axiosWithAuth()
            .post('/api/student/register', credentials)
            .then(response => {
                console.log(`response`, response)
                history.push('/api/student/login')
            })
            .catch(error => console.log(`There was an error`, error))
    }

    return (
        <section className="registrationWrapper">  
            <Link to="/">Go Back</Link>        

            <header>
                <h3>Welcome to Student Registration Form</h3>
            </header>

            <form onSubmit={register}>             

                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <br />

                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <br />

                <label htmlFor="forename">Forename: </label>
                <input
                    type="text"
                    name="forename"
                    placeholder="Enter first name"
                    value={credentials.forename}
                    onChange={handleChanges}
                />
                <br />

                <label htmlFor="surname">Surname: </label>
                <input
                    type="text"
                    name="surname"
                    placeholder="Enter last name"
                    value={credentials.surname}
                    onChange={handleChanges}
                />
                <br />

                <label htmlFor="country">Country: </label>
                <input
                    type="text"
                    name="country"
                    placeholder="Enter Country"
                    value={credentials.country}
                    onChange={handleChanges}
                />
                <br />

                <label htmlFor="id">Id: </label>
                <input
                    type="text"
                    name="volunteerId"
                    placeholder="Enter id"
                    value={credentials.volunteerId}
                    onChange={handleChanges}
                    
                />
                <br />

                <button className="genericButton">Register</button>
            </form>
        </section>
    )



}

export default StudentSignUpForm;