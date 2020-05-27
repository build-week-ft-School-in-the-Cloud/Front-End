import React, {useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const StudentDashboard = () => {

    const fetchData = (e) => {
        axiosWithAuth()
        .get('/api/admin')
        .then(response => {
            console.log(`response from SD`, response)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    })




    return(
        <div>THIS IS StudentDashboard</div>
        
    )

}

export default StudentDashboard