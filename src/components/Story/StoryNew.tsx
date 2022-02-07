import Link from 'next/link'
import styled from '@emotion/styled'
import Author from 'types/author'
import * as gtag from 'lib/gtag'
import H1 from 'components/Base/H1'
import styles from 'utils/styles'
import DateFormatter from 'components/DateFormatter'

type Props = {
  title: string
  excerpt: string
  category: string
  coverImage: string
  date: string
  author: Author
  slug: string
}

const StoryNew = ({ title, excerpt, category, coverImage, date, author, slug }: Props) => {
  const handleClick = () => {
    gtag.event({
      action: 'click',
      category: 'Link',
      label: 'event',
    })
  }

  return (
    <Section>
      <Article id={slug}>
        <Link as={`/posts/${slug}`} href='/posts/[slug]' passHref>
          <a onClick={handleClick}>
            <Body>
              <span className='story-category'>{category}</span>
              <h1>{title}</h1>
              <Information>
                <ul className='story-status'>
                  <li>
                    <span className='story-publish'>
                      <DateFormatter dateString={date} />
                    </span>
                  </li>
                </ul>
                <p>{excerpt}</p>
              </Information>
              <div className='btn btn-readmore'>read more</div>
            </Body>
            <Picture>
              <div className='new-image outline' style={{ backgroundImage: `url('${coverImage}` }}></div>
            </Picture>
          </a>
        </Link>
      </Article>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  height: 580px;

  @media #{$small} {
    height: auto;
  }

  h1 {
    position: relative;
    font-family: 'ヒラギノ明朝 ProN W3', HiraMinProN-W3, YuMincho, 游明朝, 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
    ${styles.mixins.fontSize(24, 40)}

    letter-spacing: 0.15em;
    color: #fff;

    @media #{$small} {
      margin-bottom: 40px;
    }

    a {
      display: block;
      color: #fff;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -15px;
      width: 30px;
      height: 2px;
      background-color: #fff;
      z-index: 2;
      transition: all 200ms 0s ease;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -15px;
      width: 100px;
      height: 2px;
      background-color: #464646;
    }

    &:hover {
      &:before {
        width: 100px;
      }
    }
  }

  .btn-readmore {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: auto;

    @media #{$small} {
      position: static;
    }
  }

  .story {
    &-category {
      color: #b7b7b7;
    }
  }
`

const Article = styled.article`
  a {
    display: grid;
    grid-template-columns: 380px 1fr;

    @media #{$small} {
      display: flex;
      flex-wrap: wrap;
    }

    &:hover {
      h1 {
        &:before {
          width: 100px;
        }
      }

      .btn-readmore {
        background-color: #fff;
        color: #222222;
      }
    }
  }
`

const Body = styled.div`
  position: relative;
  width: 380px;
  padding: 50px;
  background-color: #222;

  @media #{$small} {
    order: 2;
    width: 100%;
    padding: 30px;
  }
`

const Information = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 85px;
  width: 277px;
  width: calc(277 / 380 * 100%);
  margin: auto;

  @media #{$small} {
    position: static;
    width: 100%;
    margin: 0 0 50px;
  }

  p {
    ${styles.mixins.fontSize(14, 22)}
    color: #bbbbbb;

    &:first-letter {
      ${styles.mixins.fontSize(18, 22)}
      color: #fff;
    }
  }
`

const Picture = styled.div`
  width: 100%;
  height: 580px;
  overflow: hidden;
  background-color: #000;

  .new-image {
    width: 100%;
    height: 580px;
    background-position: center center;
    background-size: cover;
    filter: grayscale(100%);
    transition: all 1500ms 0s ease;

    @media #{$small} {
      order: 1;
      filter: none;
      transition: none;
    }

    &.no-image {
      background: #fff url(#{$IMG_PATH}/no-image.svg) center center no-repeat;
      background-size: 100px auto;
      border: 1px solid #ddd;
    }

    &.outline {
      border: 1px solid #222222;

      @media #{$small} {
        border: none;
        border-top: 1px solid $color-border;
      }
    }

    &.right {
      @media #{$small} {
        background-position: center right;
      }
    }

    &.left {
      @media #{$small} {
        background-position: center left;
      }
    }

    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
  }
`

export default StoryNew
