import React, { FunctionComponent, useState } from 'react'

import { StyledInput } from './Input.styles'

interface InputProps {
  onChange?: (value: string) => void
  val?: string
  isError?: boolean
}

const Input: FunctionComponent<InputProps> = ({
  onChange = () => {},
  val = '',
  isError,
}) => {
  const [value, setValue] = useState('')

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (val) {
      setValue(target.value)
    }

    onChange(target.value)
  }

  return (
    <StyledInput
      onChange={changeHandler}
      value={val ?? value}
      isError={isError}
    />
  )
}

export { Input }
