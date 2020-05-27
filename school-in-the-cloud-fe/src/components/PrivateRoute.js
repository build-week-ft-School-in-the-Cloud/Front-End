import React from 'react';
import {Route, Redirect} from 'react-router-dom';




//It has to have the same API as <Route/>
//It renders a <Route> and pass all the props through it
// it checks if user is authenticated, if they are it will render 
//the component
//passed it otherwise it will reroute to login page

const PrivateRoute = ({component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <Route {...rest}
     render={() => {
      if(token) {
        //render component
       return <Component/>
        
      } else {
        //redirect to login page
        return <Redirect to="/" />
      }
    }} />

  )
}

export default PrivateRoute;
