import styled from "styled-components";

export const LocalGrid = styled.div`
display: grid;
color: white;
grid-template-areas: ${({svgfirst}) => (svgfirst ? `"svg svg header header" "content content content content"` : `"content content content content" "svg svg header header"`)};

// grid-template-areas: 
// "col1 col1 col2 col2"
// "col3 col3 col3 col3";
grid-template-columns: repeat (4, 1fr);
grid-template-rows: repeat (4, 1fr);
`

export const Column1 = styled.div`
grid-area: svg;
background: red;
justify-content: center;
display: grid;
text-align: center
`

export const Column2 = styled.div`
grid-area: header;
background: blue;
justify-content: center;
display: grid;
text-align: center
`
export const Column3 = styled.div`
grid-area: content;
background: blue;
justify-content: center;
display: grid;
text-align: center
`

export const ImageDiv= styled.div`
display: flex;
width: 100%;
padding: 10px;
margin-right: 5px;
height: 100%;
min-height: 100px;
justify-content: center;
align-items: center'
border-radius: 8px;
`

export const Svg=styled.img`
width: 100%;
margin: 0;`