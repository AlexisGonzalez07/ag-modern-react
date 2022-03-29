import styled from "styled-components";

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
z-index: 999
`
export const ProjectWrapper = styled.div`
background: black;
display: flex;
width: 100%;
min-height: 800px;
height: auto;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ProjectCard = styled.div`
display: flex;
flex-direction: row;
max-width: 1300px;
min-width: 800px;
min-height: 200px;
height: auto;
justify-content: center;
align-items: center;
padding: 20px 0;
`

export const ImageWrapper = styled.div`
display: flex;
width: auto;
max-width: 400px;
padding: 5px;
border-radius: 3px;
height: auto;
background: green;
justify-content: center;
align-items: center`

export const DescriptionWrapper = styled.div`
display: column;
width: 100%;
padding: 5px;
height: 100%;
background: blue;
justify-content: center;
align-items: center`