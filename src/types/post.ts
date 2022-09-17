import Author from './author'

type PostType = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverImage: string
  coverImageSP: string
  coverCaption: string
  author: Author
  ogImage: {
    url: string
  }
  weather: string
  content: string
}

export default PostType
