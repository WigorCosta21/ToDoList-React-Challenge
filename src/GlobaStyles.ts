import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Josefin Sans", sans-serif;
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.bgPrimary};
    }
`;

export const Container = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;
