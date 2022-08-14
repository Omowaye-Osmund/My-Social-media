import { Link } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {
  return (
    <div>
        <h1>404 NOT FOUND</h1>
        <Link to="/blogs">Back</Link>
    </div>
  )
}

export default NotFound