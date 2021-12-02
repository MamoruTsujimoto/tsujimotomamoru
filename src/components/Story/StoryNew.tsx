import Link from 'next/link'

const StoryNew = () => {
  return (
    <section id='new-story'>
      <article id='story01'>
        <Link href='/' passHref={true}>
          <a>
            <div id='new-story-entrance'>
              <span className='story-category'>Diary</span>
              <h1>Sample Title</h1>
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

export default StoryNew
