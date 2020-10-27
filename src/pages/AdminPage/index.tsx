import React from 'react';

import PostCardAdmin from '../../components/PostCardAdmin';
import Button from '../../components/Button';
import PageTemplate from '../../components/PageTemplate';

import { NewPostDiv } from './styles';

const AdminPage: React.FC = () => (
  <PageTemplate>
    <NewPostDiv>
      <Button>Criar novo post</Button>
    </NewPostDiv>

    <PostCardAdmin
      id={1}
      title="COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo"
      preview="Esse vídeo tem o propósito ambicioso de ser um guia DEFINITIVO de como
          escolher as peças para montar um computador dependendo do uso e aplicação.
          Hoje em dia é muito comum bla bla bal lorem ipsum dolor"
      createdAt="24/10/2020"
      updatedAt="24/10/2020"
      readingTimeInMinutes={7}
      tags={['#Tutorial', '#Computadores']}
      videoUrl="https://www.youtube.com/watch?v=OaPt-19C2No"
    />
  </PageTemplate>
);

export default AdminPage;
