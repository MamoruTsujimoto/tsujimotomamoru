import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { MenuFlagContext } from 'components/Providers/MenuFlagProvider'
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

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
        <Main className={`${loading ? '' : 'in'}${openMenu ? 'blur' : ''}`}>{children}</Main>
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
  display: grid;
  grid:
    'header' 86px
    'main' 1fr
    'footer' 82.5px
    / 1fr;
  gap: 8px;
  height: 100vh;
  transition: 0.3s ease-in-out;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    grid:
      'header' 55px
      'main' 1fr
      'footer' 82.5px
      / 1fr;
    gap: 5px;
  }

  &.is-open {
    overflow: hidden;
    filter: blur(3px);
    transform: translateX(-350px);

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      transform: translateX(0);
    }
  }
`

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.18, 0.06, 0.23, 1);

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    max-width: 100%;
  }

  &.in {
    transition: opacity 0.8s cubic-bezier(0.18, 0.06, 0.23, 1) 0.3s;
    opacity: 1;
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
