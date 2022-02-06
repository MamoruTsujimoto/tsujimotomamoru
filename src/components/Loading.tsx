//import { useContext } from 'react'
import styled from '@emotion/styled'

// import { MenuFlagContext } from 'components/Providers/MenuFlagProvider'
// import styles from 'utils/styles'

const Loading = () => {
  //const { openMenu, setOpenMenu } = useContext(MenuFlagContext)

  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 1;
  transition: opacity 500ms 0s ease;
  background: #000;
  z-index: 100;
`

export default Loading
