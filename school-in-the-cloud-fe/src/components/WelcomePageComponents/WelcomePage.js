import React from 'react';
//Login forms
import AdminLoginForm from '../AllLoginForms/AdminLoginForm';
import StudentLoginForm from '../AllLoginForms/StudentLoginForm';
import VolunteerLoginForm from '../AllLoginForms/VolunteerLoginForm';

//Registration forms
import AdminSignUpForm from '../AllSignUpForms/AdminSignUpForm';
import StudentSignUpForm from '../AllSignUpForms/StudentSignUpForm';
import VolunteerSignUpForm from '../AllSignUpForms/VolunteerSignUpForm';

import {Route} from 'react-router-dom';
import WelcomePageRoutes from '../WelcomePageComponents/WelcomePageRoutes';




function WelcomePage() {   
    return (     
        <section> 
            <Route exact path="/" component={WelcomePageRoutes}/>      
            <Route exact path='/api/admin/login' component={AdminLoginForm}/>  
            <Route exact path='/api/student/login' component={StudentLoginForm}/>  
            <Route exact path='/api/volunteer/login' component={VolunteerLoginForm}/> 


            <Route exact path='/api/admin/register' component={AdminSignUpForm}/>  
            <Route exact path='/api/student/register' component={StudentSignUpForm}/> 
            <Route exact path='/api/volunteer/register' component={VolunteerSignUpForm}/>                  
        </section>
      
    );
  }
  
  export default WelcomePage;