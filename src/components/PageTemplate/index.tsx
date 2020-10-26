import React from 'react';

import Header from './components/Header';

import { Container, Body, Footer } from './styles';

const PageTemplate: React.FC = ({ children }) => (
  <Container>
    <Header />

    <Body>

      <section>
        {children}
      </section>

      <div className="sidebar-1 sidebar">
        anuncie aqui
      </div>

      <div className="sidebar-2 sidebar">
        anuncie aqui
      </div>
    </Body>

    <Footer>
      © 2020 Leonardo Rocha
    </Footer>
  </Container>
);

export default PageTemplate;
