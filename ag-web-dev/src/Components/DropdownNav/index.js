import React, {useState} from "react"
import { DropdownWrapper, Nav, CloseIcon, List, Link } from "./DropdownElements"

export const DropdownNav = () => {

    return(
        <DropdownWrapper>
            <Nav>
                <CloseIcon/>
            </Nav>
                <List>
                    <Link>1</Link>
                    <Link>1</Link>
                    <Link>1</Link>
                    <Link>1</Link>
                </List>
        </DropdownWrapper>
    )
}