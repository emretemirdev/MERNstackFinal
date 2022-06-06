import { useEffect, useState } from "react"
import axios from "axios"

function Blog(){
  const [blog, setBlog] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/comments")
    .then((res) => setBlog(res.data))
    .catch((e) => console.log(e))
    .finally (() => setisLoading(false))
  }, []);  
  return (
    <div>Blog
           <h5> {isLoading && <div>Yükleniyor...</div>}</h5>
            {blog.map((blog)=>(
            <div key={blog.id}> <h6>{blog.name}</h6></div>
            ))}
    </div>
    
     
  )
}

export default Blog