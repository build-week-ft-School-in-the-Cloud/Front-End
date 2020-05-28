
import React, {useState} from 'react';


const initialState = {
    username: '',
    password: '',
    forename: '',
    surname: '',
    country: '',
    volunteerId:''
}

const UpdateUser = () => {

    const [updateUser, setUpdateUser] = useState(initialState);
    // console.log(`--->`, updateUser)





     updateUser = () => {
    axiosWithAuth()
    .put("/students/profile/edit")
    .then(response => {
        // console.log(`PUT REQUEST`, response)
    })
    .catch(err => console.log(`There was an error with PUT request`, err))
}
    
    return (
                <form>             

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

                    <button>Update</button>
                </form>
            )
        }


                export default UpdateUser;














