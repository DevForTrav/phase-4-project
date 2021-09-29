import './App.css';
import React, { useState } from "react";
import Login from './components/Login';
import Logout from './components/Logout';
import UserPage from './components/UserPage';

function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(true)

  if (!isLoggedIn) return <Login loggedIn={setIsLoggedIn} />

  return (
    <div>
      <Logout loggedIn={setIsLoggedIn} />
      <UserPage loggedIn={setIsLoggedIn}/>
    </div>
  );
}

export default App;
