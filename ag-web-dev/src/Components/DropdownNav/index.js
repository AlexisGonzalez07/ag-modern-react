import React, { useState } from "react";
import {
  DropdownWrapper,
  Nav,
  List,
  DropDownLink,
} from "./DropdownElements";
import { MdCloseFullscreen } from "react-icons/md";
export const DropdownNav = ({ isOpen, toggle }) => {
  return (
    <DropdownWrapper isOpen={isOpen} onClick={toggle}>
      <Nav onClick={toggle}>
        <MdCloseFullscreen  onClick={toggle}/>
      </Nav>
      <List>
        <DropDownLink to="/" onClick={toggle}>
          Home
        </DropDownLink>
        <DropDownLink to="aboutme" onClick={toggle}>
          About Me
        </DropDownLink>
        <DropDownLink to="education" onClick={toggle}>
          Education
        </DropDownLink>
        <DropDownLink to="projects" onClick={toggle}>
          Coding Projects
        </DropDownLink>
      </List>
    </DropdownWrapper>
  );
};
