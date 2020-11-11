import React, { FunctionComponent, useState } from 'react'
import { Input } from 'components'

import {
  ActiveText,
  AppContainer,
  DisabledText,
  TypingForm,
} from './TypingPage.style'

const textString = 'Text text text'

const punctuationRegEx = /[.!?\s]/

const TypingPage: FunctionComponent = () => {
  const [disabledText, setDisabledText] = useState('')
  const [activeText, setActiveText] = useState(textString[0])
  const [text, setText] = useState(textString.slice(1))
  const [value, setValue] = useState('')

  const [status, setStatus] = useState('progress')

  const inputHandler = (typedText: string) => {
    const hasPunctuation = punctuationRegEx.test(typedText)
    const isError = status === 'error'

    if (hasPunctuation && !isError) {
      setValue('')
    } else {
      setValue(typedText)
    }

    if (typedText[typedText.length - 1] === activeText) {
      setStatus('progress')

      setDisabledText((prevText) => prevText + activeText)
      setActiveText(text.length ? text.slice(0, 1) : '')
      setText((prevText) => (prevText.length ? prevText.slice(1) : ''))
    } else {
      setStatus('error')
    }

    if (!text) {
      setStatus('finish')
    }
  }

  return (
    <AppContainer>
      <TypingForm>
        <div>
          <DisabledText>{disabledText}</DisabledText>
          <ActiveText>{activeText}</ActiveText>
          {text}
        </div>
        <Input
          val={value}
          onChange={inputHandler}
          isError={status === 'error'}
        />
        <div>{`Status: ${status}`}</div>
      </TypingForm>
    </AppContainer>
  )
}

export { TypingPage }
