import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';

import {
  Container,
  Preview,
  Title,
  Info,
} from './styles';
import VideoCard from '../VideoCard';

interface Props {
  title: string;
  preview: string;
  date: string;
  readingTimeInMinutes: number;
  tags: string[];
  url: string;
}

const PostCard: React.FC<Props> = ({
  title, preview, date, readingTimeInMinutes, tags, url,
}) => (
  <Container>
    <NavLink to="openPost" id="cardLink">
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
      </div>

      <VideoCard
        videoTitle={title}
        videoURL={url}
      />
    </NavLink>
  </Container>
);

export default PostCard;
