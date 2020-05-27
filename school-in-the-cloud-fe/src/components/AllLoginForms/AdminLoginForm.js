import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import LoginErrorMessage from '../LoginErrorMessage';


const initialState = {
    username: '',
    password: ''
}


const AdminLoginForm = () => {
    const [credentials, setCredentials] = useState(initialState);
    const [message, setMessage] = useState('');
    // console.log(credentials);
    const history = useHistory();
    // console.log(`history`, history);



    //Handle changes
    const handleChanges = event => {
        event.persist();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    //POST REQUEST TO LOG IN
    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/admin/login', credentials)
            .then(response => {
                console.log(`response`, response)
                localStorage.setItem('token', response.data.token)
                history.push('/api/admin/users')
                
            })

            .catch(error => {
                console.log(`There was a problem with your login`, error)
                setMessage("error")
            })
    }




    return (
        <section>        
            <Link to="/">Go Back</Link>
            <header>
                <h2>Welcome to Admin Login Page</h2>
                <h3>Log in</h3>
            </header>

            <form onSubmit={login}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <br />
                <button>Log in</button>
            </form>

            <div>
                {message === "error" ? <LoginErrorMessage /> : null}
            </div>
        </section>
    )



}

export default AdminLoginForm;