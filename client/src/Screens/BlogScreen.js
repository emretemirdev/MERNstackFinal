import React from 'react'
import '../bootstrap.min.css'
import {Button, Modal} from "react-bootstrap";
import {useEffect,useState} from "react";
import AnimatedBg from "react-animated-bg";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>
          <p>
            {props.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const BlogScreen = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState([
        {
        title: "",
        description: "",
        url: "",
    }
    ]);

    const[datas, setDatas] = useState({
        title: "",
        description: "",
    })

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then((res) => res.json())  
        .then(jsonRes => setData(jsonRes))
    }, []);

const handleClick = (e) => {
    setModalShow(true)
    const {name, alt} = e.target;
    setDatas({
        title: name,
        description:alt,
        });
    };

  return (
    <div className='App'>
    <br></br>
    <h4>Blogları Okumak İçin Lütfen Fotoğrafın Üzerine Tıkla</h4>
<div style={{display:"flex", flexDirection:"column", width:"800px", margin:"auto"}}>
    {data.map(data => {
        return(
        <img 
        key={data.title}  src={data.url} alt={data.description} name={data.title} onClick={handleClick}>
        </img>)
    })}
</div>
  

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={datas.title}
        description={datas.description}
      />
    </div>
  );
}

export default BlogScreen