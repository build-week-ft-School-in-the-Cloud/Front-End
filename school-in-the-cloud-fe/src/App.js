import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';

// Initialize some user data to work with due to back end issues
const initData = {
  username: 'danb',
  forename: 'Dan',
  surname: 'Brioli',
  country: 'United States of America'
}

function App() {

  // Replace this with data from back end when connected properly
  const [username, setUsername] = useState(initData.username);
  const [forename, setForename] = useState(initData.forename);
  const [surname, setSurname] = useState(initData.surname);
  const [country, setCountry] = useState(initData.country);

  return (

    <div className="app-container">
      <Router>
        <Navbar />
        <StudentDashboard username={username} 
                          forename={forename} 
                          surname={surname} 
                          country={country} 
                          setUsername={setUsername}
                          setForename={setForename}
                          setSurname={setSurname}
                          setCountry={setCountry}/>
        <Footer />
      </Router>
    </div>

  );

}

export default App;
