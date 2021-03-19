import React, { useState } from 'react';
import LoginForm from './components/LoginForm'
import TodoMaker from './components/TodoMaker'
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const loginToggler = () => {
    setLoggedIn(loggedIn => !loggedIn)
  }

  return (
    <div className="App">
      {!loggedIn ? 
        <LoginForm loginToggler={loginToggler}/> 
      : 
        <TodoMaker loginToggler={loginToggler}/>  
      }
    </div>
  )
}

export default App;