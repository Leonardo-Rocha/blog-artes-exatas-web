import React from 'react';
import { NavLink } from 'react-router-dom';
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
  showAdminButtons?: boolean;
}

const PostCard: React.FC<Props> = ({
  title, preview, date, readingTimeInMinutes, tags, coverImgUrl, coverImgAlt,
  showAdminButtons = false,
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

        {showAdminButtons && (
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
        )}
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
