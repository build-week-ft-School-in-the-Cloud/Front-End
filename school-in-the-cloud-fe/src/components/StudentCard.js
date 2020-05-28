

import React from 'react';
import '../App.css';

const StudentCard = (props) => {
    console.log(`props --->`, props)
   

    return (
        <div className="studentCard">
            <p>Id:{props.student.id}</p>
            <p>Username:{props.student.username}</p>
            <p>Email:{props.student.email}</p>
        </div>  
    )

}
export default StudentCard;