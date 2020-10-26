import React from 'react';
import Button from 'react-bootstrap/Button';

import PostCardAdmin from '../../components/PostCardAdmin';

import { NewPostDiv } from './styles';
import PageTemplate from '../../components/PageTemplate';

const AdminPage: React.FC = () => (
  <PageTemplate>
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
  </PageTemplate>
);

export default AdminPage;
