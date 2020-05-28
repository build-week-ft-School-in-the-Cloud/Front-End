import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import EditProfile from './EditProfile';

// below will probably need routing, for now just get it up and running
const StudentDashboard = props => {

    return (

        <div className='student-dashboard-container'>
            <Router>
                <Navbar />
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
                <Footer />
            </Router>
        </div>

    )

}

export default StudentDashboard;