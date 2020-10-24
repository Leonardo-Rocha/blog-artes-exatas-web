import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Content } from './styles';

const AdminPage: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <PostCard
        title="COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo"
        preview="Esse vídeo tem o propósito ambicioso de ser um guia DEFINITIVO de como
          escolher as peças para montar um computador dependendo do uso e aplicação.
          Hoje em dia é muito comum bla bla bal lorem ipsum dolor"
        date="24/10/2020"
        readingTimeInMinutes={7}
        tags={['#Tutorial', '#Computadores']}
        coverImgUrl="https://www.computerrepairssunnybank.com.au/wp-content/uploads/2016/11/custom-computer-build.jpg"
        coverImgAlt="Pessoa montando um computador."
        showAdminButtons
      />
    </Content>
  </Container>
);

export default AdminPage;
