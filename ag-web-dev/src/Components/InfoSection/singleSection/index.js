import React from "react";
import { LocalGrid, Column1, Column2, Column3 } from "./sectionElements";

export const SingleSection = ({
  id,
  src,
  alt,
  header,
  subtitle,
  content,
  svgfirst,
}) => {
  return (
    <LocalGrid id={id} svgfirst={svgfirst}>
      <Column1>
        <ImageDiv>
          <Svg src={src} alt={alt} />
        </ImageDiv>
      </Column1>
      <Column2>
        <MainTitle>{header}</MainTitle>
        <SubTitle>{subtitle}</SubTitle>
      </Column2>
      <Column3>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
      </Column3>
    </LocalGrid>
  );
};
