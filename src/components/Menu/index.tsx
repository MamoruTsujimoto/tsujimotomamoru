import { useContext } from 'react'
import Link from 'next/link'

import { MenuFlagContext } from 'components/providers/MenuFlagProvider'

const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(MenuFlagContext)

  const onClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div id='menu' className={openMenu ? 'is-open' : ''}>
      <div id='menu-inner'>
        <div id='close' onClick={onClickMenu}>
          <span></span>
        </div>
        <div id='menu-story'>
          <div className='widget-wrap'>
            <h3>pages</h3>
            <ul>
              <li>
                <Link href='/profile' passHref>
                  <a>profile</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
