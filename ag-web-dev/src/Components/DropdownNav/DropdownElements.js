import styled from 'styled-components'

export const DropdownWrapper=styled.div`
    background: blue;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat (4,1fr);
    grid-auto-rows: minmax(100px, auto);
    // grid-gap: 10px;
    grid-template-areas: 
    ". . . nav"
    ". . . ."
    ". list list ."
    ". list list ."
    ". list list ."
    ". . . .";
    z-index: 999;
`

export const Nav=styled.div`
grid-area: nav;
background: gray;
// padding: 30px
`

export const CloseIcon=styled.button`
padding:0;
margin:0;
justify-content: center;
font-size: 24px;`

export const List= styled.div`
grid-area: list;
background: red;
justify-content: center;
// padding: 30px;
display: grid;
grid-gap: 10px
`

export const Link=styled.p`
    color: pink;
    background: gray;
    padding: 30px
`