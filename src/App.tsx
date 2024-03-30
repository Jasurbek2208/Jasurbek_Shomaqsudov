import { useRef } from 'react'
import { block } from 'million/react'
import styled, { StyledComponent } from 'styled-components'

// Smooth Scrollbar
import { Scrollbar } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar'

// Toast
import { Toaster } from 'react-hot-toast'

// Global Styles
import { GlobalStyles } from 'assets/style/Global'

// Components
import { Contact, Hero, Navbar, About, Works, MatrixLoader } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    const scrollbar = useRef<BaseScrollbar | null>(null)

    return (
      <StyledApp>
        <MatrixLoader />
        <GlobalStyles />
        <Toaster />
        <Scrollbar
          ref={scrollbar}
          plugins={{
            overScroll: {
              effect: 'bounce',
            } as any,
          }}>
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Contact />
        </Scrollbar>
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
