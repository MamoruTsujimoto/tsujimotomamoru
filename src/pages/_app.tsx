import type { AppProps } from 'next/app'

import { MenuFlagProvider } from 'components/Providers/MenuFlagProvider'

import { usePageView, GoogleAnalytics } from 'lib/gtag'

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
