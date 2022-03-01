import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { MenuFlagContext } from 'components/providers/MenuFlagProvider'
import Menu from 'components/Menu/Menu'

import styles from 'utils/styles'
import Header from 'Layout/Header'
import Footer from 'Layout/Footer'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { openMenu, setOpenMenu } = useContext(MenuFlagContext)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if (openMenu) setOpenMenu(!openMenu)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  })

  return (
    <Root>
      <Wrapper className={openMenu ? 'is-open' : ''}>
        <Header />
        <Main className={openMenu ? 'blur' : ''}>{children}</Main>
        <Footer />
      </Wrapper>
      <Menu />
    </Root>
  )
}

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

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  transition: 0.3s ease-in-out;

  &.is-open {
    overflow: hidden;
    filter: blur(3px);
    transform: translateX(-350px);

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      transform: translateX(-100%);
    }
  }
`

const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
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

export default Layout
