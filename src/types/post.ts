import Author from './author'

type PostType = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverEyeCatch: string
  coverPostImage: string
  coverPostImageSP: string
  coverCaption: string
  author: Author
  ogImage: {
    url: string
  }
  weather: string
  content: string
}

export default PostType
