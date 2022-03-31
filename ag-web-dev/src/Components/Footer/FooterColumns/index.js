import React from "react";
import { ColumnWrapper, IconHolder, IconSubtitle, Img } from "./ColumnElements";

export const FooterColumn = ({ src, alt, subtitle, position }) => {
  return (
    <ColumnWrapper position={position}>
      <IconHolder>
        <Img src={src} alt={alt} style={{fill: 'white'}}/>
      </IconHolder>
      <IconSubtitle>{subtitle}</IconSubtitle>
    </ColumnWrapper>
  );
};
