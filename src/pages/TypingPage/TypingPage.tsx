import React, { FunctionComponent, useState } from 'react'
import { Input } from 'components'

import { ActiveText, AppContainer, DisabledText } from './TypingPage.style'

const textString = 'Text text text'

const TypingPage: FunctionComponent = () => {
  const [disabledText, setDisabledText] = useState('')
  const [activeText, setActiveText] = useState(textString[0])
  const [text, setText] = useState(textString.slice(1))

  const [status, setStatus] = useState('progress')

  const inputHandler = (typedText) => {
    if (disabledText + activeText === typedText) {
      setDisabledText((prevText) => prevText + activeText)
      setActiveText(text.length ? text.slice(0, 1) : '')
      setText((prevText) => (prevText.length ? prevText.slice(1) : ''))
    }

    if (disabledText + activeText !== typedText) {
      setStatus('error')
    }

    if (!text) {
      setStatus('finish')
    }
  }

  return (
    <AppContainer>
      <div>
        <DisabledText>{disabledText}</DisabledText>
        <ActiveText>{activeText}</ActiveText>
        {text}
      </div>
      <Input onChange={inputHandler} isError={status === 'error'} />
      <div>{`Status: ${status}`}</div>
    </AppContainer>
  )
}

export { TypingPage }
