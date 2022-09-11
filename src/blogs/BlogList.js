import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
        <div className="bloglist">
               {blogs.map( blog => (
            <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by:{blog.author}</p>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;