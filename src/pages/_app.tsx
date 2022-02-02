import type { AppProps } from 'next/app'

import { MenuFlagProvider } from 'components/providers/MenuFlagProvider'

import { usePageView, GoogleAnalytics } from 'lib/gtag'
import 'styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <MenuFlagProvider>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </MenuFlagProvider>
    </>
  )
}

export default MyApp
