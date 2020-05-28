import React, {useState} from 'react';
import './App.css';
import StudentDashboard from './components/StudentDashboard';

// Initialize some user data to work with due to back end issues
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

    <div className="app-container">
      <StudentDashboard username={username} 
                        forename={forename} 
                        surname={surname} 
                        country={country} 
                        setUsername={setUsername}
                        setForename={setForename}
                        setSurname={setSurname}
                        setCountry={setCountry}/>
    </div>

  );

}

export default App;
