import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import EditProfile from './EditProfile';

// styled-components:
const StudentDashboardContainer = styled.div`
    margin: 3rem auto 3rem auto;
    width: 85%;
    width: 85vw;
    align-self: center;

    background-color: white;

    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;

    padding: 5rem 5rem 10rem 5rem;

    box-shadow: 3px 5px 0px;
`;

const StudentDashboardTitle = styled.h2`
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2rem;

    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    font-family: 'Courgette', serif;
    font-size: 3rem;
    font-weight: bolder;
    
    @media only screen and (max-width: 510px){

        font-size: 2rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;

    }

    text-align: center;
    
    color: white;
    background-color: #50BDE4;

    box-shadow: 3px 5px 0px darkBlue;
`;

const StudentDashboardText = styled.p`
    margin-top: 2rem;

    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;

// studentDashboard gets its state from props and renders editProfile within it when
// selected from Navbar by routing /edit path
const StudentDashboard = props => {

    return (

        <StudentDashboardContainer>
                <Switch>
                    <Route exact path='/'>
                        <StudentDashboardTitle>Student Profile</StudentDashboardTitle>
                        <StudentDashboardText>Username: {props.username}</StudentDashboardText>
                        <StudentDashboardText>Name: {props.forename + ' ' + props.surname}</StudentDashboardText>
                        <StudentDashboardText>Country: {props.country}</StudentDashboardText>
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
        </StudentDashboardContainer>

    )

}

export default StudentDashboard;