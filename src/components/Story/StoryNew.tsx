import Link from 'next/link'
import Author from 'types/author'

import * as gtag from 'lib/gtag'

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
    <section id='new-story'>
      <article id='story01'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]' passHref>
          <a onClick={handleClick}>
            <div id='new-story-entrance'>
              <span className='story-category'>{category}</span>
              <h1>{title}</h1>
              <div id='new-story-information'>
                <ul className='story-status'>
                  <li>
                    <span className='story-publish'>
                      <DateFormatter dateString={date} />
                    </span>
                  </li>
                </ul>
                <p>{excerpt}</p>
              </div>
              <div className='btn btn-readmore'>read more</div>
            </div>
            <div id='new-story-image'>
              <div className='new-image outline' style={{ backgroundImage: `url('${coverImage}` }}></div>
            </div>
          </a>
        </Link>
      </article>
    </section>
  )
}

export default StoryNew
