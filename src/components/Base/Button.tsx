import styled from '@emotion/styled'
import styles from 'utils/styles'

type Props = {
  children: React.ReactNode
}

export const Button = ({ children }: Props) => {
  return <Root>{children}</Root>
}

const Root = styled.div`
  width: 200px;
  margin: 0 auto 50px;
  border: 1px solid #000;
  text-align: center;
  ${styles.mixins.fontSize(14, 14)}

  a {
    display: block;
    padding: 8px;
    transition: color 200ms 0s ease, background-color 200ms 0s ease;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`

export default Button
