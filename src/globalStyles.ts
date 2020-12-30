import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
    }

    a{
        text-decoration: none;
        color: unset;
    }
`;
 
export default GlobalStyle;