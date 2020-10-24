import React from 'react';

import {
  Container,
  Cover,
  Preview,
  Title,
} from './styles';

const PostCard: React.FC = () => (
  <Container to="openPost">
    <div>
      <Title>COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo</Title>

      <Preview>
        Esse vídeo tem o propósito ambicioso de ser um guia DEFINITIVO de como
        escolher as peças para montar um computador dependendo do uso e aplicação.
      </Preview>
    </div>

    <Cover>
      <img
        src="https://www.computerrepairssunnybank.com.au/wp-content/uploads/2016/11/custom-computer-build.jpg"
        alt="Pessoas montando um computador."
      />
    </Cover>
  </Container>
);

export default PostCard;
