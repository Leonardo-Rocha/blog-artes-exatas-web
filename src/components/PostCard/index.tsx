import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';

import PreviewPost from '../../interfaces/previewPost';
import VideoCard from '../VideoCard';

import {
  Container,
  Preview,
  Title,
  Info,
} from './styles';

const PostCard: React.FC<PreviewPost> = ({
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

      <VideoCard
        videoTitle={title}
        videoURL={videoUrl}
      />
    </NavLink>
  </Container>
);

export default PostCard;
