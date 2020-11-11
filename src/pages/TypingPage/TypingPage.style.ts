import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const TypingForm = styled.div`
  padding: 10px;
  width: 30vw;
  overflow-wrap: break-word;

  & div:first-child {
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 5px;
  }
`

const DisabledText = styled.span`
  color: gray;
`

const ActiveText = styled.span`
  color: blue;
`

export { ActiveText, AppContainer, DisabledText, TypingForm }
