import { block } from 'million/react'
import { BrowserRouter } from 'react-router-dom'
import styled, { StyledComponent } from 'styled-components'

// Toast
import { Toaster } from 'react-hot-toast'

// Global Styles
import { GlobalStyles } from 'assets/style/Global'

// Components
import { Contact, Hero, Navbar, About, Works, MatrixLoader } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    return (
      <StyledApp>
        <BrowserRouter>
          <MatrixLoader />
          <GlobalStyles />
          <Toaster />
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Contact />
        </BrowserRouter>
      </StyledApp>
    )
  },
  { as: 'div' },
)

const StyledApp: StyledComponent<'div', any, {}, never> = styled.div`
  height: 100%;
  min-height: 100dvh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  background: #141e30c0;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab);
  background: linear-gradient(to right, #243b55ab, #141e30ab);

  &::-webkit-scrollbar {
    display: none;
  }
`

export default AppBlock