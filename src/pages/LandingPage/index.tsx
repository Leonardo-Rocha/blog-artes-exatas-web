import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Content } from './styles';

const LandingPage: React.FC = () => (
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
      />

      <PostCard
        title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
        preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
        quando chega no cabelo. Como proceder quando não há cabelo?"
        date="25/10/2020"
        readingTimeInMinutes={2}
        tags={['#Humor', '#PiadasZap']}
        coverImgUrl="https://ak8.picdn.net/shutterstock/videos/13645058/thumb/1.jpg?i10c=img.resize(height:160)"
        coverImgAlt="Homem careca com o rosto coberto de espuma de barbear."
      />

      <PostCard
        title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
        preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
        quando chega no cabelo. Como proceder quando não há cabelo?"
        date="25/10/2020"
        readingTimeInMinutes={2}
        tags={['#Humor', '#PiadasZap']}
        coverImgUrl="https://ak8.picdn.net/shutterstock/videos/13645058/thumb/1.jpg?i10c=img.resize(height:160)"
        coverImgAlt="Homem careca com o rosto coberto de espuma de barbear."
      />

      <PostCard
        title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
        preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
        quando chega no cabelo. Como proceder quando não há cabelo?"
        date="25/10/2020"
        readingTimeInMinutes={2}
        tags={['#Humor', '#PiadasZap']}
        coverImgUrl="https://ak8.picdn.net/shutterstock/videos/13645058/thumb/1.jpg?i10c=img.resize(height:160)"
        coverImgAlt="Homem careca com o rosto coberto de espuma de barbear."
      />
    </Content>
  </Container>
);

export default LandingPage;
