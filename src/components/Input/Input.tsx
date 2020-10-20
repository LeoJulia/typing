import React, { FunctionComponent, useState } from 'react'

import { StyledInput } from './styles'

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
  const [value, setValue] = useState(val)

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value === ' ') {
      setValue('')
    } else {
      setValue(target.value)
    }

    onChange(target.value)
  }

  return (
    <StyledInput onChange={changeHandler} value={value} isError={isError} />
  )
}

export { Input }
