import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header';
import PostCardAdmin from '../../components/PostCardAdmin';

import { Content, NewPostDiv } from './styles';

const AdminPage: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <NewPostDiv>
        <Button>Criar novo post</Button>
      </NewPostDiv>

      <PostCardAdmin
        title="COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo"
        preview="Esse vídeo tem o propósito ambicioso de ser um guia DEFINITIVO de como
          escolher as peças para montar um computador dependendo do uso e aplicação.
          Hoje em dia é muito comum bla bla bal lorem ipsum dolor"
        date="24/10/2020"
        readingTimeInMinutes={7}
        tags={['#Tutorial', '#Computadores']}
        url="https://www.youtube.com/watch?v=OaPt-19C2No"
      />
    </Content>
  </Container>
);

export default AdminPage;
