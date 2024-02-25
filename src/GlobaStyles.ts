import { createGlobalStyle } from "styled-components";

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
