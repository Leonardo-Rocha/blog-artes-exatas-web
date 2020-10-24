import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FiSearch } from 'react-icons/fi';

const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Artes Exatas</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Sobre</Nav.Link>
      <Nav.Link href="#pricing">Contato</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" className="mr-sm-2" />
      <Button variant="outline-info">
        <FiSearch size={17} />
      </Button>
    </Form>
  </Navbar>
);

export default Header;
