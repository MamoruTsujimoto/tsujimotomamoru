import { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { MenuFlagContext } from 'components/providers/MenuFlagProvider'

import config from 'utils/config'
import styles from 'utils/styles'

const Header = () => {
  const { openMenu, setOpenMenu } = useContext(MenuFlagContext)

  const onClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Root>
      <Welcome>
        <h1>
          <Link href='/'>{config.info.siteNameFirst}</Link>
          <Link href='/profile' passHref>
            <a>
              <strong>{config.info.siteNameSecond}</strong>
            </a>
          </Link>
        </h1>
        <div id='menu-trigger' className={openMenu ? 'is-open' : ''} onClick={onClickMenu}>
          <span></span>
        </div>
      </Welcome>
    </Root>
  )
}

export default Header

const Root = styled.header`
  position: relative;
  border-bottom: 1px solid #d0d0d4;
  background: #fff;
  z-index: 1;

  @media #{$small} {
    border-bottom: none;
  }
`

const Welcome = styled.div`
  position: relative;
  padding: 22px 20px 20px;

  h1 {
    position: relative;
    display: inline-block;
    font-family: 'Metrophobic', serif;

    ${styles.mixins.fontSize(12, 12)}

    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
`
