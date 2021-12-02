import Link from 'next/link'
import styled from '@emotion/styled'

import config from 'utils/config'
import styles from 'utils/styles'

const NewStory = () => {
  return (
    <section id='new-story'>
      <article id='story01'>
        <Link href='/' passHref={true}>
          <a>
            <div id='new-story-entrance'>
              <span className='story-category'>Diary</span>
              <h1>SampleTitle</h1>
              <div id='new-story-information'>
                <ul className='story-status'>
                  <li>
                    <span className='story-publish'>December 2, 2021 - 22℃</span>
                  </li>
                </ul>
                <p>Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text.</p>
              </div>
              <div className='btn btn-readmore'>read more</div>
            </div>
            <div id='new-story-image'>
              <div
                className='new-image outline zoom'
                style={{ backgroundImage: `url('/img/figure/figure-14.jpg')` }}
              ></div>
            </div>
          </a>
        </Link>
      </article>
    </section>
  )
}

export default NewStory

const Story = styled.section`
  display: grid;
  grid-template-columns: 380px 1fr;

  height: 580px;

  &:hover {
    h1 {
      &:before {
        width: 100px;
      }
    }

    #new-story-image .new-image {
      opacity: 1;
      filter: grayscale(0);

      &.zoom {
        animation: anime 80s ease-in 0s;

        @media #{$small} {
          animation: anime 80s ease-in 0s;
        }
      }
    }

    .btn-readmore {
      background-color: #fff;
      color: #222222;
    }
  }

  @media #{$small} {
  }
`
const Article = styled.article``

const Entrance = styled.div`
  position: relative;
  width: 380px;
  padding: 50px;
  background-color: #222;
`

const Category = styled.span`
  ${styles.mixins.fontSize(12, 12)}

  font-family: Raleway,"Helvetica Neue",Helvetica,Arial,Verdana,Roboto,"游ゴシック","Yu Gothic","游ゴシック体","YuGothic","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Meiryo UI","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
  color: #b7b7b7;
`

const Information = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 85px;
  width: 277px;
  width: calc(277 / 380 * 100%);
  margin: auto;
`

const H1 = styled.h1`
  position: relative;
  font-family: 'ヒラギノ明朝 ProN W3', HiraMinProN-W3, YuMincho, 游明朝, 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  ${styles.mixins.fontSize(24, 40)}
  letter-spacing: .15em;
  color: #fff;
`

const Status = styled.ul`
  li {
    text-align: right;
  }
`

const Publish = styled.span`
  ${styles.mixins.fontSize(11, 11)}
  color: #B8B8B8;
`

const P = styled.p`
  ${styles.mixins.fontSize(14, 22)}
  color: #BBBBBB;
`

const ReadMore = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  width: 130px;
  margin: auto;
  padding: 10px 0 9px;

  ${styles.mixins.fontSize(11, 11)}

  font-family: Raleway,"Helvetica Neue",Helvetica,Arial,Verdana,Roboto,"游ゴシック","Yu Gothic","游ゴシック体","YuGothic","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Meiryo UI","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #a1a1a1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 500ms 0s ease;
`
