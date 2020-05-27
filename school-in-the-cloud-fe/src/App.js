import React, {useState, useEffect} from 'react';
import './App.css';
import StudentDashboard from './components/StudentDashboard';

// Initialize some user data to work with due to back end issues
const initData = {
  username: 'danb',
  forename: 'Dan',
  surname: 'Brioli',
  country: 'USA'
}

function App() {

  const [userData, setUserData] = useState(initData);

  return (

    <div className="app-container">
      <StudentDashboard username={userData.username} forename={userData.forename} surname={userData.surname} country={userData.country} setUserData={setUserData}/>
    </div>
    
  );

}

export default App;
