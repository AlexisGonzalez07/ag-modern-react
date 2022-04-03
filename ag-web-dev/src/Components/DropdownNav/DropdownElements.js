import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const DropdownWrapper = styled.div`
  @media screen and (max-width: 992px) {
    transition: 400ms all ease;
    width: 100%;
    background-color: #7f5a83;
    background-image: linear-gradient(315deg, #7f5a83 0%, #26226f 50%);

    position: fixed;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat (4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    // grid-gap: 10px;
    grid-template-areas:
      ". . . ."
      ". list list ."
      ". list list ."
      ". list list ."
      ". . . .";
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    z-index: 999;
  }
`;

export const Nav = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  justify-content: center;
  text-align: center;
  padding: 15px;
  color: white;
`;

export const CloseIcon = styled.button`
  display: block;
  line-height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 30px;
  font-size: 100px;
  cursor: pointer;
`;

export const List = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    grid-area: list;
    //   background: red;
    justify-content: center;
    // padding: 30px;
    display: grid;
    grid-gap: 10px;
    text-align: center;
  }
`;

export const DropDownLink = styled(LinkScroll)`
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 30px;
  font-size: 24px;
  transition: 200 ease-in-out;



  &:hover {
    color: #B8AAB9;
    transition: 200 ease-in-out;

  }
`;
