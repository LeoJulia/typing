import React, { FunctionComponent, useState } from 'react'

interface InputProps {
  onInput?: (value: string) => void;
  val?: string;
}

const Input: FunctionComponent<InputProps> = ({
  onInput = () => {},
  val = '',
}) => {
  const [value, setValue] = useState(val)

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onInput(target.value)
    setValue(target.value)
  }

  return <input onInput={inputHandler} value={value} />
}

export { Input }
