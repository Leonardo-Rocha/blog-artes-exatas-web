import React from 'react';
import { FiTag, FiEdit, FiTrash } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

import {
  Container,
  Cover,
  Preview,
  Title,
  Info,
  AdminButtons,
} from './styles';

interface Props {
  title: string;
  preview: string;
  date: string;
  readingTimeInMinutes: number;
  tags: string[];
  coverImgUrl: string;
  coverImgAlt: string;
}

const PostCardAdmin: React.FC<Props> = ({
  title, preview, date, readingTimeInMinutes, tags, coverImgUrl, coverImgAlt,
}) => (
  <Container>
    <div>
      <Title>{title}</Title>

      <Preview>{preview}</Preview>

      <Info>
        {date}
        {' '}
        - Leitura de
        {' '}
        {readingTimeInMinutes}
        min |
        {' '}
        <FiTag />
        {' '}
        {tags.map((tag) => `${tag} `)}
      </Info>

      <AdminButtons>
        <Button>
          <FiEdit />
          Editar
        </Button>

        <Button>
          <FiTrash />
          Excluir
        </Button>
      </AdminButtons>
    </div>

    <Cover>
      <img
        src={coverImgUrl}
        alt={coverImgAlt}
      />
    </Cover>
  </Container>
);

export default PostCardAdmin;
