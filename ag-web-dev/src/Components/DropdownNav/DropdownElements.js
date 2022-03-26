import styled from "styled-components";
import {Link} from 'react-router-dom'

export const DropdownWrapper = styled.div`
@media screen and (max-width: 960px) {
  transition: 400ms all ease;
  width: 100%;
  background: black;
  position: fixed;
  top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat (4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  // grid-gap: 10px;
  grid-template-areas:
  ". . . ."
  ". list list ."
  ". list list ."
  ". list list ."
  ". . . .";
  opacity: ${({ isOpen })=> (isOpen ? '100%' : '0')};
  z-index: 999;
}
  `

export const Nav = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  justify-content: center;
  text-align: center;
  padding: 15px;
  color: white;
`

export const CloseIcon = styled.button`
display: block;
line-height: 80px; 
position: absolute;
top: 0;
right: 0;
color: white;
padding: 30px;
font-size: 100px;
cursor: pointer
`

export const List = styled.div`
  grid-area: list;
//   background: red;
  justify-content: center;
  // padding: 30px;
  display: grid;
  grid-gap: 10px;
`

export const DropDownLink = styled(Link)`
text-decoration: none;
color: white;
display: flex;
padding: 30px;
font-size: 24px;

&:hover {
  color: blue;
  transition: 200 ease-in-out;
}
`

