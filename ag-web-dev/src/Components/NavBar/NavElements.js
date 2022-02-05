import styled from 'styled-components'
import {MdMenu} from 'react-icons/md'
export const Nav = styled.nav`
background: #000;
position: fixed;
top: 0; 
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap; 
width: 100%; 
height: 80px;
text-align: center;

`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: nowrap; 
width: 1300px;
// width: minmax(1200px, 100%); 
height: 80px;
text-align: center;
padding: 0 25px;

@media screen and (max-width: 960px) {
    transition: 400ms all ease;
    width: 100%;
}
`

export const NavLogo = styled.div`
justify-content: flex-start;
color: white; 
line-height: 80px;
cursor: pointer;
display: flex;
`

export const NavMenu =styled.div`
justify-content: center;
line-height: 80px;
display: show;

@media screen and (max-width: 960px){
    display: none;
}

`

export const NavLink =styled.a`
text-decoration: none;
color: white;
cursor: pointer;
padding: 20px;

& .active {
    border-bottom: 2px solid white;
}
`

export const ResumeWrapper = styled.div`
justify-content: flex-end;
line-height: 80px;
@media screen and (max-width: 960px){
    display: none;
}
`

export const ResumeBtn = styled.button`
background: none;
padding: 0 0;
margin: 0 0;
color: white;
cursor: pointer;
`

export const NavIconBox = styled.div `
display: none;

@media screen and (max-width: 960px){
    display: block;
    line-height: 80px; 
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding-right: 30px;
    font-size: 30px;
    cursor: pointer
}`