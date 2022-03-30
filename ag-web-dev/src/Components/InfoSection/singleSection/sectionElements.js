import styled from "styled-components";

export const LocalGrid = styled.div`
  display: grid;
  color: white;
  min-height: 500px;
  min-width: 1000px;
  max-width: 1200px;
  background-color: #923cb5;
  background-image: ${({ svgfirst }) =>
    svgfirst
      ? "linear-gradient(to left, #04001e, #26226f 25%, #04001e)"
      : "linear-gradient(to right, #04001e, #26226f 25%, #04001e)"};
  grid-template-areas: ${({ svgfirst }) =>
    svgfirst
      ? `"svg svg  header header header header" "svg svg content content content content"`
      : `"header header header header svg svg" "content content content content svg svg"`};
  grid-template-columns: repeat (6, 1fr);
  grid-template-rows: repeat (6, 1fr);
`;

export const ImageSection = styled.div`
  grid-area: svg;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  display: flex;
  text-align: center;
`;

export const HeaderSection = styled.div`
  grid-area: header;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
`;
export const ContentSection = styled.div`
  grid-area: content;
  justify-content: center;
  display: flex;
  text-align: center;
  width: 80%;
`;

export const ImageDiv = styled.div`
display: flex;
width: 80%;
padding: 10px;
margin-left: 5px;
height: 100%;
min-height: 100px;
justify-content: center;
align-items: center'
border-radius: 8px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  //   border-radius: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 30px;
  align-items: center;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  width: 75%;
  padding: 5px;
  border-radius: 8px;
  height: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.p`
  font-size: 15px;
  align-items: center;
`;
