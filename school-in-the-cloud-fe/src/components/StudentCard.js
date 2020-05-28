

import React from 'react';

const StudentCard = (props) => {
    console.log(`props --->`, props)
   

    return (
        <div>
            <p>Id:{props.student.id}</p>
            <p>Username:{props.student.username}</p>
            <p>Email:{props.student.email}</p>
        </div>  
    )

}
export default StudentCard;