import React, { useState } from 'react';

import PostCard from '../../components/PostCard';
import Post from '../../interfaces/post';
import PageTemplate from '../../components/PageTemplate';

const LandingPage: React.FC = () => {
  const [posts, setPosts] = useState<Post>();

  return (
    <PageTemplate>
      <PostCard
        id={1}
        title="COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo"
        preview="Esse vídeo tem o propósito ambicioso de ser um guia DEFINITIVO de como
          escolher as peças para montar um computador dependendo do uso e aplicação.
          Hoje em dia é muito comum bla bla bal lorem ipsum dolor"
        createdAt="24/10/2020"
        updatedAt="24/10/2020"
        readingTimeInMinutes={7}
        tags={['#Tutorial', '#Computadores', '#tralha', '#POnceta']}
        videoUrl="https://www.youtube.com/watch?v=OaPt-19C2No"
      />

      <PostCard
        id={2}
        title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
        preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
          quando chega no cabelo. Como proceder quando não há cabelo?"
        createdAt="25/10/2020"
        updatedAt="25/10/2020"
        readingTimeInMinutes={2}
        tags={['#Humor', '#PiadasZap']}
        videoUrl="https://www.youtube.com/watch?v=WIpP5fvg9Jw"
      />

      <PostCard
        id={2}
        title="ONDE O CARECA TERMINA DE LAVAR O ROSTO?"
        preview="Muitas pessoas tem essa dúvida, porque geralmente se para de lavar
          quando chega no cabelo. Como proceder quando não há cabelo?"
        createdAt="25/10/2020"
        updatedAt="25/10/2020"
        readingTimeInMinutes={2}
        tags={['#Humor', '#PiadasZap']}
        videoUrl="https://www.youtube.com/watch?v=WIpP5fvg9Jw"
      />
    </PageTemplate>
  );
};

export default LandingPage;
