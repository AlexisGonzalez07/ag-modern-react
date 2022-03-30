import styled from "styled-components";

export const LocalGrid = styled.div`
display: grid;
color: white;
grid-template-areas: 
"col1 col1 col2 col2"
"col3 col3 col3 col3";
grid-template-columns: repeat (4, 1fr);
grid-template-rows: repeat (4, 1fr);
`

export const Column1 = styled.div`
grid-area: col1;
background: red;
justify-content: center;
display: grid;
text-align: center
`

export const Column2 = styled.div`
grid-area: col2;
background: blue;
justify-content: center;
display: grid;
text-align: center
`
export const Column3 = styled.div`
grid-area: col3;
background: blue;
justify-content: center;
display: grid;
text-align: center
`