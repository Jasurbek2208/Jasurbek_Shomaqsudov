import React from "react";

// Global Styles
import { GlobalStyles } from "./assets/style/Global";

// Components
import Who from "./components/Who/Who";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
