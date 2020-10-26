import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import { Container, List } from './styles';

const Header: React.FC = () => (
  <Container>
    <NavLink to="/home">
      <h1>Artes Exatas</h1>
    </NavLink>

    <nav>
      <List>
        <li>
          <NavLink to="/home" activeClassName="selected">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about" activeClassName="selected">Sobre</NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeClassName="selected">Contato</NavLink>
        </li>

        <li>
          <input type="text" placeholder="inputo da cara" id="searchBar" />
          <FiSearch size="1.6rem" color="inherit" id="searchIcon" />
        </li>
      </List>
    </nav>
  </Container>
);

export default Header;
