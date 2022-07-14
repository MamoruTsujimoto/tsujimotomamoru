import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import styled from '@emotion/styled'
import { getPostBySlug, getAllPosts } from 'api/api'
import Post from 'types/post'
import config from 'utils/config'
import functions from 'utils/functions'
import DateFormatter from 'components/DateFormatter'
import Layout from 'Layout/Layout'
import styles from 'utils/styles'

type Props = {
  post: Post
}

const Single = ({ post }: Props) => {
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const ogpImage = siteUrl + post.ogImage.url
  if (!router.isFallback && !post?.date) {
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
            <meta property='og:url' content={`${siteUrl}/posts/${post.date}`} />
            <meta property='og:image' content={ogpImage} />
            <meta property='og:title' content={`${post.title} | ${config.info.siteName}`} />
            <meta property='og:description' content={post.excerpt} />
            <meta name='twitter:image' content={ogpImage} />
          </Head>
          <SingleWrapper>
            <Layout>
              <Root>
                <Header>
                  <h1>{post.title}</h1>
                  <Meta>
                    <ul>
                      <li>
                        <DateFormatter dateString={post.date} />
                      </li>
                      <li>{post.category}</li>
                    </ul>
                  </Meta>
                  <Figure>
                    <Img className='outline' style={{ backgroundImage: `url(${post.coverImage})` }} />
                    <figcaption>{post.coverCaption}</figcaption>
                  </Figure>
                </Header>
                <Body>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </Body>
              </Root>
            </Layout>
          </SingleWrapper>
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
    'coverCaption',
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
  const posts = getAllPosts(['date'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.date,
        },
      }
    }),
    fallback: false,
  }
}

const SingleWrapper = styled.div`
  main {
    max-width: 100%;
    margin: 0;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.18, 0.06, 0.23, 1);
  }
`

