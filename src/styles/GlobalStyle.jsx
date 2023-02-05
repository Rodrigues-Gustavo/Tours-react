import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: hsl(210, 36%, 96%);
        color:  hsl(205, 86%, 17%);
        line-height: 1.5;
        font-size: 0.875rem;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;