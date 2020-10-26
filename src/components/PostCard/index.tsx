import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';

import PreviewPost from '../../interfaces/previewPost';
import PostBannerPreview from '../PostBannerPreview';

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

      <PostBannerPreview
        videoTitle={title}
        videoURL={videoUrl as string}
      />
    </NavLink>
  </Container>
);

export default PostCard;