const Root = styled.article`
  max-width: 100%;
  margin: 0;
  border: none;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }

  a {
    display: inline-block;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 10%;
      height: 1px;
      background-color: #464646;
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #d1d1d1;
    }
  }

  h1 + *,
  h2 + *,
  h3 + *,
  h4 + *,
  h5 + *,
  h6 + * {
    margin-top: 0.8em;
  }

  &-single {
    &-navigation {
      width: $width-single;
      margin: 50px auto;

      @media (max-width: ${styles.sizes.breakpoint.small}) {
        width: calc(100% - 40px);
        margin: 30px 20px 80px;
      }

      &:after {
        content: '';
        display: block;
        clear: both;
      }

      .navi {
        position: relative;
        width: calc(100% / 2);

        &:last-of-type {
          margin-right: 0;
        }

        a {
          ${styles.mixins.fontSize(13, 13)}

          &:before {
            content: '';
            display: block;
            position: absolute;
            top: 8px;
            width: 11px;
            height: 11px;
            border-top: 1px solid #000;

            ${styles.mixins.fontSize(11, 11)}

            transition: all 0.2s ease-out;
          }
        }
      }
    }

    &-prev {
      float: left;
      text-align: left;

      a {
        justify-content: flex-start;
        padding-left: 21px;

        &:before {
          left: 0;
          border-left: 1px solid #000;
          transform: translate3d(0, 0, 0) rotate(-45deg);
        }

        &:hover {
          &:before {
            transform: translate3d(-5px, 0, 0) rotate(-45deg);
          }
        }
      }
    }

    &-next {
      float: right;
      text-align: right;

      a {
        justify-content: flex-end;
        padding-right: 21px;

        &:before {
          right: 0;
          border-right: 1px solid #000;
          transform: translate3d(0, 0, 0) rotate(45deg);
        }

        &:hover {
          &:before {
            transform: translate3d(5px, 0, 0) rotate(45deg);
          }
        }
      }
    }
  }
  &-footer {
    &-related {
      display: flex;
      justify-content: center;
      position: relative;
      margin: 50px 0 53px;
      background-color: #000;
      overflow: hidden;

      &-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: $width-single;
        margin: 0 auto;
        padding: 40px;
        z-index: 2;

        @media #{$small} {
          width: 100%;
          margin: 0;
        }
      }

      &-container {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 600px;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      &-box {
        margin: 5px;
        padding: 5px;
        width: calc(100% / 2 - 10px);
        height: 100px;
        background-color: rgba(255, 255, 255, 0.8);

        &-figure {
          width: 180px;
          height: 90px;
          background-position: center center;
          background-size: cover;
        }
      }

      .heading {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 20px;
        background-color: #000;
        color: #fff;
        z-index: 2;

        ${styles.mixins.fontSize(12, 12)}

        letter-spacing: 0.15em;
      }
    }
    &-video {
      position: relative;
      margin: 50px 0;
      width: 100%;
      height: 70rem;
      overflow: hidden;

      p {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 300px;
        height: 50px;
        margin: auto;
        color: #fff;
      }

      video {
        width: 100%;
      }
    }
  }
`
const Header = styled.header`
  width: 980px;
  margin: 0 auto;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }

  &:after {
    content: '⋯';
    display: block;
    margin: 0 0 20px;
    text-align: center;
    color: #333;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      margin: 20px 0;
    }
  }

  h1 {
    display: block;
    margin: 40px auto 35px;
    width: ${styles.sizes.desktop.single};
    color: #404040;
    text-align: center;
    font-family: 'ヒラギノ明朝 ProN W3', HiraMinProN-W3, YuMincho, 游明朝, 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
    letter-spacing: 0.1em;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      margin: 40px 0 15px;
      width: 100%;
      padding: 0 20px;

      ${styles.mixins.fontSize(25, 37)}
    }
  }
`
const Meta = styled.div`
  margin: 0;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    float: none;
  }

  &:before {
    content: '⋯';
    display: block;
    margin: 0 0 20px;
    text-align: center;
    color: #333;
  }

  ul {
    text-align: center;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: auto;
    }

    li {
      display: inline-block;

      ${styles.mixins.fontSize(12, 12)}

      vertical-align: top;

      @media (max-width: ${styles.sizes.breakpoint.small}) {
        display: block;
        margin: 0 0 10px;
      }

      &:after {
        content: '/';
        margin: 0 10px;

        @media (max-width: ${styles.sizes.breakpoint.small}) {
          content: '';
          margin: 0;
        }
      }

      &:last-child {
        &:after {
          content: '';
          margin: 0;
        }
      }
    }
  }

  &-tag {
    margin: 0;

    ${styles.mixins.fontSize(12, 24)}

    &-heading {
      text-align: center;
      text-transform: uppercase;
    }

    &-wrapper {
      display: flex;
      justify-content: center;

      @media (max-width: ${styles.sizes.breakpoint.small}) {
        flex-wrap: wrap;
      }

      .tag {
        a {
          display: block;
          padding: 3px 15px;
        }
      }
    }
  }
`
const Figure = styled.figure`
  margin: 10px auto 0;
  transition: 0.5s;

  figcaption {
    padding: 15px 10px;
    opacity: 0;
    transition: 0.5s;
    text-align: right;

    ${styles.mixins.fontSize(12, 12)}

    font-weight: bold;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      opacity: 1;
      color: #fff;
      background-color: #000;
    }
  }

  &:hover {
    box-shadow: 0 10px 90px -30px rgba(0, 0, 0, 0.4);

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      box-shadow: none;
    }

    .outline {
      border-color: #000;

      @media (max-width: ${styles.sizes.breakpoint.small}) {
        border-color: #e9e9eb;
      }
    }

    figcaption {
      opacity: 1;
      color: #fff;
      background-color: #000;
    }
  }

  .aligncenter {
    display: table;
    margin-left: auto;
    margin-right: auto;
  }
`
const Img = styled.div`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  &.outline {
    border-top: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    transition: 0.5s;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      margin-top: 10px;
      border: none;
      border-top: 1px solid #e9e9eb;
    }
  }

  &.right {
    @media (max-width: ${styles.sizes.breakpoint.small}) {
      background-position: center right;
    }
  }

  &.left {
    @media (max-width: ${styles.sizes.breakpoint.small}) {
      background-position: center left;
    }
  }
`
const Body = styled.div`
  > * {
    width: ${styles.sizes.desktop.single};
    margin: 0 auto;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: calc(100% - 40px);
      margin-right: 20px;
      margin-left: 20px;
    }
  }

  h2 {
    & + .wp-block-columns {
      margin-top: 2em;
    }
  }

  h2 {
    & + .wp-block-cover {
      margin-top: 2em;
    }
  }

  hr {
    position: relative;
    margin: 40px auto;
    border: 0;
    height: 1px;
    text-align: center;

    &:after {
      content: '⋯';
      position: absolute;
      top: -8px;
      line-height: 1;
    }
  }

  a {
    position: relative;
    padding: 0 4px 1px 4px;
    text-decoration: underline;
    color: #d57339;
    transition: all 0.2s ease-out;
    z-index: 2;

    &:hover {
      color: #fff;
      background-color: #d57339;
      text-decoration: none;

      &:after {
        color: #fff;
      }
    }
    &[target='_blank'] {
      padding: 0 20px 1px 4px;

      &:after {
        content: '\e900';
        position: absolute;
        top: 3px;
        right: 3px;
        font-family: 'icomoon' !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;

        ${styles.mixins.fontSize(12, 12)}

        color: #333;

        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      &:hover {
        &:after {
          color: #fff;
        }
      }
    }
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;

    ${styles.mixins.fontSize(17, 32)}

    letter-spacing: 0.025em;

    & + h2,
    & + h3,
    & + h4,
    & + h5,
    & + h6 {
      margin-top: 50px;
    }

    & + .wp-block-media-text {
      margin-top: 1.5em;
    }
  }

  pre {
    margin: 20px auto;
    padding: 10px 10px;
    background-color: #242424;
    color: #fff;

    ${styles.mixins.fontSize(14, 26)}

    cursor: text;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      overflow: auto;
    }
  }

  ul,
  ol {
    margin: 20px auto;
    padding-left: 30px;
    list-style: circle;

    li {
      margin: 10px 0;

      ${styles.mixins.fontSize(14, 26)}
    }
  }

  table {
    width: 100%;
    margin: 40px auto;
    border-collapse: collapse;

    caption {
      padding: 8px 0;
      caption-side: bottom;
    }

    th,
    td {
      padding: 10px;
      border: 1px solid #dcd6d9;

      ${styles.mixins.fontSize(14, 26)}
    }

    th {
      background-color: #e7e7eb;
      text-align: center;
    }
  }

  strong {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5px;
      border: 3px solid rgba(0, 0, 0, 0.1);
    }
  }

  video {
    width: 100%;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: calc(100% - 40px);
    }
  }

  figure {
    & + * {
      margin-top: 50px;

      @media (max-width: ${styles.sizes.breakpoint.small}) {
        margin-top: 30px;
      }
    }

    figcaption {
      padding: 10px 5px;

      ${styles.mixins.fontSize(12, 12)}

      text-align: right;
    }
  }

  blockquote {
    padding-left: 8px;
    border-left: 5px solid #000;

    p {
      ${styles.mixins.fontSize(13, 24)}
    }
  }
`
