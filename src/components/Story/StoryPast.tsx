import Link from 'next/link'
import * as gtag from 'lib/gtag'
import Post from 'types/post'
import DateFormatter from 'components/DateFormatter'

type Props = {
  posts: Post[]
}

const StoryPast = ({ posts }: Props) => {
  const handleClick = () => {
    gtag.event({
      action: 'click',
      category: 'Link',
      label: 'event',
    })
  }

  return (
    <section className='story-past'>
      <h1 className='section-title'>articles</h1>
      <div className='article-wrapper'>
        {posts.map((post) => (
          <article key={post.slug}>
            <Link as={`/posts/${post.slug}`} href='/posts/[slug]' passHref>
              <a onClick={handleClick}>
                <div className='story-figure figure' style={{ backgroundImage: `url(${post.coverImage})` }}></div>
                <div className='story-entrance'>
                  <span className='story-category'>{post.category}</span>
                  <h1>{post.title}</h1>
                  <div className='story-information'>
                    <ul className='story-status'>
                      <li>
                        <span className='story-publish'>
                          <DateFormatter dateString={post.date} />
                        </span>
                      </li>
                    </ul>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoryPast
