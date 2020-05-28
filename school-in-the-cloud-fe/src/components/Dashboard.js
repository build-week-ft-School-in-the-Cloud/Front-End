import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import StudentCard from '../components/StudentCard';
import {Link, useHistory} from 'react-router-dom';
import StudentProfile from '../components/StudentProfile';

// const initialState={
//     users=[]
// }




const Dashboard = () => {  
    const [users, setUsers] = useState([]);
    const {push} = useHistory();
    
    
   

  useEffect(() => {
    fetchUsers();
    console.log(`-->`, users);
  }, [])
   
    //Fetch list of current students
     const fetchUsers = () => {
        axiosWithAuth()
        
        .get('/api/users')
        .then(response => {
            console.log(`response from SD`, response.data)
            setUsers(response.data)                  
        })        
        .catch(err => console.log(err))
    }

    const viewStudentProfile = (id) => {
       push(`/student-profile/${id}`)
    }

    

    return (

        <section>
            
            <div>
                {users.map((student) => {                    
                    console.log(`---->student`, student)
                     
                    return (   
                        <>                     
                        <StudentCard 
                            key={student.id}
                            student={student}
                        />  
                        <button onClick={() => viewStudentProfile(student.id)}>See Student</button>  
                        </>                  
                         
                    )
                })}  

                          
            </div>
        </section>

        
    )
  }


export default Dashboard