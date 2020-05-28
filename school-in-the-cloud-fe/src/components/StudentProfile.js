
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';




const StudentProfile = (props) => {
    // console.log(`props --->`, props)

    const [user, setUser] = useState({});
    const {push} = useHistory();

    const {id} = useParams();
    console.log(`id inside SP`, id);

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(response => {
            console.log(`response inside student profile`, response)
            setUser(response.data)
        })
        .catch(err => console.log(err.response))
    }, [])
   

    const deleteProfile = () => {
        axiosWithAuth()
        .delete(`/api/users/${id}`)
        .then (response => {
            console.log(response)
            push('/api/student/users')

        })

        .catch(error => console.log(error.response))
    }


    return (
        <div>
            <p>Id:{user.id}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <button onClick={deleteProfile}>Delete Profile</button>
        </div>
    )

}
export default StudentProfile;