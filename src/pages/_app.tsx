import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import { MenuFlagProvider } from 'components/Providers/MenuFlagProvider'

import { usePageView, GoogleAnalytics } from 'lib/gtag'

function MyApp({ Component, pageProps, router }: AppProps) {
  usePageView()

  return (
    <>
      <MenuFlagProvider>
        <GoogleAnalytics />
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </MenuFlagProvider>
    </>
  )
}

export default MyApp
