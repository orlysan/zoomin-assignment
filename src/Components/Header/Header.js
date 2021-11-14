import React from 'react';
import { Navbar , Nav , Container } from 'react-bootstrap';

function Header(){
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Star War</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#/favorites'>Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;