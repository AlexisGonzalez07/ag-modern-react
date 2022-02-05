import styled from "styled-components";

export const DropdownWrapper = styled.div`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat (4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  // grid-gap: 10px;
  grid-template-areas:
  ". . . nav"
  ". . . ."
  ". list list ."
  ". list list ."
  ". list list ."
  ". . . .";
  opacity: 96%;
  z-index: 999;
`

export const Nav = styled.div`
  grid-area: nav;
  background: gray;
  justify-content: center;
  // text-align: center;
  // padding: 30px
`

export const CloseIcon = styled.button`
  padding: 0;
  margin: 0;
  font-size: 24px;
`

export const List = styled.div`
  grid-area: list;
//   background: red;
  justify-content: center;
  // padding: 30px;
  display: grid;
  grid-gap: 10px;
`

export const Link = styled.p`
  color: white;
//   background: gray;
  padding: 30px;
  font-size: 24px
`

