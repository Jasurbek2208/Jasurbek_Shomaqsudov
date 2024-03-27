import { block } from 'million/react'
import styled from 'styled-components'

// Toast
import { Toaster } from 'react-hot-toast'

// Global Styles
import { GlobalStyles } from 'assets/style/Global'

// Components
import { Contact, Hero, Navbar, About, Works } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    return (
      <StyledApp>
        <GlobalStyles />
        <Toaster />
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
      </StyledApp>
    )
  },
  { as: 'div' },
)

const StyledApp = styled.div`
  height: 100dvh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);

  &::-webkit-scrollbar {
    display: none;
  }
`

export default AppBlock