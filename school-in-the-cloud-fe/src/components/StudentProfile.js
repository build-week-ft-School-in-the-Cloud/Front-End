
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import '../App.css';




const StudentProfile = (props) => {
    // console.log(`props --->`, props)

    const [user, setUser] = useState({});

    const [bioState, setBioState] = useState({
        bio: ''
    });

    
    const {push} = useHistory();

    const {id} = useParams();
    console.log(`id inside SP`, id);

    useEffect(() => {
        // console.log(bioState);
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(response => {
            console.log(`response inside student profile`, response)
            setUser(response.data)
        })
        .catch(err => console.log(err.response))
    }, [id])
   

    const deleteProfile = () => {
        axiosWithAuth()
        .delete(`/api/users/${id}`)
        .then (response => {
            console.log(response)
            push('/api/student/users')

        })

        .catch(error => console.log(error.response))
    }

    const updateUser = (id) => {
        push(`/api/users/${id}`)
     }

     

     const handleChange = (event) => {
         setBioState({bioState: event.target.value})
     }

     

    



    return (
        <div className='studentProfile'>
            <p>Id:{user.id}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>            
            <button onClick={deleteProfile}>Delete Profile</button>

            <br/>

            <button onClick={() =>updateUser(user.id)}>Update User</button>
            <br/>



            <label>Bio:</label><br/>
            <textarea 
                className="bioText" 
                placeholder="Type here"
                name='bio'
                value={bioState.bio}
                onChange={handleChange}
            />

                
            <br/>
            <button>Save Bio</button>

            <pre>{bioState.bio}</pre>
            
            
        </div>
    )

}
export default StudentProfile;