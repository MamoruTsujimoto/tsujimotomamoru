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
  opacity: 0;
  animation: fade 3s ease-in forwards;
  background: #000;
  z-index: 100;

  @keyframes fade {
    0% {
      opacity: 1;
    }

    // 50% {
    //   opacity: 0;
    // }

    100% {
      opacity: 0;
    }

    // 0%,
    // 100% {
    //   opacity: 1;
    // }
    // 50% {
    //   opacity: 0;
    // }
  }
`

export default Loading
