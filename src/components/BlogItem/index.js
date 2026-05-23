import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-card">
        <img className="blog-item-image" src={imageUrl} alt={title} />
        <div className="blog-item-info">
          <p className="blog-item-topic">{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="blog-item-author-row">
            <img className="blog-item-avatar" src={avatarUrl} alt={author} />
            <p className="blog-item-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
