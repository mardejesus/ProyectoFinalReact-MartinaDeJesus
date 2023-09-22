import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartwidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TienFLA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/remeras">Remeras</Nav.Link>
            <Nav.Link href="/bermudas">Bermudas</Nav.Link>
            <Nav.Link href="/medias">Medias</Nav.Link>
          </Nav>
          <CartWidget count={1}/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

// instalo react bootstrap
// uso codigo de navbar de bootstrap
// exporto e importo en app.js para usarla