import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handlesignOut = () => {
        signOut(auth);
    }
    return (
        <>
            {[false, 'xl'].map((expand) => (
                <Navbar key={expand} bg="info" fixed="top" expand={expand} className="mb-3 p-3">
                    <Container fluid>
                        <Navbar.Brand href="/home">SHOTEZ WAREHOUSE</Navbar.Brand>
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

                                    <Nav>

                                        {
                                            user && <>
                                                <Nav.Link as={Link} to="/managesinventory">Manage Item</Nav.Link>
                                                <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                                                <Nav.Link as={Link} to="/addservice">Add Item</Nav.Link>

                                            </>
                                        }
                                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                                        {
                                            user?.uid ?
                                                <Nav.Link onClick={handlesignOut}>
                                                    Sign Out
                                                </Nav.Link>
                                                :
                                                <Nav.Link as={Link} to="/login">
                                                    Login
                                                </Nav.Link>



                                        }



                                    </Nav>
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