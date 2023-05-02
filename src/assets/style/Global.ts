import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

.container { 
    padding: 0px 16px;
    margin: 0 auto; 
    max-width: 1200px;
}

.full-h {
    height: 100vh;
}

body {
    min-height: 100%;
    overflow: hidden;

    background: #141E30; 
    background: -webkit-linear-gradient(to right, #243B55, #141E30); 
    background: linear-gradient(to right, #243B55, #141E30); 
}
`;
