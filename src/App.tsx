import { Suspense, useEffect } from 'react'
import styled from 'styled-components'
import { block } from 'million/react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

// Helpers
import handleKeyDown from 'helpers/handleKeyDown'

// Components
import { Contact, Hero, Navbar, Works, MatrixLoader, Footer, About } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    // Disabling dev elements
    useEffect(() => {
      window?.addEventListener('keydown', handleKeyDown)
      window?.addEventListener('contextmenu', (e) => e?.preventDefault())

      return () => {
        window?.removeEventListener('keydown', handleKeyDown)
        window?.removeEventListener('contextmenu', (e) => e?.preventDefault())
      }
    }, [])

    return (
      <Suspense>
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
      </Suspense>
    )
  },
  { as: 'div' },
)

const StyledApp = styled.div`
  background: #141e30c0 !important;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab) !important;
  background: linear-gradient(to right, #243b55ab, #141e30ab) !important;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default AppBlock