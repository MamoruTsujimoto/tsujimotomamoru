import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { getPostBySlug, getAllPosts } from 'api/api'
import Post from 'types/post'

import config from 'utils/config'
import functions from 'utils/functions'
import DateFormatter from 'components/DateFormatter'
import Layout from 'Layout/Layout'

type Props = {
  post: Post
}

const Single = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <Head>
            <title>
              {post.title} | {config.info.siteName}
            </title>
            <meta name='description' content={post.excerpt} />
            <meta property='og:url' content={`/posts/${post.slug}`} />
            <meta property='og:image' content={post.ogImage.url} />
            <meta property='og:title' content={`${post.title} | ${config.info.siteName}`} />
            <meta property='og:description' content={post.excerpt} />
            <meta name='twitter:image' content={post.ogImage.url} />
          </Head>
          <div className='single'>
            <Layout>
              <article className='article' id='story01'>
                <header>
                  <h1>{post.title}</h1>
                  <div className='article-meta'>
                    <ul>
                      <li>
                        <DateFormatter dateString={post.date} />
                      </li>
                      <li>{post.category}</li>
                    </ul>
                  </div>
                  <figure className='article-eyecatch cl photo'>
                    <div
                      className='article-eyecatch-image outline'
                      style={{ backgroundImage: `url(${post.coverImage})` }}
                    ></div>
                    <figcaption></figcaption>
                  </figure>
                </header>
                <div className='article-body'>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </article>
            </Layout>
          </div>
        </>
      )}
    </>
  )
}

export default Single

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'category',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'weather',
  ])
  const content = await functions.MarkdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
