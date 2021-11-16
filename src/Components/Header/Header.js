import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar className="nav-header">
      <Container>
        <Navbar.Brand>
          <Link to="/">Star War</Link>
        </Navbar.Brand>
        <Link to="/favorites">Favorites</Link>
      </Container>
    </Navbar>
  );
}

export default Header;
