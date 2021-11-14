import React from 'react';
import { Navbar , Nav , Container , NavLink} from 'react-bootstrap';

function Header(){
    return (
        <Navbar>
            <Container>
                <Navbar.Brand to="#/">Star War</Navbar.Brand>
                <Nav>
                    <NavLink to='/favorites'>Favorites</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;