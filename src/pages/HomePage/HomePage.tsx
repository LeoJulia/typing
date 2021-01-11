import React, { FunctionComponent } from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { AlignCenterFullPage } from 'components/AlignCenter.styles'

const HomePage: FunctionComponent = () => {
  const history = useHistory()

  return (
    <AlignCenterFullPage>
      <div>Home</div>
      <Button type='primary' onClick={() => history.push('/typing')}>
        Start
      </Button>
    </AlignCenterFullPage>
  )
}

export { HomePage }
