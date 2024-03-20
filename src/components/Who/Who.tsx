import styled from 'styled-components'

export default function Who() {
  return (
    <StyledWho id='who'>
      <div className='container full-h'>Who</div>
    </StyledWho>
  )
}

const StyledWho = styled.section`
  scroll-snap-align: center;
`