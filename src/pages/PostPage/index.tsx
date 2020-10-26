import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FiTag } from 'react-icons/fi';
import parse from 'html-react-parser';

import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import loadFullPost from '../../services/loadFullPost';
import FullPost from '../../interfaces/fullPost';

import { Content, Info } from './styles';

interface Params {
  id: string;
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<FullPost>({
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
    readingTimeInMinutes: 0,
    tags: [],
    videoUrl: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams<Params>();

  useEffect(() => {
    loadFullPost(Number(id)).then((postResponse) => {
      if (postResponse) {
        setPost(postResponse);
      } else {
        setErrorMessage('Ops, algum erro ocorreu. Post não encontrado.');
      }
    });
  }, [id]);

  return (
    <Container>
      <Header />
      <Content>
        {errorMessage.length > 0 && (
          <p>errorMessage</p>
        )}

        <VideoCard
          videoTitle={post.title}
          videoURL={post.videoUrl}
          cardSize="banner"
        />

        <h1>{post.title}</h1>

        <Info>
          {post.createdAt}
          {' '}
          - Leitura de
          {' '}
          {post.readingTimeInMinutes}
          min |
          {' '}
          <FiTag />
          {' '}
          {post.tags.map((tag) => `${tag} `)}
        </Info>

        {parse(post.content)}
      </Content>
    </Container>
  );
};

export default PostPage;
