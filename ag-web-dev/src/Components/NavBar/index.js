import React from "react";
import {MdMenu} from 'react-icons/md'
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn, NavIconBox } from "./NavElements";
import { Button } from "../ButtonElement";
export const NavBar = ({toggle}) => {
  return (
    <Nav>
    <NavBarContainer>
      <NavLogo to='/'>Ag FullStack</NavLogo>
      <NavMenu>
        <NavLink to='/Home'>
          Home
        </NavLink>
        <NavLink to='/AboutMe'>
          About Me
        </NavLink>
        <NavLink to='/Work'>
          Work
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
