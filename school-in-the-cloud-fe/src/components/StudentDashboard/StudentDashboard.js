import React from 'react';
import {Route, Switch} from 'react-router-dom';
import EditProfile from './EditProfile';

// studentDashboard gets its state from props and renders editProfile within it when
// selected from Navbar by routing /edit path
const StudentDashboard = props => {

    return (

        <div className='student-dashboard-container'>
                <Switch>
                    <Route exact path='/'>
                        <p className='student-dashboard-username'>Username: {props.username}</p>
                        <p className='student-dashboard-name'>Name: {props.forename + ' ' + props.surname}</p>
                        <p className='student-dashboard-country'>Country: {props.country}</p>
                    </Route>
                    <Route path='/edit'>
                        <EditProfile username={props.username} 
                                     forename={props.forename} 
                                     surname={props.surname} 
                                     country={props.country} 
                                     setUsername={props.setUsername}
                                     setForename={props.setForename}
                                     setSurname={props.setSurname}
                                     setCountry={props.setCountry}/>
                    </Route>
                </Switch>
        </div>

    )

}

export default StudentDashboard;