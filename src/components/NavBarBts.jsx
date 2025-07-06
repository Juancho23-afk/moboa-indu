import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBarBts() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt='logo' src='../logo-shop.jpg' style={{width:'4rem'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="gap-4 align-items-center">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mas Vendidos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="ms-auto">  
                    <CartWidget/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBts;