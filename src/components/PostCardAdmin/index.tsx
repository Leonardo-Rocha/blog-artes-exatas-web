import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTag, FiEdit, FiTrash } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

import PreviewPost from '../../interfaces/previewPost';
import PostBannerPreview from '../PostBannerPreview';

import {
  Container,
  Preview,
  Title,
  Info,
  AdminButtons,
} from './styles';

const PostCardAdmin: React.FC<PreviewPost> = ({
  id, title, preview, createdAt, readingTimeInMinutes, tags, videoUrl,
}) => (
  <Container>
    <NavLink to={`/posts/${id}`} id="cardLink">
      <div>
        <Title>{title}</Title>

        <Preview>{preview}</Preview>

        <Info>
          {createdAt}
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
      </div>

      <PostBannerPreview
        videoTitle={title}
        videoURL={videoUrl as string}
      />

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
    </NavLink>
  </Container>
);

export default PostCardAdmin;
