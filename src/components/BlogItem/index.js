import './index.css'

const BlogItem = ({blogsDetails}) => {
  const {title, description, publishedDate} = blogsDetails

  return (
    <li className="blog-item-container">
      <div className="blog-details">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
