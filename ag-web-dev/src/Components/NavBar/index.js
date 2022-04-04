import React from "react";
import {MdMenu} from 'react-icons/md'
import {animateScroll as scroll} from 'react-scroll'
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn, NavIconBox } from "./NavElements";

export const NavBar = ({toggle}) => {
const toggleHome =() => {
  scroll.scrollToTop();
}

  return (
    <Nav>
    <NavBarContainer>
      <NavLogo onClick={toggleHome}>AG FullStack</NavLogo>
      <NavMenu>
        <NavLink to='aboutme' >
          About Me
        </NavLink>
        <NavLink to='education'>
          Education
        </NavLink>
        <NavLink to='projects'>
          Coding Projects
        </NavLink>
      </NavMenu>
      <ResumeWrapper>
        <ResumeBtn>Resume</ResumeBtn>
      </ResumeWrapper>
      <NavIconBox onClick={toggle}>
        <MdMenu  onClick={toggle}/>
      </NavIconBox>
    </NavBarContainer>
    </Nav>
  );
};
