import React, { FunctionComponent, useEffect, useState } from 'react'
import { Input } from 'components'

import { ActiveText, AppContainer, DisabledText } from './TypingPage.style'

const textString = 'Text text text'

const TypingPage: FunctionComponent = () => {
  const [disabledText, setDisabledText] = useState('')
  const [activeText, setActiveText] = useState(textString[0])
  const [text, setText] = useState(textString.slice(1))

  const [status, setStatus] = useState('progress')
  
  useEffect(() => {
    const onTyping: (e: KeyboardEvent) => void = ({ key }) => {
      if (key === activeText) {
        setStatus('progress')
  
        setDisabledText((prevText) => prevText + activeText)
        setActiveText(text.length ? text.slice(0, 1) : '')
        setText((prevText) => prevText.length ? prevText.slice(1) : '')
      } 
      
      if (key !== activeText) {
        setStatus('error')
      }
      
      if (!text) {
        setStatus('finish')
      }
    }

    window.addEventListener('keypress', onTyping)

    return () => {
        window.removeEventListener('keypress', onTyping)
    }
  }, [activeText, text])

  return (
    <AppContainer>
      <div>
        <DisabledText>{disabledText}</DisabledText>
        <ActiveText>{activeText}</ActiveText>
        {text}
      </div>
      <Input />
      {status}
    </AppContainer>
  )
}

export { TypingPage }
