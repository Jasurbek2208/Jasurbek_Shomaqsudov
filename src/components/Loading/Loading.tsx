import styled from 'styled-components'
export default () => <StyledLoading />

const StyledLoading = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #234179;
  width: 100%;
  height: 100%;
  animation: spin 2s linear infinite;
  -o-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`