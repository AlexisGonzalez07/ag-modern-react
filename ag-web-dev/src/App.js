import React, {useState} from 'react';
import './App.css';
import { DropdownNav } from './Components/DropdownNav';
import { NavBar } from './Components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <DropdownNav isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      </Router>

  );
}

export default App;
