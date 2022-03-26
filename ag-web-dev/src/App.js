import React, {useState} from 'react';
import './App.css';
// import { DropdownNav } from './Components/DropdownNav';
// import { NavBar } from './Components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import {Home} from './pages/index'
function App(){
  return (
    <Router>
      <Home/>
      </Router>

  );
}

export default App;
