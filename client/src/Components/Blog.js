import { json } from "express/lib/response"
import React, {useEffect, useState} from "react"

function Blog(){
    const[notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect(() =>
        fetch("/blog").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
    )
   /*return <div className="container">
        <h1>Blog Görüntüleme Sayfası</h1>
       {notes.map(note => 
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            </div>
            )}
         

    
    </div>
    */
}
export default Blog;