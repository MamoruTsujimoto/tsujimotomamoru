import Link from 'next/link'
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

const AboutPost = ({ title, excerpt, category, coverImage, date, author, slug }: Props) => {
  return <section id='about'></section>
}

export default AboutPost
