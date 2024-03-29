import { block } from 'million/react'
import styled, { StyledComponent } from 'styled-components'

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

const StyledWorks: StyledComponent<'section', any, {}, never> = styled.section``

export default WorksBlock