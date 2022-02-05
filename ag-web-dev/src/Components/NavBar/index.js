import React from "react";
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn } from "./NavElements";
export const NavBar = () => {
  return (
    <Nav>
    <NavBarContainer>
      <NavLogo>Ag FullStack</NavLogo>
      <NavMenu>
        <NavLink>
          Brand
        </NavLink>
        <NavLink>
          About Me
        </NavLink>
        <NavLink>
          Projects
        </NavLink>
      </NavMenu>
      <ResumeWrapper>
        <ResumeBtn>Resume</ResumeBtn>
      </ResumeWrapper>
      {/* <NavMenuIcon/> */}
    </NavBarContainer>
    </Nav>
  );
};
