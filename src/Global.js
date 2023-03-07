import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root{
        --primary: #fff;
        --secondary: #000;
        --toggle: #fff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        text-decoration: none;
        color: var(--secondary);
    }

    body{
        font-family: 'Bitter', serif;
        
    }
`;
