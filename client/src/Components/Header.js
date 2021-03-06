import React, { useEffect } from 'react'
import { Navbar, Nav, Container, Button, NavDropdown,} from 'react-bootstrap'
import { Link} from 'react-router-dom'

const Header = ({user, setUser}) => {
useEffect(()=> {
if(localStorage.getItem('user') && !user){
    setUser(JSON.parse(localStorage.getItem('user'))); //satyfa yenilense dahil
}
},)
  return (
    <Navbar className='py-4' bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand >Temir Akademi</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/"> 
          Ana Sayfa</Nav.Link>
        <NavDropdown className='text-white' title="Hakkımızda" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/404">Neler Yapıyoruz</NavDropdown.Item>
          <NavDropdown.Item href="/404">Ekibimiz</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/404" >İletişim</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    {
      user ? <Button bg="dark" variant="light" 
      onClick={(e) => {
         localStorage.removeItem("user");
        setUser(null);
      }
      }> Çıkış Yap </Button>:
      <Button bg="dark" variant="light">
      <Link 
      style={{ textDecoration: 'none'}}
      to='/signin'>
        Giriş Yap
      </Link>
    </Button>
    }
  </Container>
</Navbar>
  )
}
export default Header