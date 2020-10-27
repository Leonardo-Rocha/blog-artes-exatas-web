import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import Input from '../../../Input';

import { Container, List } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
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
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar"
              id="searchBar"
            />
            <NavLink to={`/search?=${search}`}>
              <FiSearch size="1rem" color="inherit" id="searchIcon" />
            </NavLink>
          </li>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
