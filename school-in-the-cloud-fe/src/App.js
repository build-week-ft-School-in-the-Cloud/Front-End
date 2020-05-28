import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePageComponents/WelcomePage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (     
      <div className="App">     
          <WelcomePage />
          <PrivateRoute path="/api/student/users" component={Dashboard}/>
      </div>
    
  );
}

export default App;
