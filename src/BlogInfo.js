import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogInfo = () => {

  const {id} = useParams()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs' + id);
const history = useHistory()

  const handleClick = () => {
fetch('http://localhost:8000/blogs/' + blog.id, {
    method: 'DELETE'
}).then(() => {
history.push('/blogs')
})
  }

    return ( 
        <div className="blog-info">
           { isPending && <div>Loading....</div> }
           { error && <div>{error}</div>}
           { blog && (
            <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p>Written by: {blog.author}</p>
                <button onClick={handleClick}>Delete blog</button>
            </article>
           )}
        </div>

     );
}
 
export default BlogInfo;