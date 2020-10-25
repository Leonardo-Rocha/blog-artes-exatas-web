import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import Post from '../../interfaces/post';

import { Content } from './styles';

const LandingPage: React.FC = () => {
  const [posts, setPosts] = useState<Post>();

  return (
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
          tags={['#Tutorial', '#Computadores', '#tralha', '#POnceta']}
          url="https://www.youtube.com/watch?v=OaPt-19C2No"
        />

        <PostCard
          title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
          preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
          quando chega no cabelo. Como proceder quando não há cabelo?"
          date="25/10/2020"
          readingTimeInMinutes={2}
          tags={['#Humor', '#PiadasZap']}
          url="https://www.youtube.com/watch?v=WIpP5fvg9Jw"
        />
      </Content>
    </Container>
  );
};

export default LandingPage;
