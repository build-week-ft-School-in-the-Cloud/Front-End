import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePageComponents/WelcomePage';
import StudentDashboard from './components/StudentDashboard';


function App() {
  return (     
      <div className="App">     
          <WelcomePage />
          <StudentDashboard/>
      </div>
    
  );
}

export default App;
