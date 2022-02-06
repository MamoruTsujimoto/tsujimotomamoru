import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MenuFlagProvider } from 'components/Providers/MenuFlagProvider'
import Loading from 'components/Loading'
import { usePageView, GoogleAnalytics } from 'lib/gtag'
import 'styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
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

  usePageView()
  return (
    <>
      <MenuFlagProvider>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </MenuFlagProvider>
      {loading && <Loading />}
    </>
  )
}

export default MyApp
