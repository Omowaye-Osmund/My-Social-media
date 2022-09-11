    import { useParams, useHistory } from "react-router-dom";
    import useFetch from "../useFetch";

    const BlogInfo = () => {

    const { id } = useParams()
    const { data: blog, error, isLoading} = useFetch(' http://localhost:8000/blogs/' + id)
    const history = useHistory();


   const handleClick = () => {
    fetch(' http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE',
    } ).then(() => {
        history.push('/blogs')
    })
   }



    return ( 
        <div className="blogInfo">
            <h2>Blog Page -{ id }</h2>
            { isLoading && <div>Loading....</div> }
            { error && <div> {error} </div>}
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <div> { blog.body} </div><br />
                    <div> Written by: {blog.author} </div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
     
     );
    }
 
    export default BlogInfo;