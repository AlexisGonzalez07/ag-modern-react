import React from "react";
import {MdMenu} from 'react-icons/md'
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn, NavIconBox } from "./NavElements";
export const NavBar = () => {
  return (
    <Nav>
    <NavBarContainer>
      <NavLogo>Ag FullStack</NavLogo>
      <NavMenu>
        <NavLink to='brand'>
          Brand
        </NavLink>
        <NavLink to='about'>
          About Me
        </NavLink>
        <NavLink to='projects'>
          Projects
        </NavLink>
      </NavMenu>
      <ResumeWrapper>
        <ResumeBtn>Resume</ResumeBtn>
      </ResumeWrapper>
      <NavIconBox>
        <MdMenu/>
      </NavIconBox>
    </NavBarContainer>
    </Nav>
  );
};
