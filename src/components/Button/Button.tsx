import React, { FunctionComponent } from 'react'

import { ButtonInput } from './Button.styles'

interface IButtonProps {
  text: string
  onClick: () => void
}

const Button: FunctionComponent<IButtonProps> = ({ text, onClick }) => (
  <ButtonInput type='button' value={text} onClick={onClick} />
)

export { Button }
