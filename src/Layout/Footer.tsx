import styled from '@emotion/styled'

import config from 'utils/config'

const Footer = () => {
  return (
    <Root>
      <p>&copy; {config.info.siteName}. All rights reserved.</p>
    </Root>
  )
}

export default Footer

const Root = styled.footer`
  grid-area: footer;
  text-align: center;

  p {
    padding: 1rem;
    font-size: 1.2rem;
  }
`
