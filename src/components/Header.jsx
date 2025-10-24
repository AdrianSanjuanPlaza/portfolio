import { useContext } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import logo_black from '../assets/logo_sin_fondo_negro.png'
import logo_light from '../assets/logo_sin_fondo_blanco.png'
import { MyContext } from '../App';

function header() {

    const { isDarkMode, setIsDarkMode } = useContext(MyContext)

    function toggleTheme(){
        if(isDarkMode){
            setIsDarkMode(false)
        }else{
            setIsDarkMode(true)
        }
    }

  return (
    <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="l">
      
      <Container fluid>
        
        <Navbar.Brand href="#home">
            <img 
            src={isDarkMode ? logo_light : logo_black}
            alt="logo"
            width='150' 
            height='auto'/></Navbar.Brand>
        
        <div className="d-flex align-items-center justify-items-end">
          <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme} className="me-2">
              {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </Button>
        

          <Navbar.Toggle aria-controls="basic-navbar-nav" bg={isDarkMode ? "dark" : "light"} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default header