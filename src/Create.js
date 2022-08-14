import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

const [title, setTitle]= useState();
const [body, setBody]= useState();
const [isPending, setIsPending] = useState(false);
const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body}
    
    setIsPending(true);

fetch('http://localhost:8000/blogs' + {
    method: 'POST',
    headers: { "content-Type": "application/json"},
    body: JSON.stringify(blog)
}).then(() => {
setIsPending(false);
history.push('/blogs');
})

}
    return ( 
        <div>
           <h2>Create a new blog</h2>
           <form onSubmit={handleSubmit}>
           <label>Blog title:</label>
           <input 
           type="text" 
           placeholder="Blog title"
           required
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           ></input><br />
           <br />
           <label>Blog body</label>
           <textarea
           required
            value={body}
           onChange={(e) => setBody(e.target.value)}
           >
           </textarea><br />
           <br />
              {!isPending && <button>Add Blog</button>}
              {isPending && <button disabled>Adding Blog....</button>}
              </form>
        </div>
     );
}
 
export default Create;