import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';

import {
  Container,
  Cover,
  Preview,
  Title,
  Info,
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

const PostCard: React.FC<Props> = ({
  title, preview, date, readingTimeInMinutes, tags, coverImgUrl, coverImgAlt,
}) => (
  <Container>
    <NavLink to="openPost">
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

      <Cover>
        <img
          src={coverImgUrl}
          alt={coverImgAlt}
        />
      </Cover>
    </NavLink>
  </Container>
);

export default PostCard;
