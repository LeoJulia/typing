import styled from 'styled-components'

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const AlignCenterFullPage = styled(AlignCenter)`
  height: 100vh;
`

export { AlignCenter, AlignCenterFullPage }
