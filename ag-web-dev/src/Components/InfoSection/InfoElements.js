import styled from "styled-components";

export const SectionWrapper = styled.div`
background-color: #923cb5;
background-image: linear-gradient(to left, #080808,#222222,#080808);
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  display: flex;
`;

export const SectionContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  height: auto;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(1);
  grid-gap: 20px;

  /* Tablets*/
  @media screen and (max-width: 992px) {
    max-width: 740px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
  }
`;
