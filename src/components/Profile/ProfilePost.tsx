import Link from 'next/link'
import Image from 'next/image'
import Author from 'types/author'

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

const ProfilePost = ({ title, excerpt, category, coverImage, date, author, slug }: Props) => {
  return (
    <section id='about'>
      <div className='left'>
        <div className='profile-image'>
          <Image src='/img/about/profile.jpg' alt='Tsujimoto Mamoru with Didgeridoo' width='150' height='150' />
        </div>
        <div className='profile-name'>Tsujimoto Sir Christopher Mamoru</div>
      </div>
      <div className='right'>2</div>
    </section>
  )
}

export default ProfilePost
