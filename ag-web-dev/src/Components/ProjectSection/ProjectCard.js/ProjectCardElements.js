import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: row;
max-width: 1400px;
min-width: 800px;
height: auto;
justify-content: center;
align-items: center;
padding: 8px;
background-color: #923cb5;
background-image: linear-gradient(to right, #5B3EA1, #26226F,#04001E);
border-radius: 20px;
`

export const ImageWrapper = styled.div`
display: flex;
width: auto;
min-width: 30%;
padding: 5px;
margin-right: 5px;
border-radius: 8px;
height: 100%;
min-height: 150px;
// background: black;
justify-content: center;
align-items: center`

export const Image =styled.img`
width: 100%;
margin: 0;
padding-right:0;
border-radius: 2px;`

export const DescriptionWrapper = styled.div`
display: flex;
width: 100%;
padding: 5px;
border-radius: 8px;
height: 100%;
min-height:150px;
// background: blue;
justify-content: center;
align-items: center`

export const BulletList = styled.ul`
text-align: left;
color: white; 
padding: 8px;
list-style-type: disc;
margin-left:15px;
`
export const BulletPoint =styled.li`
text-align: left;
list-style-type: disc;
color: white;
font-size: 18px;
margin-top: px;
`