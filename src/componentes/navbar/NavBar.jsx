import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartwidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container id='contenedor'>
          <Navbar.Brand id="marca">TienFLA</Navbar.Brand>
          <Nav id='categorias'>
            <NavLink to="/" activeClassName className="Option">Inicio</NavLink>
            <NavLink to="/remera" activeClassName className="Option">Remeras</NavLink>
            <NavLink to="/bermuda" activeClassName className="Option">Bermudas</NavLink>
            <NavLink to="/medias" activeClassName className="Option">Medias</NavLink>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

// instalo react bootstrap
// uso codigo de navbar de bootstrap
// exporto e importo en app.js para usarla