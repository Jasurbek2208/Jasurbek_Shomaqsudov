import { block } from 'million/react'
import styled from 'styled-components'

const WorksBlock = block(
  function Works() {
    return (
      <StyledWorks id='works'>
        <div className='container full-h'>Works</div>
      </StyledWorks>
    )
  },
  { as: 'section' },
)

const StyledWorks = styled.section`
  scroll-snap-align: center;
  height: 100dvh;
`

export default WorksBlock