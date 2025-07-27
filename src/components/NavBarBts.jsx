import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBarBts() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img alt='logo' src='../logo-shop.jpg' style={{width:'4rem'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="gap-4 align-items-center">
                        <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/categories/nuevos'>Nuevos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/mas-vendidos'>Mas Vendidos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/ofertas'>Ofertas</NavDropdown.Item>
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