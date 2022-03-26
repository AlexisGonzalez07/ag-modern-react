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
        <MdCloseFullscreen />
      </Nav>
      <List>
        <DropDownLink to="/Home" onClick={toggle}>
          Home
        </DropDownLink>
        <DropDownLink to="/AboutMe" onClick={toggle}>
          About Me
        </DropDownLink>
        <DropDownLink to="/Work" onClick={toggle}>
          Work
        </DropDownLink>
        <DropDownLink to="/" onClick={toggle}>
          Resume
        </DropDownLink>
      </List>
    </DropdownWrapper>
  );
};
