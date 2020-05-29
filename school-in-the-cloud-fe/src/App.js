import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import WelcomePage from './components/WelcomePageComponents/WelcomePage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const initData = {
  username: 'danb',
  forename: 'Dan',
  surname: 'Brioli',
  country: 'United States of America'
}


function App() {

  const [username, setUsername] = useState(initData.username);
  const [forename, setForename] = useState(initData.forename);
  const [surname, setSurname] = useState(initData.surname);
  const [country, setCountry] = useState(initData.country);


  return (     
      <div className="App">
          
        
          <Navbar />
          <WelcomePage/>
          <PrivateRoute path="/api/student/users" component={Dashboard}/> 


          {/* Had to manipulate this component */}
          {/* Tried this endpoint '/api/auth/login' but there was bug */}
          <Route exact path='/'>
            <StudentDashboard username={username} 
                            forename={forename} 
                            surname={surname} 
                            country={country} 
                            setUsername={setUsername}
                            setForename={setForename}
                            setSurname={setSurname}
                            setCountry={setCountry}/>
          </Route>                  
          <Footer />          
          

          
      </div>    










  );

 }


export default App;
