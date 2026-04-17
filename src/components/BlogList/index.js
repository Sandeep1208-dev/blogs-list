import BlogItem from '../BlogItem'
import './index.css'

const BlogList = ({blogsList}) => (
  <ul className="blogs-list">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blogsDetails={blog} />
    ))}
  </ul>
)

export default BlogList
