import React, {useState} from "react"
import { DropdownWrapper, Nav, CloseIcon, List, DropDownLink } from "./DropdownElements"

export const DropdownNav = ({isOpen, toggle}) => {

    return(
        <DropdownWrapper isOpen={isOpen} onClick={toggle}>
            <Nav onClick={toggle}>
                <CloseIcon/>
            </Nav>
                <List>
                <DropDownLink to="/" onClick={toggle}>About Me</DropDownLink>
                <DropDownLink to="/" onClick={toggle}>Work</DropDownLink>
                <DropDownLink to="/" onClick={toggle}>Resume</DropDownLink>
                <DropDownLink to="/" onClick={toggle}>Home</DropDownLink>
                </List>
        </DropdownWrapper>
    )
}