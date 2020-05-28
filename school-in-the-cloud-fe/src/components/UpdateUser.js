
import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const initialState = {
    username: '',
    email: ''  
}

const UpdateUser = () => {

    const [updateUser, setUpdateUser] = useState(initialState);
    // console.log(`--->`, updateUser)
    const {id} = useParams();
    // console.log(`ID IN UPDATE USER`, id)
    const {push} = useHistory();
    


     //Handle changes
     const handleChanges = event => {
        event.persist();
        setUpdateUser({
            ...updateUser,
            [event.target.name]: event.target.value
        })
    }



    const updateClickedUser = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/users/${id}`, updateUser)
    .then(response => {
        console.log(`PUT REQUEST`, response)
        push('/api/student/users')
    })
    .catch(err => console.log(`There was an error with PUT request`, err))
}
    
    return (
                <form onSubmit={updateClickedUser}>             

                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={updateUser.username}
                        onChange={handleChanges}
                    />
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={updateUser.email}
                        onChange={handleChanges}
                    /> 
                    <br/>


                    <button>Edit</button>
                </form>
            )
        }


                export default UpdateUser;














