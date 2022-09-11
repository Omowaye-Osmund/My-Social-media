    import { useState } from "react"
    import { useHistory } from "react-router-dom";

    const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [author, setAuthor] = useState("Omowaye");
    const history = useHistory();


    const handleSubmit = (e) => {
    e.preventDefault();
    const blog ={ title, body, author }

    setIsLoading(true);

    fetch(' http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('New blog added')
        setIsLoading(false);
        history.push('/blogs');
    })
    
}


      return (
       <div className="createNewBlog">
       <h2>Add a new blog</h2>
       <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
         type="text"
          placeholder="Blog Title"
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)} 
           /><br />
           <label>Blog body</label>
           <textarea 
           required
           value={body}
           onChange={(e) => setBody(e.target.value)}
           /> 
           <br />
           <br />
           <p> Written by: {author} </p>
            <br />
           <br />
           { !isLoading && <button>Post Blog</button>}
           { isLoading && <button disabled>Posting Blog....</button>}
           <p>{title}</p>
       </form>
       </div>
        )
     }

    export default Create