import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  NavLink } from 'react-router-dom';



function TopNavBar() {
  return (
    <Navbar  expand="lg" data-bs-theme="dark" bg="dark" >
      <Container>
        <NavLink to="/">Shop Now</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavDropdown title="Catagories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Con
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/products" className="nav-link" >Products </NavLink>
            <NavLink to="/contact" className="nav-link" >Contact </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavBar