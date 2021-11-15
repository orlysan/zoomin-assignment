import React from 'react';
import { Navbar , Nav , Container , NavLink} from 'react-bootstrap';
import './Header.css';


function Header(){
    return (
        <Navbar className="nav-header">
            <Container>
                <Navbar.Brand href="#/">Star War</Navbar.Brand>
                <Nav>
                    <NavLink href='#/favorites'>Favorites</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;