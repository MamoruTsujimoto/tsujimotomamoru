import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAbout } from 'api/api'
import Post from 'types/post'

import config from 'utils/config'
import Layout from 'Layout/Layout'

import AboutPost from 'components/About/AboutPost'

type Props = {
  aboutPosts: Post[]
}

const About: NextPage<Props> = ({ aboutPosts }) => {
  const about = aboutPosts[0]

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

      <Layout>
        {about && (
          <AboutPost
            title={about.title}
            excerpt={about.excerpt}
            category={about.category}
            coverImage={about.coverImage}
            date={about.date}
            author={about.author}
            slug={about.slug}
          />
        )}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutPosts = getAbout(['title', 'excerpt', 'category', 'date', 'slug', 'author', 'coverImage', 'weather'])

  return {
    props: { aboutPosts },
  }
}

export default About
