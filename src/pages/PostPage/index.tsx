import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';
import parse from 'html-react-parser';

import VideoCard from '../../components/VideoCard';
import loadFullPost from '../../services/loadFullPost';
import FullPost from '../../interfaces/fullPost';

import { Info } from './styles';
import PageTemplate from '../../components/PageTemplate';

interface Params {
  id: string;
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<FullPost>({
    id: 0,
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
    <PageTemplate>
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
    </PageTemplate>
  );
};

export default PostPage;
