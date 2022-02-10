import React, {useState} from "react"
import { DropdownWrapper, Nav, CloseIcon, List, DropDownLink } from "./DropdownElements"

export const DropdownNav = () => {

    return(
        <DropdownWrapper>
            <Nav>
                <CloseIcon/>
            </Nav>
                <List>
                <DropDownLink to="/">About Me</DropDownLink>
                <DropDownLink to="/">Work</DropDownLink>
                <DropDownLink to="/">Resume</DropDownLink>
                <DropDownLink to="/">Home</DropDownLink>
                </List>
        </DropdownWrapper>
    )
}