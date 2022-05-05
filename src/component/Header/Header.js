import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {[false,].map((expand) => (
                <Navbar key={expand} bg="info" fixed="top" expand={expand} className="mb-3 p-3">
                    <Container fluid>
                        <Navbar.Brand href="#">INVENTORY MANAGEMENT</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Admin
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/manageitem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                    <Nav.Link as={Link} to="/additem">About</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                                    <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;