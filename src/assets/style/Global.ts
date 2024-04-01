import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'

import './fonts.css'
export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.container { 
    padding: 0px 16px;
    margin: 0 auto; 
    max-width: 1200px;
}

.full-h {
    height: 100dvh;
}

body {
    height: 100%;

    background: #141E30; 
    background: -webkit-linear-gradient(to right, #243B55, #141E30); 
    background: linear-gradient(to right, #243B55, #141E30); 
}

body > h1.hidden-h1-forever {
  margin: 0px !important;
  padding: 0px !important;
  display: none !important;
  font-size: 0px !important;
  font-weight: 100 !important;
  overflow: hidden !important;
  transform: scale(0) !important;
}
`