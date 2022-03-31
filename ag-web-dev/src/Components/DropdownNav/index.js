import React, { useState } from "react";
import {
  DropdownWrapper,
  Nav,
  CloseIcon,
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
        <DropDownLink to="/Home" onClick={toggle}>
          Home
        </DropDownLink>
        <DropDownLink to="/AboutMe" onClick={toggle}>
          About Me
        </DropDownLink>
        <DropDownLink to="/Education" onClick={toggle}>
          Education
        </DropDownLink>
        <DropDownLink to="/Projects" onClick={toggle}>
          Coding Projects
        </DropDownLink>
      </List>
    </DropdownWrapper>
  );
};
