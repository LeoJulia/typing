import React, { FunctionComponent, useEffect, useState } from 'react';

interface InputProps {
  onInput?: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ onInput = () => {} }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onInput(value);
  }, [onInput, value]);

  return (
    <input
      onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setValue(target.value)
      }
      value={value}
    />
  );
};

export { Input };
