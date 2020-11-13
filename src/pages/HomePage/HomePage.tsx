import React, { FunctionComponent } from 'react'
import { Button } from 'components'
import { useHistory } from 'react-router-dom'

const HomePage: FunctionComponent = () => {
  const history = useHistory()

  return (
    <>
      <div>Home</div>
      <Button text='Start' onClick={() => history.push('/typing')} />
    </>
  )
}

export { HomePage }
