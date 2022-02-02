import { useContext } from 'react'
import styled from '@emotion/styled'

import { MenuFlagContext } from 'components/providers/MenuFlagProvider'
import Menu from 'components/Menu'

import styles from 'utils/styles'
import Header from 'Layout/Header'
import Footer from 'Layout/Footer'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { openMenu } = useContext(MenuFlagContext)

  return (
    <Root>
      <div id='global-wrapper' className={openMenu ? 'is-open' : ''}>
        <Header />
        <Main className={openMenu ? 'blur' : ''}>{children}</Main>
        <Footer />
      </div>
      <Menu />
    </Root>
  )
}

export default Layout

const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media #{$small} {
    max-width: 100%;
  }

  &.scale {
    .entries {
      transition: 1s ease-in-out;
      transform: scale(0.9);
      filter: blur(4px);
    }

    &:before {
      filter: blur(4px);
    }
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  background-color: #fff;
  z-index: 2;
  will-change: auto;

  @media (max-width: ${styles.sizes.breakpoint.small}px) {
    width: 100%;
  }
`
