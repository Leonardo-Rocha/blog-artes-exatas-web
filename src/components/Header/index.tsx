import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FiSearch } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import Container from './styles';

const Header: React.FC = () => (
  // <Navbar bg="dark" variant="dark">
  //   <Navbar.Brand href="#home">Artes Exatas</Navbar.Brand>
  //   <Nav className="mr-auto">
  //     <Nav.Link href="#home">Home</Nav.Link>
  //     <Nav.Link href="#features">Sobre</Nav.Link>
  //     <Nav.Link href="#pricing">Contato</Nav.Link>
  //   </Nav>
  //   <Form inline>
  //     <FormControl type="text" className="mr-sm-2" />
  //     <Button variant="outline-info">
  //       <FiSearch size={17} />
  //     </Button>
  //   </Form>
  // </Navbar>
  <Container>
    <h1>Artes Exatas</h1>
    <NavLink to="/home" id="home">Home</NavLink>
    <NavLink to="/features" id="about">Sobre</NavLink>
    <NavLink to="/pricing" id="contact">Contato</NavLink>
    <input type="text" placeholder="inputo da cara" id="searchBar" />
    <FiSearch size="1.6rem" color="inherit" id="searchIcon" />

  </Container>
);

export default Header;
