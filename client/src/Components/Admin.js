import React, {useState} from "react"
import axios from "axios"
function Admin(){
    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post('/create', newNote)
        
    }
    return <div className="container">
        <h1>Blog Gönderi Oluşurma ve Database Gönderme</h1>  <br></br>
        <form>
        <div className="form-group">
            <input onChange={handleChange} name="title" autoComplete="off" value={input.title} className="form-control" placeholder="Başlık"></input>
        </div>
        <br></br>
        <div className="form-group">
            <textarea onChange={handleChange} name="content" autoComplete="off" value={input.content} className="form-control" placeholder="Gönderi"></textarea>
        </div>
        <br></br>
        <button onClick={handleClick} className="btn btn-lg btn-info">Gönderi Oluştur</button>
        </form>
    </div>
}
export default Admin;