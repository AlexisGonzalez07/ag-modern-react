import React from "react";
import {MdMenu} from 'react-icons/md'
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn, NavIconBox } from "./NavElements";
export const NavBar = ({toggle}) => {
  return (
    <Nav>
    <NavBarContainer>
      <NavLogo to='/Home'>AG FullStack</NavLogo>
      <NavMenu>
        <NavLink to='/AboutMe'>
          About Me
        </NavLink>
        <NavLink to='/Education'>
          Education
        </NavLink>
        <NavLink to='/Projects'>
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
