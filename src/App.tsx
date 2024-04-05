import { block } from 'million/react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import styled, { StyledComponent } from 'styled-components'
import { Contact, Hero, Navbar, About, Works, MatrixLoader, Footer } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    return (
      <BrowserRouter>
        <StyledApp>
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Contact />
          <Footer />
          <Toaster />
          <MatrixLoader />
        </StyledApp>
      </BrowserRouter>
    )
  },
  { as: 'div' },
)

const StyledApp: StyledComponent<'div', any, {}, never> = styled.div`
  background: #141e30c0 !important;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab) !important;
  background: linear-gradient(to right, #243b55ab, #141e30ab) !important;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default AppBlock