import React, {useState} from "react"
import { DropdownWrapper, Nav, CloseIcon, List, Link } from "./DropdownElements"

export const DropdownNav = () => {

    return(
        <DropdownWrapper>
            <Nav>
                <CloseIcon/>
            </Nav>
                <List>
                    <Link>Home</Link>
                    <Link>About Me</Link>
                    <Link>Work</Link>
                    <Link>Resume</Link>
                </List>
        </DropdownWrapper>
    )
}