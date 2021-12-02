import Link from 'next/link'

const StoryPast = () => {
  const stories = [...Array(12).keys()].map((val) => {
    return {
      id: val,
      category: 'Diary',
      title: 'Sample Title',
      publish: 'December 2, 2021 - 22℃',
      description: 'Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text.',
    }
  })

  return (
    <section className='story-past'>
      <h1 className='section-title'>diary</h1>
      <div className='article-wrapper'>
        {stories.map((story) => (
          <article key={story.id}>
            <a href='post/'>
              <div
                className='story-figure figure'
                style={{ backgroundImage: `url('/img/figure/figure-04.jpg')` }}
              ></div>
              <div className='story-entrance'>
                <span className='story-category'>{story.category}</span>
                <h1>{story.title}</h1>
                <div className='story-information'>
                  <ul className='story-status'>
                    <li>
                      <span className='story-publish'>{story.publish}</span>
                    </li>
                  </ul>
                  <p>{story.description}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoryPast
