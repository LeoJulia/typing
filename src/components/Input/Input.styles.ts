import styled from 'styled-components'

interface InputInterface {
  value: string
  isError?: boolean
}

export const StyledInput = styled.input<InputInterface>`
  box-sizing: border-box;
  outline: none;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ isError }) => (isError ? 'red' : 'black')};
  padding: 5px;
  width: inherit;
`
