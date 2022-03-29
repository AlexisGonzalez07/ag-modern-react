import React, {useState} from "react";
import {DropdownNav} from '../Components/DropdownNav/index'
import {NavBar} from '../Components/NavBar'
import { MainSection } from "../Components/MainSection";

export const Home = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => {
          setIsOpen(!isOpen)
        }
  return (
    <>
      <DropdownNav isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} />
      <MainSection/>
    </>
  );
};

// export default Home
