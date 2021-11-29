import type { NextPage } from 'next'
import Head from 'next/head'

import config from 'utils/config'
import Layout from 'Layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{config.info.siteName}</title>
        <meta name='description' content={config.info.siteDescription} />
        <meta property='og:url' content={config.info.siteURL} />
        <meta property='og:image' content={config.info.ogp.image} />
        <meta property='og:title' content={config.info.siteName} />
        <meta property='og:description' content={config.info.siteDescription} />
        <meta name='twitter:image' content={config.info.ogp.image} />
      </Head>

      <Layout></Layout>
    </>
  )
}

export default Home
