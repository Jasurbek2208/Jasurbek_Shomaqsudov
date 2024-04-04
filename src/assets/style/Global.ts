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
  margin: 0 auto; 
  padding: 0px 16px;
  max-width: 1200px;
}
.full-h {
  height: 100dvh;
}
body {
  height: 100%;
  min-height: 100dvh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
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