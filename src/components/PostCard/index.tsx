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
  id, title, preview, createdAt, readingTimeInMinutes, tags, url,
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
        title={title}
        url={url as string}
      />
    </NavLink>
  </Container>
);

export default PostCard;
