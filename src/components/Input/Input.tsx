import React, { FunctionComponent, useState } from 'react'

import {StyledInput} from './styles'

interface InputProps {
  onInput?: (value: string) => void;
  val?: string;
  isError?: boolean;
}

const Input: FunctionComponent<InputProps> = ({
  onInput = () => {},
  val = '',
  isError,
}) => {
  const [value, setValue] = useState(val)

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onInput(target.value)
    setValue(target.value)
  }

  return <StyledInput 
    onInput={inputHandler}
    value={value}
    isError={isError}
  />
}

export { Input }
