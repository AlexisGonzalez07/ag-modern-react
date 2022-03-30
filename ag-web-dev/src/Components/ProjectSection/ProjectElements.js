import styled from "styled-components";

export const ProjectWrapper = styled.div`
background-color: #923cb5;
background-image: linear-gradient(to right, #222222,#080808,#04001E);
display: flex;
width: 100%;
min-height: 400px;
height: auto;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px 10px;

/* Large smartphones */
@media screen and (max-width: 768px) {
    background-image: linear-gradient(to right, #222222,#080808,#222222);
}

/* Small smartphones */
@media screen and (max-width: 576px) {
    background-image: linear-gradient(to right, #222222,#080808,#04001E);
}

`