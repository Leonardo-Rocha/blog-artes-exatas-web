import React from 'react';
import { FiTag, FiEdit, FiTrash } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

import VideoCard from '../VideoCard';
import {
  Container,
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
  url: string;
}

const PostCardAdmin: React.FC<Props> = ({
  title, preview, date, readingTimeInMinutes, tags, url,
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

    <VideoCard
      videoTitle={title}
      videoURL={url}
    />
  </Container>
);

export default PostCardAdmin;
