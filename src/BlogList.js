import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
        <div className="bloglist">
               {blogs.map( blogs => (
            <div key={blogs.id}>
            <Link to={'/blogs/$(blogs.id)'}>
                <h2>{blogs.title}</h2>
                <p>Written by:{blogs.author}</p>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;