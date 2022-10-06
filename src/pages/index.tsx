import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPosts } from 'api/api'
import Post from 'types/post'

import config from 'utils/config'
import Layout from 'Layout/Layout'

import StoryNew from 'components/Story/StoryNew'
import StoryPast from 'components/Story/StoryPast'

type Props = {
  allPosts: Post[]
}

const Index: NextPage<Props> = ({ allPosts }) => {
  const newPost = allPosts[0]
  const pastPost = allPosts.slice(1)

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
        {newPost && (
          <StoryNew
            date={newPost.date}
            title={newPost.title}
            excerpt={newPost.excerpt}
            category={newPost.category}
            coverEyeCatch={newPost.coverEyeCatch}
          />
        )}
        {pastPost.length > 0 ? <StoryPast posts={pastPost} /> : ''}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['date', 'title', 'excerpt', 'category', 'coverEyeCatch', 'coverPostImage', 'weather'])

  return {
    props: { allPosts },
    revalidate: 60,
  }
}

export default Index
