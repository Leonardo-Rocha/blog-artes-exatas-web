import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FiTag } from 'react-icons/fi';
import parse from 'html-react-parser';

import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

import { Content, Info } from './styles';

const PostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [readingTimeInMinutes, setReadingTimeInMinutes] = useState(0);

  useEffect(() => {
    // TODO change to real api request
    setTitle('COMO ESCOLHER AS PEÇAS DO SEU PC - O Guia Definitivo');
    setContent('<h1>Pequeno teste contendo algumas tags HTML!</h1>'
     + '<p>S&oacute; quero saber se o uso das tags nn vai zoar a apresenta&ccedil;&atilde;o em react.'
     + '<br /><br /><span style="background-color: #34495e;">const [var, setVar] = useState&lt;type&gt;(initialValue);</span></p>');
    setDate('24/10/2020');
    setReadingTimeInMinutes(5);
    setTags(['#Tutorial', '#Computadores', '#tralha', '#POnceta']);
    setUrl('https://www.youtube.com/watch?v=OaPt-19C2No');
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <VideoCard
          videoTitle={title}
          videoURL={url}
          cardSize="banner"
        />

        <h1>{title}</h1>

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

        {parse(content)}
      </Content>
    </Container>
  );
};

export default PostPage;
