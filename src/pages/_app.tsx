import type { AppProps } from 'next/app'

import { usePageView, GoogleAnalytics } from 'lib/gtag'
import 'styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
